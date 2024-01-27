import { classNames } from '@/helpers/classNames'
import classes from './DayCardList.module.scss'
import { ForecastItem } from '@/models/forecast'
import { CardDay } from '../day-card/CardDay'

interface DayCardListProps {
	hourlyWether: ForecastItem[]
}

const DayCardList = ({ hourlyWether }: DayCardListProps) => {
	if(!hourlyWether) return (<div>empty</div>)

	const cards = hourlyWether.map((weather) => (
		<CardDay key={weather.dt_txt} item={weather} />
	))

	return (
		<div>
			<div className={classNames(classes.DayCardList)}>{...cards}</div>
		</div>
	)
}

export { DayCardList }
