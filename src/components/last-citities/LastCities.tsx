import { classNames } from '@/helpers/classNames/classNames'
import classes from './LastCities.module.scss'
import { CityCard } from '../city-card/CityCard'
import { useState } from 'react'
import { useWeatherStore } from '@/stores/weatherStore'
import { Paper } from '../paper/Paper'
import { HStack, VStack } from '../stack'

const LastCities = () => {
	const [index, setIndex] = useState(0)
	const { fetchWeather, lastCities } = useWeatherStore((state) => state)
	if (!lastCities.length) return <div>empty</div>

	const disableIncrement = index >= lastCities.length - 2
	const disableDecrement = index <= 1

	const cities = lastCities
		.slice(index, index + 2)
		.map((city) => <CityCard onClick={fetchWeather} key={city} name={city} />)

	const incrementIndex = () => {
		if (!disableIncrement) setIndex(index + 2)
	}

	const decrementIndex = () => {
		if (!disableDecrement) setIndex(index - 2)
	}

	return (
		<Paper>
			<VStack gap="8">
				<HStack justify='between' max>
					<span>Последние опрашиваемые города</span>
					<div className={classNames(classes.buttons)}>
						<button onClick={decrementIndex} disabled={disableDecrement}>
							<span>{'⟵'}</span>
						</button>
						<button onClick={incrementIndex} disabled={disableIncrement}>
							<span>{'⟶'}</span>
						</button>
					</div>
				</HStack>
				<HStack>
					<div className={classNames(classes.cities)}>{cities}</div>
				</HStack>
			</VStack>
		</Paper>
	)
}

export { LastCities }
