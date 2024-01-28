import { WeatherHeader } from '../weather-header/WeatherHeader'
import { Forecast } from '../forecast/Forecast'
import { LastCities } from '../last-cities/LastCities'
import { HStack, VStack } from '../ui/stack'
import { CurrentWeather } from '../current-weather'
// import { useWeatherStore } from '@/stores/weatherStore'

// useWeatherStore.getState().fetchWeather()

const Weather = () => {
	const isMobile = window.innerWidth < 768

	if (isMobile) {
		return (
			<HStack gap="16" align="start">
				<VStack gap="16">
					<WeatherHeader />
					<CurrentWeather />
					<Forecast />
					<LastCities />
				</VStack>
			</HStack>
		)
	}

	return (
		<HStack gap="16" align="start">
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
