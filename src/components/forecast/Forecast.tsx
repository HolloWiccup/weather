import { classNames } from '@/helpers/classNames/classNames'
import classes from './Forecast.module.scss'
import { useCityWeatherStore } from '../search-form/cityWeatherStore'
import { CardDay } from '../day-card/CardDay'

const Forecast = () => {
	const { forecastWeather } = useCityWeatherStore()
	if (!forecastWeather) return <div>empty</div>

	const { list } = forecastWeather

	const listCard = list
		.slice(0,6)
		.map((item) => <CardDay key={item.dt_txt} item={item} />)

	return <div className={classNames(classes.Forecast)}>{...listCard}</div>
}

export { Forecast }
