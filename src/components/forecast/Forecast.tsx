import { classNames } from '@/helpers/classNames/classNames'
import classes from './Forecast.module.scss'
import { DayCardList } from '../day-card-list/DayCardList'
import { useForecastTabStore } from '../../stores/forecastTabStore'
import { useEffect, useMemo } from 'react'
import { ForecastTabs } from '../forecast-tabs/ForecastTabs'
import { useForecastStore } from '@/stores/forecastStore'

const Forecast = () => {
	const { activeTab, setActiveTab } = useForecastTabStore((state) => state)
	const { forecast } = useForecastStore((state) => state)

	const keys = useMemo(() => Object.keys(forecast), [forecast])

	useEffect(() => {
		setActiveTab(keys[0])
	}, [setActiveTab, keys])

	return (
		<div className={classNames(classes.Forecast)}>
			<ForecastTabs keys={keys} onClick={setActiveTab} activeTab={activeTab} />
			<DayCardList hourlyWether={forecast[activeTab]} />
		</div>
	)
}

export { Forecast }
