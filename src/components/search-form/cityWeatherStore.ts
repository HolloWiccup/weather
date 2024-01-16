import { CityWeather } from '@/models/weather'
import { createUrl } from '@/helpers/helpers'
import { create } from 'zustand'
import { request } from '@/helpers/typed-request'
import { ForecastWeather } from '@/models/forecast'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

interface CityWeatherState {
	cityWeather: CityWeather | undefined
	forecastWeather: ForecastWeather | undefined
	getCityWeather: (city: string) => void
	getCityForecast: (city: string) => void
}

export const useCityWeatherStore = create<CityWeatherState>()((set) => ({
	cityWeather: undefined,
	forecastWeather: undefined,
	getCityWeather: async (city) => {
		const response = await request<CityWeather>(createUrl(WEATHER_URL, city))
		if (response) {
			set({ cityWeather: response })
		}
	},
	getCityForecast: async (city) => {
		const response = await request<ForecastWeather>(
			createUrl(FORECAST_URL, city),
		)
		if (response) {
			set({ forecastWeather: response })
		}
	},
}))
