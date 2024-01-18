import { classNames } from '@/helpers/classNames/classNames'
import classes from './CardDay.module.scss'
import { WeatherIcon } from '@/components/weather-icon/WeatherIcon'
import { ForecastItem } from '@/models/forecast'
import { getDate } from '@/helpers/helpers'

interface CardDayProps {
	item: ForecastItem
}

const CardDay = ({ item }: CardDayProps) => {
	const { dt, main, weather } = item
	const date = getDate(dt)
	const elem = <WeatherIcon name={weather[0].icon} />
	const temperature = `${Math.round(main.temp)}°`
	// const temperature = `21°`
	return (
		<div className={classNames(classes.CardDay)}>
			<div className={classNames(classes.center)}>
				<p className={classNames(classes.dayweek)}>{date}</p>
				{elem}
				<p className={classNames(classes.temperature)}>{temperature}</p>
			</div>
		</div>
	)
}

export { CardDay }
