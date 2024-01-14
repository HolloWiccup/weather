import { classNames } from '@/helpers/classNames/classNames'
import classes from './CardDay.module.scss'
import { WeatherIcon } from '@/components/weather-icon/WeatherIcon'

const CardDay = () => {
	const elem = <WeatherIcon group="thunderstorm" name="11d" />
  
	const temperature = `21°`
	return (
		<div className={classNames(classes.CardDay)}>
			<div className={classNames(classes.center)}>
				<p className={classNames(classes.dayweek)}>Fri</p>
				{elem}
				<p className={classNames(classes.temperature)}>{temperature}</p>
			</div>
		</div>
	)
}

export { CardDay }
