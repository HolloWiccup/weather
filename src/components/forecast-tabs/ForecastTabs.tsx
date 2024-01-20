import { classNames } from '@/helpers/classNames/classNames'
import classes from './ForecastTabs.module.scss'
import { ForecastTab } from '../forecast-tab/ForecastTab'

interface ForecastTabs {
	keys: string[]
	activeTab: string
	onClick: (name: string) => void
}

const ForecastTabs = ({ keys, onClick, activeTab }: ForecastTabs) => {

	const tabs = keys.map((item) => (
		<ForecastTab
			active={item === activeTab}
			name={item}
			key={item}
			onClick={onClick}
		/>
	))

	return <div className={classNames(classes.ForecastTabs)}>{tabs}</div>
}

export { ForecastTabs }
