import { CurrentWeatherInfo } from '../current-weather-info/CurrentWeatherInfo'
import { CurrentWeatherDetails } from '../current-weather-details/CurrentWeatherDetails'
import { VStack } from '@/components/ui/stack'
import { memo } from 'react'

const CurrentWeather = memo(() => {
	return (
		<VStack max gap="16">
			<CurrentWeatherInfo />
			<CurrentWeatherDetails />
		</VStack>
	)
})

export { CurrentWeather }
