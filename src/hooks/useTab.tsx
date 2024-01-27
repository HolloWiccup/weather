import { ForecastNormalize } from '@/models/forecast'
import { useEffect, useState } from 'react'

export const useTab = (forecast?: ForecastNormalize) => {
	const [keys, setKeys] = useState<string[]>([])
	const [activeTab, setActiveTab] = useState<string>('')

	useEffect(() => {
		if (forecast) {
			const forecastKeys = Object.keys(forecast)
			setKeys(forecastKeys)
			setActiveTab(forecastKeys[0])
		}
	}, [forecast])

	return { keys, activeTab, setActiveTab }
}
