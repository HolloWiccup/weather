import { classNames } from '@/helpers/classNames/classNames'
import classes from './ForecastTab.module.scss'
import { memo } from 'react'

interface ForecastTabProps {
	onClick: (name: string) => void
	name: string
	active: boolean
}

const ForecastTab = memo(({ onClick, name, active }: ForecastTabProps) => {
	const onClickHandler = () => {
		if (!active) onClick(name)
	}

	return (
		<button
			onClick={onClickHandler}
			className={classNames(classes.ForecastTab, { [classes.active]: active })}
		>
			{name}
		</button>
	)
})

export { ForecastTab }
