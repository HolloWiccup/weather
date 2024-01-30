import { classNames } from '@/helpers/classNames'
import classes from './DayCardList.module.scss'
import { ForecastItem } from '@/models/forecast'
import { DayCard } from '../day-card/DayCard'
import { HStack } from '../ui/stack'

interface DayCardListProps {
	hourlyWether: ForecastItem[]
}

const DayCardList = ({ hourlyWether }: DayCardListProps) => {
	if (!hourlyWether) {
		return <></>
	}

	const cards = hourlyWether.map((weather) => (
		<DayCard key={weather.dt_txt} item={weather} />
	))

	return (
		<div className={classNames(classes.DayCardList)}>
			{/* <HStack max gap="8" wrap> */}
				{cards}
			{/* </HStack> */}
		</div>
	)
}

export { DayCardList }
