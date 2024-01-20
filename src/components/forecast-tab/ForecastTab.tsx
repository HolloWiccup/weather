import { classNames } from '@/helpers/classNames/classNames'
import classes from './ForecastTab.module.scss'

interface ForecastTabProps {
	onClick: (name: string) => void
	name: string
	active: boolean
}

const ForecastTab = ({ onClick, name, active }: ForecastTabProps) => {
	
	const onClickHandler = () => {
		onClick(name)
	}

	return (
		<button
			onClick={onClickHandler}
			className={classNames(classes.ForecastTab, { [classes.active]: active })}
		>
			{name}
		</button>
	)
}

export { ForecastTab }
