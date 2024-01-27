import { classNames } from '@/helpers/classNames/classNames'
import classes from './ForecastTabs.module.scss'
import { ForecastTab } from '../forecast-tab/ForecastTab'
import { HStack } from '../stack'

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

	return (
		<HStack max className={classNames(classes.ForecastTabs)} >
			{tabs}
		</HStack>
	)
}

export { ForecastTabs }
