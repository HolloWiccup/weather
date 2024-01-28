import { Mods, classNames } from '@/helpers/classNames'
import classes from './ForecastTab.module.scss'
import { memo } from 'react'

interface ForecastTabProps {
	onClick: (name: string) => void
	name: string
	active: boolean
	firstTab: boolean
	lastTab: boolean
}

const ForecastTab = memo((props: ForecastTabProps) => {
	const { onClick, name, active, firstTab, lastTab } = props

	const onClickHandler = () => {
		if (!active) onClick(name)
	}

	const mods: Mods = {
		[classes.firstTab]: firstTab,
		[classes.lastTab]: lastTab,
		[classes.active]: active,
	}

	return (
		<button
			onClick={onClickHandler}
			className={classNames(classes.ForecastTab, mods)}
		>
			{name}
		</button>
	)
})

export { ForecastTab }
