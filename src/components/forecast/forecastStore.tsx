import { create } from 'zustand'

interface ForecastState {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export const useForecastStore = create<ForecastState>()((set) => ({
	activeTab: '',
	setActiveTab(tab) {
		set({ activeTab: tab })
	},
}))
