import { classNames } from '@/helpers/classNames/classNames'
import classes from './Forecast.module.scss'
import { DayCardList } from '../day-card-list/DayCardList'
import { DayTab } from '../day-tab/DayTab'
import { useState } from 'react'
import { ForecastNormalize } from '@/models/forecast'

interface ForecastProps {
	forecastWeather: ForecastNormalize
}

const Forecast = ({ forecastWeather }: ForecastProps) => {

	const keys = Object.keys(forecastWeather)
	const [activeTab, setActiveTab] = useState(keys[0])

	const onClickTabHandler = (name: string) => {
		setActiveTab(name)
	}

	return (
		<div className={classNames(classes.Forecast)}>
			<div className={classNames(classes.tabs)}>
				{keys.map((item) => (
					<DayTab
						active={activeTab === item}
						onClick={onClickTabHandler}
						name={item}
						key={item}
					/>
				))}
			</div>
			<DayCardList hourlyWether={forecastWeather[activeTab]} />
		</div>
	)
}

export { Forecast }
