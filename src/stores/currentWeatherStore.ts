import { fetchWeather, requestStatus } from '@/helpers/api-helper'
import { CityWeather } from '@/models/weather'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CurrentWeatherState {
	currentWeather: CityWeather | undefined
	lastCities: string[]
	addLastCity: (city: string) => void
	status: requestStatus
	error: string
	fetchCurrentWeather: (city?: string) => void
}

const useCurrentWeatherStore = create<CurrentWeatherState>()(
	persist(
		(set, get) => ({
			currentWeather: undefined,
			lastCities: [],
			error: '',
			status: requestStatus.IDLE,
			addLastCity: (cityName) => {
				const cities = get().lastCities.filter((city) => city !== cityName)
				set({ lastCities: [cityName, ...cities].slice(0, 9) })
			},
			fetchCurrentWeather: async (city: string = get().lastCities[0]) => {
				if(!city) return
				set({ status: requestStatus.LOADING, error: '' })
				try {
					const response = await fetchWeather(city)
					set({ status: requestStatus.SUCCEEDED, currentWeather: response })
					get().addLastCity(response.name)
				} catch (error) {
					set({ status: requestStatus.FAILED })
					if (error instanceof Error) {
						set({ error: error.message })
					}
				}
			},
		}),
		{
			name: 'request-city',
		},
	),
)

export { useCurrentWeatherStore }
