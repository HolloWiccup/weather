import classes from './WeatherNow.module.scss'
import LocationIcon from '@/assets/icons/location-icon.svg'
import { classNames } from '@/helpers/classNames/classNames'
import { IconSvg } from '../IconSvg/IconSvg'
import { SunsetSunrise } from '../sunset-sunrise/SunsetSunrise'
import { WeatherNowDetails } from '../weather-now-details/WeatherNowDetails'
import { WeatherIcon, WeatherIconSize } from '../weather-icon/WeatherIcon'
import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { requestStatus } from '@/helpers/api-helper'
import { Skeleton } from '../skeleton/Skeleton'

useCurrentWeatherStore.getState().fetchCurrentWeather()

const skeleton = (
	<div className={classNames(classes.WeatherNow)}>
		<div className={classNames(classes.location)}>
			<Skeleton width={30} height={30} />
			<Skeleton width={100} height={30} />
		</div>
		<div className={classNames(classes.info)}>
			<Skeleton width={200} height={200} />
			<Skeleton
				width={70}
				height={50}
				className={classNames(classes.temperature)}
			/>
		</div>
		<Skeleton width={200} height={30} />
		<Skeleton width={200} height={30} />
		<Skeleton width={200} height={30} />
		<Skeleton width={200} height={30} />
		<Skeleton width={200} height={30} />
	</div>
)

const WeatherNow = () => {
	const { currentWeather, status } = useCurrentWeatherStore()

	if (!currentWeather || status === requestStatus.LOADING) {
		return <div>{skeleton}</div>
	}

	const { name, main, sys, wind, weather } = currentWeather
	const { sunrise, sunset } = sys
	const temperature = `${Math.round(main.temp)}℃`

	return (
		<div className={classNames(classes.WeatherNow)}>
			<div className={classNames(classes.location)}>
				<IconSvg Svg={LocationIcon} />
				<span>{name}</span>
			</div>
			<div className={classNames(classes.info)}>
				<WeatherIcon name={weather[0].icon} size={WeatherIconSize.BIG} />
				<p className={classNames(classes.temperature)}>{temperature}</p>
			</div>
			<WeatherNowDetails
				speed={wind.speed}
				feels_like={main.feels_like}
				humidity={main.humidity}
			/>
			<SunsetSunrise sunrise={sunrise} sunset={sunset} />
		</div>
	)
}

export { WeatherNow }
