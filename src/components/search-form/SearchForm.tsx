import { classNames } from '@/helpers/classNames/classNames'
import SearchIcon from '@/assets/icons/search-icon.svg'
import classes from './SearchForm.module.scss'
import { IconSvg } from '@/components/IconSvg/IconSvg'
import { useSearchStore } from './searchFormStore'
import { useCurrentWeatherStore } from '@/stores/currentWeatherStore'
import { useEffect } from 'react'
import { requestStatus } from '@/helpers/api-helper'
// import { requestStatus } from '@/helpers/api-helper'

const SearchForm = () => {
	const { value, setValue, clearForm } = useSearchStore(state => state)
	const { fetchCurrentWeather, status } = useCurrentWeatherStore(
		(state) => state,
	)

	useEffect(() => {
		if (status === requestStatus.SUCCEEDED) clearForm()
	}, [status, clearForm])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		fetchCurrentWeather(value)
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
