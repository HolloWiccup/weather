import { classNames } from '@/helpers/classNames/classNames'
import SearchIcon from '@/assets/icons/search-icon.svg'
import classes from './SearchForm.module.scss'
import { IconSvg } from '@/components/IconSvg/IconSvg'
import { useSearchStore } from './searchStore'
import { useCityWeatherStore } from './cityWeatherStore'

const SearchForm = () => {
	const { value, setValue } = useSearchStore()
	const { getCityWeather } = useCityWeatherStore()

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		getCityWeather(value)
	}

	return (
		<form onSubmit={onSubmitHandler} className={classNames(classes.form)}>
			<button>
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
