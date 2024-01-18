import { classNames } from '@/helpers/classNames/classNames'
import classes from './DayTabs.module.scss'

interface DayTabProps {
	name: string
	active: boolean
	onClick: (name: string) => void
}

const DayTab = ({ onClick, name, active }: DayTabProps) => {
	const onClickHandler = () => {
		onClick(name)
	}

	return (
		<button
			onClick={onClickHandler}
			className={classNames(classes.DayTab, { [classes.active]: active })}
		>
			{name}
		</button>
	)
}

export { DayTab }
