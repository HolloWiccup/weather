import classes from './WeatherNow.module.scss'
import LocationIcon from '@/assets/icons/location-icon.svg'
import Thunderstorm from '@/assets/icons/conditions/11d.svg'
import { classNames } from '@/helpers/classNames/classNames'
import { IconSvg } from '../IconSvg/IconSvg'
import { WeatherNowDetails } from './WeatherNowDetails'
import { SunsetSunrise } from './SunsetSunrise'
import { CityWeather } from '@/models/weather'

interface WeatherNowProps {
	cityWeather: CityWeather | undefined
}

const WeatherNow = ({ cityWeather }: WeatherNowProps) => {
	if (!cityWeather) {
		return (
			<div className={classNames(classes.WeatherNow)}>
				empty
			</div>
		)
	}

	const { name, main, sys } = cityWeather
	const { sunrise, sunset } = sys
  const temperature = `${Math.round(main.temp)}℃`
	return (
		<div className={classNames(classes.WeatherNow)}>
			<div className={classNames(classes.location)}>
				<IconSvg Svg={LocationIcon} />
				<span>{name}</span>
			</div>
			<div className={classNames(classes.info)}>
				<IconSvg Svg={Thunderstorm} />
				<p className={classNames(classes.temperature)}>{temperature}</p>
			</div>
			<WeatherNowDetails />
			<SunsetSunrise sunrise={sunrise} sunset={sunset} />
		</div>
	)
}

export { WeatherNow }
