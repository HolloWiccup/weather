import { requestStatus } from '@/helpers/api-helper'
import { createUrl } from '@/helpers/helpers'
import { request } from '@/helpers/typed-request'
import { CityWeather } from '@/models/weather'
import { create } from 'zustand'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

interface CurrentWeatherState {
	currentWeather: CityWeather | undefined
	status: requestStatus
	error: string
	fetchCurrentWeather: (city: string) => void
}

const useCurrentWeatherStore = create<CurrentWeatherState>((set) => ({
	currentWeather: undefined,
	error: '',
	status: requestStatus.IDLE,
	fetchCurrentWeather: async (city: string) => {
		set({ status: requestStatus.LOADING, error: '' })
		try {
			const response = await request<CityWeather>(
        createUrl(WEATHER_URL, city),
      )
			set({ status: requestStatus.SUCCEEDED, currentWeather: response })
		} catch (error) {
			set({ status: requestStatus.FAILED })
			if (error instanceof Error) {
				set({ error: error.message })
			}
		}
	},
}))

export { useCurrentWeatherStore }
