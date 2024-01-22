import { classNames } from '@/helpers/classNames/classNames'
import classes from './WeatherHeader.module.scss'
import { SearchForm } from '../search-form/SearchForm'
import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { getDate, getTime } from '@/helpers/helpers'

const WeatherHeader = () => {
	const { currentWeather } = useCurrentWeatherStore((state) => state)

	if (!currentWeather)
		return (
			<div className={classNames(classes.WeatherHeader)}>
				<SearchForm />
			</div>
		)

	const { dt } = currentWeather
	const time = getTime(dt)
	const date = getDate(dt)

	return (
		<div className={classNames(classes.WeatherHeader)}>
			<div>
				<p className={classNames(classes.time)}>{time}</p>
				<p className={classNames(classes.date)}>{date}</p>
			</div>
			<SearchForm />
		</div>
	)
}

export { WeatherHeader }
