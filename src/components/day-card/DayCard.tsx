import { classNames } from '@/helpers/classNames'
import classes from './DayCard.module.scss'
import {
	WeatherIcon,
	WeatherIconSize,
} from '@/components/weather-icon/WeatherIcon'
import { ForecastItem } from '@/models/forecast'
import { getTime } from '@/helpers/helpers'
import { VStack } from '../ui/stack'
import { memo } from 'react'

interface CardDayProps {
	item: ForecastItem
}

const DayCard = memo(({ item }: CardDayProps) => {
	const { dt, main, weather } = item

	return (
		<div className={classNames(classes.DayCard)}>
			<VStack gap="4">
				<p className={classNames(classes.dayweek)}>{getTime(dt)}</p>
				<WeatherIcon name={weather[0].icon} size={WeatherIconSize.MEDIUM} />
				<p className={classNames(classes.temperature)}>{`${Math.round(
					main.temp,
				)}°`}</p>
			</VStack>
		</div>
	)
})

export { DayCard }
