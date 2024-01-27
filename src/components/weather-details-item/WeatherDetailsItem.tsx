import { classNames } from '@/helpers/classNames/classNames'
import classes from './WeatherDetailsItem.module.scss'
import { ReactNode } from 'react'
import { Card } from '../Card/Card'
import { HStack } from '../stack'

interface WeatherDetailsItemProps {
	children: ReactNode
	className?: string
}

const WeatherDetailsItem = ({
	children,
	className,
}: WeatherDetailsItemProps) => {
	return (
		<Card className={classNames(classes.WeatherDetailsItem, {}, [className])}>
			<HStack justify="between" gap='4' max>{children}</HStack>
		</Card>
	)
}

export { WeatherDetailsItem }
