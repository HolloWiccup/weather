import { fetchForecast, fetchWeather } from '@/helpers/api-helper'
import { getForecastNormalize, getWeatherNormalize } from '@/helpers/helpers'
import { ForecastNormalize } from '@/models/forecast'
import { WeatherNormalize } from '@/models/weather'
import { toast } from 'react-toastify'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WeatherStoreState {
	error: string
	loading: boolean
	currentWeather: WeatherNormalize | undefined
	forecastWeather: ForecastNormalize | undefined
	lastCities: string[]
	addLastCity: (city: string) => void
	fetchWeather: (city: string) => void
}

const useWeatherStore = create<WeatherStoreState>()(
	persist(
		(set, get) => ({
			currentWeather: undefined,
			forecastWeather: undefined,
			lastCities: [],
			error: '',
			loading: false,
			addLastCity: (cityName) => {
				const cities = get().lastCities.filter((city) => city !== cityName)
				set({ lastCities: [cityName, ...cities].slice(0, 9) })
			},
			fetchWeather: async (city: string = get().lastCities[0]) => {
				if (!city) return
				set({ loading: true, error: '' })
				try {
					const responseCurrent = await fetchWeather(city)
					const weatherNormalize = getWeatherNormalize(responseCurrent)

					const responseForecast = await fetchForecast(city)
					const forecastNormalize = getForecastNormalize(responseForecast.list)

					set({
						loading: false,
						currentWeather: weatherNormalize,
						forecastWeather: forecastNormalize,
					})

					get().addLastCity(responseCurrent.name)
				} catch (error) {
					set({ loading: false })
					if (error instanceof Error) {
						console.log(error.message)
						set({ error: error.message })
						toast.error(error.message)
					}
				}
			},
		}),
		{
			name: 'weather-city',
		},
	),
)

export { useWeatherStore }
