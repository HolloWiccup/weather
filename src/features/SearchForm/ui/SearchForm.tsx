import { classNames } from '@/shared/lib/classNames/classNames'
import SearchIcon from '@/shared/assets/icons/search-icon.svg'
import classes from './SearchForm.module.scss'
import { IconSvg } from '@/shared/ui/IconSvg/IconSvg'

const SearchForm = () => {
	return (
		<div className={classNames(classes.form)}>
			<IconSvg Svg={SearchIcon} />
			<input className={classNames(classes.input)} />
		</div>
	)
}

export { SearchForm }