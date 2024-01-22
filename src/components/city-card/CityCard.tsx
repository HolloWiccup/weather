import { classNames } from '@/helpers/classNames/classNames'
import classes from './CityCard.module.scss'
import { useEffect, useState } from 'react'
import { CityWeather } from '@/models/weather'
import { WeatherIcon } from '../weather-icon/WeatherIcon'
import { fetchWeather } from '@/helpers/api-helper'

interface CityCardProps {
	name: string
	onClick: (name: string) => void
}

const CityCard = ({ name, onClick }: CityCardProps) => {
	const [cityWeather, setCityWeather] = useState<CityWeather>()

	useEffect(() => {
		async function fetchCityWeather() {
			const response = await fetchWeather(name)
			if (response) setCityWeather(response)
		}
		fetchCityWeather()
	}, [])

	const onClickHandler = () => {
		onClick(name)
	}

	return (
		<div className={classNames(classes.CityCard)}>
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
