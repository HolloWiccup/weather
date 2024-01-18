import { useCityWeatherStore } from '../search-form/cityWeatherStore'
import { WeatherHeader } from '../weather-header/WeatherHeader'
import { WeatherNow } from '../weather-now/WeatherNow'
import { classNames } from '@/helpers/classNames/classNames'
import classes from './Weather.module.scss'
import { Forecast } from '../forecast/Forecast'
import { useEffect } from 'react'

const Weather = () => {
	const { cityWeather, forecastWeather, lastRequestCity, getWeather } = useCityWeatherStore()
	useEffect(() => {
		if (lastRequestCity) getWeather(lastRequestCity)
	}, [])

	return (
		<div className={classNames(classes.Weather)}>
			<WeatherNow cityWeather={cityWeather} />
			<div className={classNames(classes.content)}>
				<WeatherHeader />
				{forecastWeather && <Forecast forecastWeather={forecastWeather} />}
			</div>
		</div>
	)
}

export { Weather }
