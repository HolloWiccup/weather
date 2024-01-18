import { classNames } from '@/helpers/classNames/classNames'
import SearchIcon from '@/assets/icons/search-icon.svg'
import classes from './SearchForm.module.scss'
import { IconSvg } from '@/components/IconSvg/IconSvg'
import { useSearchStore } from './searchFormStore'
import { useCityWeatherStore } from './cityWeatherStore'
import { useCallback } from 'react'

const SearchForm = () => {
	const { value, setValue, clearForm } = useSearchStore()
	const { getWeather } = useCityWeatherStore()

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSearchHandler = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			const resultWeather = await getWeather(value)
			if (!resultWeather.ok) return

			clearForm()
		},
		[value, clearForm, getWeather],
	)

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
