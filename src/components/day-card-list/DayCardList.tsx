import { classNames } from '@/helpers/classNames'
import classes from './DayCardList.module.scss'
import { ForecastItem } from '@/models/forecast'
import { DayCard } from '../day-card/DayCard'

interface DayCardListProps {
	hourlyWether: ForecastItem[]
}

const DayCardList = ({ hourlyWether }: DayCardListProps) => {
	if(!hourlyWether) return (<div>empty</div>)

	const cards = hourlyWether.map((weather) => (
		<DayCard key={weather.dt_txt} item={weather} />
	))

	return (
		<div>
			<div className={classNames(classes.DayCardList)}>{...cards}</div>
		</div>
	)
}

export { DayCardList }
