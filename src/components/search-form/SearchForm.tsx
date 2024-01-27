import { classNames } from '@/helpers/classNames'
import SearchIcon from '@/assets/icons/search-icon.svg'
import classes from './SearchForm.module.scss'
import { useState } from 'react'
import { useWeatherStore } from '@/stores/weatherStore'
import { IconSvg } from '../icon-svg/IconSvg'

const DEFAULT_VALUE = ''

const SearchForm = () => {
	const [value, setValue] = useState(DEFAULT_VALUE)
	const { fetchWeather } = useWeatherStore((state) => state)

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		fetchWeather(value)
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
