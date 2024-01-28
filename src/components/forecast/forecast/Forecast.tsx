import { DayCardList } from '../../day-card-list/DayCardList'
import { ForecastTabs } from '../forecast-tabs/ForecastTabs'
import { Paper } from '../../ui/paper/Paper'
import { HStack, VStack } from '../../ui/stack'
import { useWeatherStore } from '@/stores/weatherStore'
import { Skeleton } from '../../ui/skeleton/Skeleton'
import { useTab } from '@/hooks/useTab'

const Forecast = () => {
	const { forecastWeather, loading } = useWeatherStore((state) => state)
	const { activeTab, setActiveTab, keys } = useTab(forecastWeather)

	if (!forecastWeather || loading) {
		return (
			<Paper max>
				<VStack gap="8">
					<Skeleton />
					<HStack gap='8'>
						<Skeleton width={87} height={150} />
						<Skeleton width={87} height={150} />
						<Skeleton width={87} height={150} />
						<Skeleton width={87} height={150} />
					</HStack>
				</VStack>
			</Paper>
		)
	}

	return (
		<Paper max>
			<VStack gap="8" max>
				<ForecastTabs
					keys={keys}
					onClick={setActiveTab}
					activeTab={activeTab}
				/>
				<DayCardList hourlyWether={forecastWeather[activeTab]} />
			</VStack>
		</Paper>
	)
}

export { Forecast }
