import { WeatherHeader } from '../weather-header/WeatherHeader'
import { Forecast } from '../forecast/Forecast'
import { LastCities } from '../last-cities/LastCities'
import { HStack, VStack } from '../stack'
import { CurrentWeather } from '../current-weather'

const Weather = () => {
	return (
		<HStack gap="16" align='start'>
			<CurrentWeather />
			<VStack gap="16">
				<WeatherHeader />
				<Forecast />
				<LastCities />
			</VStack>
		</HStack>
	)
}

export { Weather }
