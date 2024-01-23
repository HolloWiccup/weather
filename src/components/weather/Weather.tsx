import { WeatherHeader } from '../weather-header/WeatherHeader'
import { CurrentWeather } from '../weather-now/CurrentWeather'
import { classNames } from '@/helpers/classNames/classNames'
import classes from './Weather.module.scss'
import { Forecast } from '../forecast/Forecast'
import { LastCities } from '../last-citities/LastCities'
import { Paper } from '../Paper/Paper'

const Weather = () => {
	return (
		<div className={classNames(classes.Weather)}>
				<CurrentWeather />
			<div className={classNames(classes.content)}>
				<Paper>
					<WeatherHeader />
				</Paper>
				<Paper>
					<Forecast />
				</Paper>
				<Paper>
					<LastCities />
				</Paper>
			</div>
		</div>
	)
}

export { Weather }
