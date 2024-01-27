import { classNames } from '@/helpers/classNames'
import classes from './CardDay.module.scss'
import {
	WeatherIcon,
	WeatherIconSize,
} from '@/components/weather-icon/WeatherIcon'
import { ForecastItem } from '@/models/forecast'
import { getTime } from '@/helpers/helpers'
import { Card } from '../Card/Card'
import { VStack } from '../stack'

interface CardDayProps {
	item: ForecastItem
}

const CardDay = ({ item }: CardDayProps) => {
	const { dt, main, weather } = item

	return (
		<Card>
			<VStack gap="4">
				<p className={classNames(classes.dayweek)}>{getTime(dt)}</p>
				<WeatherIcon name={weather[0].icon} size={WeatherIconSize.MEDIUM} />
				<p className={classNames(classes.temperature)}>{`${Math.round(
					main.temp,
				)}°`}</p>
			</VStack>
		</Card>
	)
}

export { CardDay }
