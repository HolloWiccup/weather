import { WeatherHeader } from '../weather-header/WeatherHeader'
import { CurrentWeather } from '../current-weather/CurrentWeather'
import { classNames } from '@/helpers/classNames/classNames'
import classes from './Weather.module.scss'
import { Forecast } from '../forecast/Forecast'
import { LastCities } from '../last-citities/LastCities'
import { VStack } from '../stack'

const Weather = () => {
	return (
		<div className={classNames(classes.Weather)}>
			<CurrentWeather />
			<VStack gap='16'>
				<WeatherHeader />
				<Forecast />
				<LastCities />
			</VStack>
		</div>
	)
}

export { Weather }
