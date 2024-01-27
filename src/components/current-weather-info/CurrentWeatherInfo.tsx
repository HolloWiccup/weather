import { classNames } from '@/helpers/classNames/classNames'
import classes from './CurrentWeatherInfo.module.scss'
import { IconSvg } from '../IconSvg/IconSvg'
import { Paper } from '../paper/Paper'
import { WeatherIcon, WeatherIconSize } from '../weather-icon/WeatherIcon'
import LocationIcon from '@/assets/icons/location-icon.svg'
import { Skeleton } from '../skeleton/Skeleton'
import { useWeatherStore } from '@/stores/weatherStore'
import { HStack, VStack } from '../stack'

const skeleton = (
	<Paper>
		<VStack gap="8">
			<HStack gap="8">
				<Skeleton width={24} height={24} />
				<Skeleton width={160} height={24} />
			</HStack>
			<Skeleton width={200} height={200} />
			<Skeleton width={70} height={50} />
		</VStack>
	</Paper>
)

const CurrentWeatherInfo = () => {
	const { currentWeather, loading } = useWeatherStore((state) => state)

	if (!currentWeather || loading) {
		return <>{skeleton}</>
	}

	const { temperature, city, icon } = currentWeather
	const temperatureCelsius = `${Math.round(temperature)}℃`

	return (
		<Paper>
			<VStack gap="8">
				<HStack gap="8" className={classes.location}>
					<IconSvg Svg={LocationIcon} />
					<p>{city}</p>
				</HStack>
				<WeatherIcon name={icon} size={WeatherIconSize.BIG} />
				<p className={classNames(classes.temperature)}>{temperatureCelsius}</p>
			</VStack>
		</Paper>
	)
}

export { CurrentWeatherInfo }
