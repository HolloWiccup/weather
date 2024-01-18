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
	getCityWeather: (city: string) => Promise<{ ok: boolean }>
	getCityForecast: (city: string) => Promise<{ ok: boolean }>
}

export const useCityWeatherStore = create<CityWeatherState>()((set) => ({
	cityWeather: undefined,
	forecastWeather: undefined,
	getCityWeather: async (city) => {
		try {
			const response = await request<CityWeather>(createUrl(WEATHER_URL, city))
			if (response) {
				set({ cityWeather: response })
				return new Promise((resolve) => resolve({ ok: true }))
			}
			return new Promise((resolve) => resolve({ ok: false }))
		} catch (error) {
			return new Promise((resolve) => resolve({ ok: false }))
		}
	},
	getCityForecast: async (city) => {
		try {
			const response = await request<ForecastWeather>(createUrl(FORECAST_URL, city))
			if (response) {
				set({ forecastWeather: response })
				return new Promise((resolve) => resolve({ ok: true }))
			}
			return new Promise((resolve) => resolve({ ok: false }))
		} catch (error) {
			return new Promise((resolve) => resolve({ ok: false }))
		}
	},
}))
