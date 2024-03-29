import { classNames } from '@/helpers/classNames'
import classes from './CurrentWeatherDetails.module.scss'
import { useWeatherStore } from '@/stores/weatherStore'
import SunriseIcon from '@/assets/icons/sunrise-icon.svg'
import SunsetIcon from '@/assets/icons/sunset-icon.svg'
import { getTime } from '@/helpers/helpers'
import { WeatherDetailsItem } from '../weather-details-item/WeatherDetailsItem'
import { IconSvg } from '@/components/ui/icon-svg/IconSvg'
import { Paper } from '@/components/ui/paper/Paper'
import { Skeleton } from '@/components/ui/skeleton/Skeleton'
import { VStack } from '@/components/ui/stack'

const skeleton = (
	<Paper max>
		<VStack gap="8">
			<Skeleton height={24} />
			<Skeleton height={24} />
			<Skeleton height={24} />
			<Skeleton height={24} />
			<Skeleton height={24} />
		</VStack>
	</Paper>
)

const CurrentWeatherDetails = () => {
	const { currentWeather, loading } = useWeatherStore((state) => state)

	if (!currentWeather || loading) {
		return <>{skeleton}</>
	}

	const { sunrise, sunset, feels, humidity, wind } = currentWeather

	return (
		<Paper max className={classNames(classes.CurrentWeatherDetails)}>
			<VStack gap="8">
				<WeatherDetailsItem>
					<span>{'Ощущается'}</span>
					<span>{`${Math.round(feels)}℃`}</span>
				</WeatherDetailsItem>
				<WeatherDetailsItem>
					<span>{'Влажность'}</span>
					<span>{`${humidity}%`}</span>
				</WeatherDetailsItem>
				<WeatherDetailsItem>
					<span>{'Ветер'}</span>
					<span>{`${wind} m/sec`}</span>
				</WeatherDetailsItem>
				<WeatherDetailsItem>
					<IconSvg Svg={SunriseIcon} className={classNames(classes.small)} />
					<span>{getTime(sunrise)}</span>
				</WeatherDetailsItem>
				<WeatherDetailsItem>
					<IconSvg Svg={SunsetIcon} className={classNames(classes.small)} />
					<span>{getTime(sunset)}</span>
				</WeatherDetailsItem>
			</VStack>
		</Paper>
	)
}

export { CurrentWeatherDetails }
