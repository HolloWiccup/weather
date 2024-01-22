import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { useForecastStore } from '@/stores/forecastStore'
import { useCallback } from 'react'

const useFetchFullWeather = () => {
	const { fetchCurrentWeather, lastCities } = useCurrentWeatherStore((state) => state)
	const { fetchForecastWeather } = useForecastStore((state) => state)

	const fetchFullWeather = useCallback((city?: string) => {
		fetchCurrentWeather(city)
		fetchForecastWeather(city)
	}, [])

	return { fetchFullWeather, lastCities }
}

export { useFetchFullWeather,  }
