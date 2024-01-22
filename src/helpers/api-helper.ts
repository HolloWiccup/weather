import { ForecastWeather } from '@/models/forecast'
import { CityWeather } from '@/models/weather'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

const API_KEY = 'aefaf2ee38ea734b4f10c61ceafcc3cc'

export enum requestStatus {
	IDLE = 'idle',
	LOADING = 'loading',
	SUCCEEDED = 'succeeded',
	FAILED = 'failed',
}

const createUrl = (url: string, city: string) => {
	return `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`
}

const request = async<T>(url: string): Promise<T> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	return await (response.json() as Promise<T>)
}

export const fetchWeather = async (city: string) => {
	return await request<CityWeather>(createUrl(WEATHER_URL, city))
}

export const fetchForecast = async (city: string) => {
	return await request<ForecastWeather>(createUrl(FORECAST_URL, city))
}