// import classes from './CurrentWeather.module.scss'
// import { classNames } from '@/helpers/classNames/classNames'
import { CurrentWeatherInfo } from '../current-weather-info/CurrentWeatherInfo'
import { CurrentWeatherDetails } from '../current-weather-details/CurrentWeatherDetails'
import { VStack } from '../stack'

const CurrentWeather = () => {
	return (
		<VStack gap='16' max>
			<CurrentWeatherInfo />
			<CurrentWeatherDetails />
		</VStack>
			
	)
}

export { CurrentWeather }
