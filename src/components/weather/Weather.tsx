import { useCityWeatherStore } from '../search-form/cityWeatherStore'
import { WeatherHeader } from '../weather-header/WeatherHeader'
import { WeatherNow } from '../weather-now/WeatherNow'
import { classNames } from '@/helpers/classNames/classNames'
import classes from './Weather.module.scss'
import { Forecast } from '../forecast/Forecast'
// import { useSearchStore } from '../search-form/searchStore'

const Weather = () => {
	const cityWeather = useCityWeatherStore((state) => state.cityWeather)
	// const {value} = useSearchStore(state)

	return (
		<div className={classNames(classes.Weather)}>
			<WeatherNow cityWeather={cityWeather} />
			<div className={classNames(classes.content)}>
				<WeatherHeader />
				<Forecast />
			</div>
		</div>
	)
}

export { Weather }
