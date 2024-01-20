import classes from './WeatherNow.module.scss'
import LocationIcon from '@/assets/icons/location-icon.svg'
import { classNames } from '@/helpers/classNames/classNames'
import { IconSvg } from '../IconSvg/IconSvg'
import { SunsetSunrise } from '../sunset-sunrise/SunsetSunrise'
// import { CityWeather } from '@/models/weather'
import { WeatherNowDetails } from '../weather-now-details/WeatherNowDetails'
import { WeatherIcon, WeatherIconSize } from '../weather-icon/WeatherIcon'
import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { requestStatus } from '@/helpers/api-helper'

// interface WeatherNowProps {
// 	cityWeather: CityWeather | undefined
// }

// const WeatherNow = ({ cityWeather }: WeatherNowProps) => {
const WeatherNow = () => {
	const { currentWeather, status } = useCurrentWeatherStore()

	if (!currentWeather) {
		return <div className={classNames(classes.WeatherNow)}>
			{status === requestStatus.FAILED && <p>{requestStatus.FAILED}</p>}
			{status === requestStatus.LOADING && <p>{requestStatus.LOADING}</p>}
		</div>
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
