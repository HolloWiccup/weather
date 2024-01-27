import { requestStatus } from '@/helpers/api-helper'
import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { useForecastStore } from '@/stores/forecastStore'
import { useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'

const useFetchFullWeather = () => {
	const { fetchCurrentWeather, lastCities, error, status } =
		useCurrentWeatherStore((state) => state)
	const { fetchForecastWeather } = useForecastStore((state) => state)

	const fetchFullWeather = useCallback((city?: string) => {
		fetchCurrentWeather(city)
		fetchForecastWeather(city)
	}, [])

	useEffect(() => {
		switch (status) {
			case requestStatus.FAILED:
				toast.error(error)
				break;
			case requestStatus.SUCCEEDED:
				toast.success('succeed')
				break;
		}

	}, [error, status])

	return { fetchFullWeather, lastCities }
}

export { useFetchFullWeather }
