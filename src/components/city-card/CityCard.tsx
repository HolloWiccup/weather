import { useEffect, useState } from 'react'
import { CityWeather } from '@/models/weather'
import { WeatherIcon } from '../weather-icon/WeatherIcon'
import { fetchWeather } from '@/helpers/api-helper'
import { Skeleton } from '../ui/skeleton/Skeleton'
import { HStack, VStack } from '../ui/stack'
import { classNames } from '@/helpers/classNames'
import classes from './CityCard.module.scss'

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
			<div className={classNames(classes.CityCard)}>
				<HStack justify="between">
					<Skeleton height={64} width={64} />
					<Skeleton height={64} width={64} />
				</HStack>
			</div>
		)
	} else {
		content = (
			<button onClick={onClickHandler} className={classNames(classes.CityCard)}>
				<HStack justify="between">
					<VStack>
						<p>{name}</p>
						<span>{`${Math.round(cityWeather.main.temp)}℃`}</span>
					</VStack>
					<WeatherIcon name={cityWeather.weather[0].icon} />
				</HStack>
			</button>
		)
	}

	return <>{content}</>
}

export { CityCard }
