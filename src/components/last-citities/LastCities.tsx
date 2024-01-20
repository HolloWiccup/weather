import { classNames } from '@/helpers/classNames/classNames'
import classes from './LastCities.module.scss'
import { CityCard } from '../city-card/CityCard'

interface LastCitiesProps {
	weatherCities: string[]
	onClick: (name: string) => void
}

const LastCities = ({ weatherCities, onClick }: LastCitiesProps) => {
	if (!weatherCities.length) return <div>empty</div>
  
	const cities = weatherCities.map((city) => (
		<CityCard onClick={onClick} key={city} name={city} />
	))

	return <div className={classNames(classes.LastCities)}>{cities}</div>
}

export { LastCities }
