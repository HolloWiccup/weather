import { CurrentWeatherInfo } from '../current-weather-info/CurrentWeatherInfo'
import { CurrentWeatherDetails } from '../current-weather-details/CurrentWeatherDetails'
import { VStack } from '@/components/ui/stack'

const CurrentWeather = () => {
	return (
		<VStack gap="16">
			<CurrentWeatherInfo />
			<CurrentWeatherDetails />
		</VStack>
	)
}

export { CurrentWeather }
