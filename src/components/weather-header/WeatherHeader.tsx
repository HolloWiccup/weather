import { classNames } from '@/helpers/classNames'
import classes from './WeatherHeader.module.scss'
import { SearchForm } from '../search-form/SearchForm'
import { getDate, getTime } from '@/helpers/helpers'
import { Paper } from '../ui/paper/Paper'
import { useWeatherStore } from '@/stores/weatherStore'
import { HStack, VStack } from '../ui/stack'

const WeatherHeader = () => {
	const { currentWeather } = useWeatherStore((state) => state)

	if (!currentWeather)
		return (
			<Paper max>
				<SearchForm />
			</Paper>
		)

	return (
		<Paper max>
			<VStack>
				<HStack max justify="between" gap="8">
					<p className={classNames(classes.time)}>
						{getTime(currentWeather.date)}
					</p>
					<SearchForm />
				</HStack>
				<p className={classNames(classes.date)}>
					{getDate(currentWeather.date)}
				</p>
			</VStack>
		</Paper>
	)
}

export { WeatherHeader }
