import { WeatherHeader } from '../weather-header/WeatherHeader'
import { LastCities } from '../last-cities/LastCities'
import { HStack, VStack } from '../ui/stack'
import { CurrentWeather } from '../current-weather'
import { useWeatherStore } from '@/stores/weatherStore'
import { Forecast } from '../forecast'
import { useResize } from '@/hooks/useResize'

useWeatherStore.getState().fetchWeather()

const Weather = () => {
	const { isScreenMd } = useResize()

	if (!isScreenMd) {
		return (
			<HStack max gap="16">
				<VStack align="center" max gap="16">
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
