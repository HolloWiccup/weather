import { classNames } from '@/helpers/classNames/classNames'
import classes from './WeatherHeader.module.scss'
import { SearchForm } from '../search-form/SearchForm'
import { getDate, getTime } from '@/helpers/helpers'
import { Paper } from '../paper/Paper'
import { useWeatherStore } from '@/stores/weatherStore'

const WeatherHeader = () => {
	const { currentWeather } = useWeatherStore((state) => state)

	if (!currentWeather)
		return (
			<div className={classNames(classes.WeatherHeader)}>
				<Paper max>
					<SearchForm />
				</Paper>
			</div>
		)

	return (
		<Paper max>
			<div className={classNames(classes.WeatherHeader)}>
				<div>
					<p className={classNames(classes.time)}>
						{getTime(currentWeather.date)}
					</p>
					<p className={classNames(classes.date)}>
						{getDate(currentWeather.date)}
					</p>
				</div>
				<SearchForm />
			</div>
		</Paper>
	)
}

export { WeatherHeader }
