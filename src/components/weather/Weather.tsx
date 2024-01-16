import { useCityWeatherStore } from '../search-form/cityWeatherStore'
import { WeatherHeader } from '../weather-header/WeatherHeader'
import { WeatherNow } from '../weather-now/WeatherNow'
import { classNames } from '@/helpers/classNames/classNames'
import classes from './Weather.module.scss'

const Weather = () => {
	const cityWeather = useCityWeatherStore((state) => state.cityWeather)

	return (
		<div className={classNames(classes.Weather)}>
			<WeatherNow cityWeather={cityWeather} />
			<div className={classNames(classes.content)}>
				<WeatherHeader />
			</div>
		</div>
	)
}

export { Weather }
