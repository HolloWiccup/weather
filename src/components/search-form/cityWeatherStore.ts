import { CityWeather } from '@/models/weather'
import { createUrl } from '@/helpers/helpers'
import { create } from 'zustand'
import { request } from '@/helpers/typed-request'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

interface CityWeatherState {
	cityWeather: CityWeather | undefined
	getCityWeather: (city: string) => void
}

export const useCityWeatherStore = create<CityWeatherState>()((set) => ({
	cityWeather: undefined,
	getCityWeather: async (city) => {
		const response = await request<CityWeather>(createUrl(WEATHER_URL, city))
		if (response) {
			set({ cityWeather: response })
		}
	},
}))
