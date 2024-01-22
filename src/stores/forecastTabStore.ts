import { create } from 'zustand'

interface ForecastTabState {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export const useForecastTabStore = create<ForecastTabState>()((set) => ({
	activeTab: '',
	setActiveTab(tab) {
		set({ activeTab: tab })
	},
}))
