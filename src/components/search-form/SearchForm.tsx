import { classNames } from '@/helpers/classNames/classNames'
import SearchIcon from '@/assets/icons/search-icon.svg'
import classes from './SearchForm.module.scss'
import { IconSvg } from '@/components/IconSvg/IconSvg'
import { useSearchStore } from './searchStore'
import { useCityWeatherStore } from './cityWeatherStore'
import { useCallback } from 'react'

const SearchForm = () => {
	const { value, setValue, clearForm } = useSearchStore()
	const { getCityWeather, getCityForecast } = useCityWeatherStore()

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSearchHandler = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			const resultWeather = await getCityWeather(value)
			if (!resultWeather.ok) return

			const resultForecast = await getCityForecast(value)
			if (!resultForecast.ok) return

			clearForm()
		},
		[value, clearForm, getCityForecast, getCityWeather],
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
