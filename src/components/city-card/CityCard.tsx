import { useEffect, useState } from 'react'
import { CityWeather } from '@/models/weather'
import { WeatherIcon } from '../weather-icon/WeatherIcon'
import { fetchWeather } from '@/helpers/api-helper'
import { Skeleton } from '../skeleton/Skeleton'
import { Card } from '../card/Card'

interface CityCardProps {
	name: string
	onClick: (name: string) => void
}

const CityCard = ({ name, onClick }: CityCardProps) => {
	const [cityWeather, setCityWeather] = useState<CityWeather>()
	const [loading, setLoading] = useState(true)

	let content

	useEffect(() => {
		async function fetchCityWeather() {
			const response = await fetchWeather(name)
			if (response) {
				setCityWeather(response)
				setLoading(false)
			}
		}
		fetchCityWeather()
	}, [name])

	const onClickHandler = () => {
		onClick(name)
	}

	if (!cityWeather || loading) {
		content = (
			<>
				<Skeleton height={16} width={50} />
				<Skeleton height={64} width={64} />
				<Skeleton height={16} width={50} />
			</>
		)
	} else {
		content = (
			<>
				<button onClick={onClickHandler}>{name}</button>
				<WeatherIcon name={cityWeather.weather[0].icon} />
				<span>{`${Math.round(cityWeather.main.temp)}℃`}</span>
			</>
		)
	}

	return <Card>{content}</Card>
}

export { CityCard }
