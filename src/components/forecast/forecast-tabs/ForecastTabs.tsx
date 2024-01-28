import { classNames } from '@/helpers/classNames'
import classes from './ForecastTabs.module.scss'
import { ForecastTab } from '../forecast-tab/ForecastTab'
import { HStack } from '../../ui/stack'

interface ForecastTabs {
	keys: string[]
	activeTab: string
	onClick: (name: string) => void
}

const ForecastTabs = ({ keys, onClick, activeTab }: ForecastTabs) => {
	const tabs = keys.map((item, index) => (
		<ForecastTab
			active={item === activeTab}
			firstTab={index === 0}
			lastTab={index === keys.length - 1}
			name={item}
			key={item}
			onClick={onClick}
		/>
	))

	return (
		<HStack max className={classNames(classes.ForecastTabs)}>
			{tabs}
		</HStack>
	)
}

export { ForecastTabs }
