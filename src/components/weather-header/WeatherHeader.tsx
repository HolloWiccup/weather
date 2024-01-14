import { classNames } from '@/helpers/classNames/classNames'
import classes from './WeatherHeader.module.scss'
import { SearchForm } from '../search-form/SearchForm'

const WeatherHeader = () => {
	return (
		<div className={classNames(classes.WeatherHeader)}>
			<div>
				<p className={classNames(classes.time)}>22:22</p>
				<p className={classNames(classes.date)}>Пон, 22 янв 2023</p>
			</div>
			<SearchForm />
		</div>
	)
}

export { WeatherHeader }
