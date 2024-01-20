import { useCityWeatherStore } from '@/stores/cityWeatherStore'
import { WeatherHeader } from '../weather-header/WeatherHeader'
import { WeatherNow } from '../weather-now/WeatherNow'
import { classNames } from '@/helpers/classNames/classNames'
import classes from './Weather.module.scss'
import { Forecast } from '../forecast/Forecast'
import { useEffect } from 'react'
import { LastCities } from '../last-citities/LastCities'

const Weather = () => {
	const { cityWeather, forecastWeather, lastRequestCities, getWeather } =
		useCityWeatherStore()
	// useEffect(() => {
	// 	if (cityWeather) getWeather(cityWeather.name)
	// }, [])

	return (
		<div className={classNames(classes.Weather)}>
			<WeatherNow cityWeather={cityWeather} />
			<div className={classNames(classes.content)}>
				<WeatherHeader />
				{forecastWeather && <Forecast forecastWeather={forecastWeather} />}
				<LastCities onClick={getWeather} weatherCities={lastRequestCities} />
			</div>
		</div>
	)
}

export { Weather }
