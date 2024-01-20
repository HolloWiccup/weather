import { classNames } from '@/helpers/classNames/classNames'
import classes from './CityCard.module.scss'
import { useEffect, useState } from 'react'
import { CityWeather } from '@/models/weather'
import { request } from '@/helpers/typed-request'
import { createUrl } from '@/helpers/helpers'
import { WeatherIcon } from '../weather-icon/WeatherIcon'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

interface CityCardProps {
	name: string
	onClick: (name: string) => void
}

const CityCard = ({ name, onClick }: CityCardProps) => {
	const [cityWeather, setCityWeather] = useState<CityWeather>()

	// useEffect(() => {
	//   async function fetchWeather(){
	//     const response = await request<CityWeather>(createUrl(WEATHER_URL, name))
	//     if(response)
	//     setCityWeather(response)
	//   }
	//   fetchWeather()
	// }, [])

	const onClickHandler = () => {
		onClick(name)
	}

	return (
		<div className={classNames(classes.CityCard)}>
			<button onClick={onClickHandler}>{name}</button>
			{cityWeather && (
				<>
					<button onClick={onClickHandler}>{name}</button>
					<WeatherIcon name={cityWeather.weather[0].icon} />
					<span>{cityWeather.main.temp}</span>
				</>
			)}
		</div>
	)
}

export { CityCard }
