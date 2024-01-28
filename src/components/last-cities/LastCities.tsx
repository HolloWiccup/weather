import { classNames } from '@/helpers/classNames'
import classes from './LastCities.module.scss'
import { CityCard } from '../city-card/CityCard'
import { useState } from 'react'
import { useWeatherStore } from '@/stores/weatherStore'
import { Paper } from '../ui/paper/Paper'
import { HStack, VStack } from '../ui/stack'

const LastCities = () => {
	const [index, setIndex] = useState(0)
	const { fetchWeather, lastCities } = useWeatherStore((state) => state)

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
		<Paper max>
			<VStack gap="8">
				<HStack justify="between" max>
					<span>Запрошенные города</span>
					<div className={classNames(classes.buttons)}>
						<button onClick={decrementIndex} disabled={disableDecrement}>
							<span>{'⟵'}</span>
						</button>
						<button onClick={incrementIndex} disabled={disableIncrement}>
							<span>{'⟶'}</span>
						</button>
					</div>
				</HStack>
				<HStack max gap='8'>{cities}</HStack>
			</VStack>
		</Paper>
	)
}

export { LastCities }
