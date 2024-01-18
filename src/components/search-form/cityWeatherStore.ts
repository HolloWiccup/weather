import { CityWeather } from '@/models/weather'
import { createUrl, getArrayDate } from '@/helpers/helpers'
import { create } from 'zustand'
import { request } from '@/helpers/typed-request'
import { ForecastNormalize, ForecastWeather } from '@/models/forecast'
import { persist } from 'zustand/middleware'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

interface CityWeatherState {
	cityWeather: CityWeather | undefined
	forecastWeather: ForecastNormalize | undefined
	lastRequestCity: string
	getCityWeather: (city: string) => Promise<{ ok: boolean }>
	getWeather: (city: string) => Promise<{ ok: boolean }>
	getCityForecast: (city: string) => Promise<{ ok: boolean }>
}

export const useCityWeatherStore = create<CityWeatherState>()(
	persist(
		(set, get) => ({
			cityWeather: undefined,
			forecastWeather: undefined,
			lastRequestCity: '',
			getCityWeather: async (city) => {
				try {
					const response = await request<CityWeather>(
						createUrl(WEATHER_URL, city),
					)
					if (response) {
						set({ cityWeather: response, lastRequestCity: response.name })
						return new Promise((resolve) => resolve({ ok: true }))
					}
					return new Promise((resolve) => resolve({ ok: false }))
				} catch (error) {
					return new Promise((resolve) => resolve({ ok: false }))
				}
			},
			getWeather: async (city) => {
				try {
					get().getCityWeather(city);
					get().getCityForecast(city);

					return new Promise((resolve) => resolve({ ok: true }))
				} catch (error) {
					return new Promise((resolve) => resolve({ ok: false }))
				}
			},
			getCityForecast: async (city) => {
				try {
					const response = await request<ForecastWeather>(
						createUrl(FORECAST_URL, city),
					)
					if (response) {
						console.log(response);
						const obj: ForecastNormalize = getArrayDate(response.list)
						set({ forecastWeather: obj })
						return new Promise((resolve) => resolve({ ok: true }))
					}
					return new Promise((resolve) => resolve({ ok: false }))
				} catch (error) {
					return new Promise((resolve) => resolve({ ok: false }))
				}
			},
		}),
		{ name: 'request-city' },
	),
)
