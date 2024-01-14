import { useCityWeatherStore } from '../search-form/cityWeatherStore'
import { WeatherHeader } from '../weather-header/WeatherHeader'
import { WeatherNow } from '../weather-now/WeatherNow'
import classes from './Weather.module.scss'
import { classNames } from '@/helpers/classNames/classNames'

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
