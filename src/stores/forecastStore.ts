import { fetchForecast, requestStatus } from '@/helpers/api-helper'
import { getForecastNormalize } from '@/helpers/helpers'
import { ForecastNormalize } from '@/models/forecast'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ForecastState {
	cityName: string
	forecast: ForecastNormalize
	status: requestStatus
	error: string
	fetchForecastWeather: (city?: string) => void
}

const useForecastStore = create<ForecastState>()(
	persist(
		(set, get) => ({
			forecast: {},
			error: '',
			cityName: '',
			status: requestStatus.IDLE,
			fetchForecastWeather: async (city: string = get().cityName) => {
				set({ status: requestStatus.LOADING, error: '' })
				try {
					const response = await fetchForecast(city)
					const normalize = getForecastNormalize(response.list)
					set({
						status: requestStatus.SUCCEEDED,
						forecast: normalize,
						cityName: city,
					})
				} catch (error) {
					set({ status: requestStatus.FAILED })
					if (error instanceof Error) {
						set({ error: error.message })
					}
				}
			},
		}),
		{
			name: 'forecast-store',
		},
	),
)

export { useForecastStore }
