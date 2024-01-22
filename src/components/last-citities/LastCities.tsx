import { classNames } from '@/helpers/classNames/classNames'
import classes from './LastCities.module.scss'
import { CityCard } from '../city-card/CityCard'
import { useFetchFullWeather } from '@/hooks/useFetchFullWeather'

const LastCities = () => {
	const { fetchFullWeather, lastCities } = useFetchFullWeather()
	if (!lastCities.length) return <div>empty</div>

	const cities = lastCities.map((city) => (
		<CityCard onClick={fetchFullWeather} key={city} name={city} />
	))

	return <div className={classNames(classes.LastCities)}>{cities}</div>
}

export { LastCities }
