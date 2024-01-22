import { classNames } from '@/helpers/classNames/classNames'
import classes from './LastCities.module.scss'
import { CityCard } from '../city-card/CityCard'
import { useFetchFullWeather } from '@/hooks/useFetchFullWeather'
import { useState } from 'react'

const LastCities = () => {
	const [index, setIndex] = useState(0)
	const { fetchFullWeather, lastCities } = useFetchFullWeather()
	if (!lastCities.length) return <div>empty</div>

	const disableIncrement = index >= lastCities.length - 2
	const disableDecrement = index <= 0

	const cities = lastCities
		.slice(index, index + 2)
		.map((city) => (
			<CityCard onClick={fetchFullWeather} key={city} name={city} />
		))

	const incrementIndex = () => {
		if (!disableIncrement) setIndex(index + 1)
	}

	const decrementIndex = () => {
		if (!disableDecrement) setIndex(index - 1)
	}

	return (
		<div className={classNames(classes.LastCities)}>
			<div className={classNames(classes.header)}>
				<span>Последние опрашиваемые города</span>
				<div className={classNames(classes.buttons)}>
					<button onClick={decrementIndex} disabled={disableDecrement}>
						⟵
					</button>
					<button onClick={incrementIndex} disabled={disableIncrement}>
						⟶
					</button>
				</div>
			</div>
			<div className={classNames(classes.cities)}>{cities}</div>
		</div>
	)
}

export { LastCities }
