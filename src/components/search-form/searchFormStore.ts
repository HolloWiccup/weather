import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchState {
	value: string
	setValue: (value: string) => void
	clearForm: () => void
}

export const useSearchStore = create<SearchState>()(
	persist(
		(set) => ({
			value: '',
			setValue: (value) => set({ value }),
			clearForm: () => set({ value: '' }),
		}),
		{
			name: 'form-store',
		},
	),
)
