import { WeatherHeader } from '../weather-header/WeatherHeader'
import { WeatherNow } from '../weather-now/WeatherNow'
import { classNames } from '@/helpers/classNames/classNames'
import classes from './Weather.module.scss'
import { Forecast } from '../forecast/Forecast'
import { LastCities } from '../last-citities/LastCities'

const Weather = () => {

	return (
		<div className={classNames(classes.Weather)}>
			<WeatherNow />
			<div className={classNames(classes.content)}>
				<WeatherHeader />
				<Forecast />
				<LastCities />
			</div>
		</div>
	)
}

export { Weather }
