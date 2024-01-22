import { classNames } from '@/helpers/classNames/classNames'
import { IconSvg } from '../IconSvg/IconSvg'
import { ListItem } from '../list-item/ListItem'
import { List } from '../list/List'
import classes from './SunsetSunrise.module.scss'
import SunriseIcon from '@/assets/icons/sunrise-icon.svg'
import SunsetIcon from '@/assets/icons/sunset-icon.svg'
import { getTime } from '@/helpers/helpers'

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
					{getTime(sunrise)}
				</ListItem>
				<ListItem>
					<IconSvg Svg={SunsetIcon} className={classNames(classes.small)} />
					{getTime(sunset)}
				</ListItem>
			</List>
		</div>
	)
}

export { SunsetSunrise }
