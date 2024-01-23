import classes from './CurrentWeather.module.scss'
import LocationIcon from '@/assets/icons/location-icon.svg'
import { classNames } from '@/helpers/classNames/classNames'
import { IconSvg } from '../IconSvg/IconSvg'
import { SunsetSunrise } from '../sunset-sunrise/SunsetSunrise'
import { WeatherNowDetails } from '../weather-now-details/WeatherNowDetails'
import { WeatherIcon, WeatherIconSize } from '../weather-icon/WeatherIcon'
import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { requestStatus } from '@/helpers/api-helper'
import { Skeleton } from '../skeleton/Skeleton'
import { Paper } from '../Paper/Paper'

useCurrentWeatherStore.getState().fetchCurrentWeather()

const skeleton = (
	<div className={classNames(classes.CurrentWeather)}>
		<Paper>
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
		</Paper>
		<Paper>
			<Skeleton width={200} height={30} />
			<Skeleton width={200} height={30} />
			<Skeleton width={200} height={30} />
		</Paper>
		<Paper>
			<Skeleton width={200} height={30} />
			<Skeleton width={200} height={30} />
		</Paper>
	</div>
)

const CurrentWeather = () => {
	const { currentWeather, status } = useCurrentWeatherStore()

	if (!currentWeather || status === requestStatus.LOADING) {
		return <div>{skeleton}</div>
	}

	const { name, main, sys, wind, weather } = currentWeather
	const { sunrise, sunset } = sys
	const temperature = `${Math.round(main.temp)}℃`

	return (
		<div className={classNames(classes.CurrentWeather)}>
			<Paper>
				<div className={classNames(classes.location)}>
					<IconSvg Svg={LocationIcon} />
					<span>{name}</span>
				</div>
				<div className={classNames(classes.info)}>
					<WeatherIcon name={weather[0].icon} size={WeatherIconSize.BIG} />
					<p className={classNames(classes.temperature)}>{temperature}</p>
				</div>
			</Paper>

			<Paper>
				<WeatherNowDetails
					speed={wind.speed}
					feels_like={main.feels_like}
					humidity={main.humidity}
				/>
			</Paper>
			<Paper>
				<SunsetSunrise sunrise={sunrise} sunset={sunset} />
			</Paper>
		</div>
	)
}

export { CurrentWeather }
