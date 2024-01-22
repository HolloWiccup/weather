import { classNames } from '@/helpers/classNames/classNames'
import SearchIcon from '@/assets/icons/search-icon.svg'
import classes from './SearchForm.module.scss'
import { IconSvg } from '@/components/IconSvg/IconSvg'
import { useState } from 'react'
import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { useForecastStore } from '@/stores/forecastStore'

const DEFAULT_VALUE = ''

const SearchForm = () => {
	const [value, setValue] = useState(DEFAULT_VALUE)

	const { fetchCurrentWeather } = useCurrentWeatherStore((state) => state)
	const { fetchForecastWeather } = useForecastStore((state) => state)

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		fetchCurrentWeather(value)
		fetchForecastWeather(value)
		setValue(DEFAULT_VALUE)
	}

	return (
		<form onSubmit={onSearchHandler} className={classNames(classes.form)}>
			<button type="submit">
				<IconSvg Svg={SearchIcon} />
			</button>
			<input
				value={value}
				onChange={onChangeHandler}
				className={classNames(classes.input)}
			/>
		</form>
	)
}

export { SearchForm }
