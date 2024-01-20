import { classNames } from '@/helpers/classNames/classNames'
import classes from './Forecast.module.scss'
import { DayCardList } from '../day-card-list/DayCardList'
import { ForecastNormalize } from '@/models/forecast'
import { useForecastStore } from './forecastStore'
import { useEffect, useMemo } from 'react'
import { ForecastTabs } from '../forecast-tabs/ForecastTabs'

interface ForecastProps {
	forecastWeather: ForecastNormalize
}

const Forecast = ({ forecastWeather }: ForecastProps) => {
	const { activeTab, setActiveTab } = useForecastStore()

	const keys = useMemo(() => Object.keys(forecastWeather), [forecastWeather])

	useEffect(() => {
		setActiveTab(keys[0])
	}, [setActiveTab, keys])

	return (
		<div className={classNames(classes.Forecast)}>
			<ForecastTabs keys={keys} onClick={setActiveTab} activeTab={activeTab} />
			<DayCardList hourlyWether={forecastWeather[activeTab]} />
		</div>
	)
}

export { Forecast }
