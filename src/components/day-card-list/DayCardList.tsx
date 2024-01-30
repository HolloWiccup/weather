import { classNames } from '@/helpers/classNames'
import classes from './DayCardList.module.scss'
import { ForecastItem } from '@/models/forecast'
import { DayCard } from '../day-card/DayCard'
import { memo } from 'react'

interface DayCardListProps {
	hourlyWether: ForecastItem[]
}

const DayCardList = memo(({ hourlyWether }: DayCardListProps) => {
	if (!hourlyWether) {
		return <></>
	}

	const cards = hourlyWether.map((weather) => (
		<DayCard key={weather.dt_txt} item={weather} />
	))

	return <div className={classNames(classes.DayCardList)}>{cards}</div>
})

export { DayCardList }
