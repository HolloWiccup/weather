import { classNames } from '@/helpers/classNames/classNames'
import { IconSvg } from '../IconSvg/IconSvg'
import { ListItem } from '../list-item/ListItem'
import { List } from '../list/List'
import classes from './SunsetSunrise.module.scss'
import SunriseIcon from '@/assets/icons/sunrise-icon.svg'
import SunsetIcon from '@/assets/icons/sunset-icon.svg'

const getDate = (seconds: number) => {
	const date = new Date(seconds * 1000)
	const minutes = date.getMinutes().toString().padStart(2, '0')
	const hours = date.getHours().toString().padStart(2, '0')

	return `${hours}:${minutes}`
}

interface SunsetSunriseProps {
	sunrise: number
	sunset: number
}

const SunsetSunrise = ({ sunrise, sunset }: SunsetSunriseProps) => {
	return (
		<div className={classNames(classes.SunsetSunrise)}>
			<List>
				<ListItem>
					<IconSvg Svg={SunriseIcon} className={classNames(classes.small)} />
					{getDate(sunrise)}
				</ListItem>
				<ListItem>
					<IconSvg Svg={SunsetIcon} className={classNames(classes.small)} />
					{getDate(sunset)}
				</ListItem>
			</List>
		</div>
	)
}

export { SunsetSunrise }
