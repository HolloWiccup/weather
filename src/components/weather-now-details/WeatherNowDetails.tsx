import { classNames } from '@/helpers/classNames/classNames'
import classes from './WeatherNowDetails.module.scss'
import { List } from '../list/List'
import { ListItem } from '../list-item/ListItem'

interface WeatherNowDetailsProps {
	speed: number
	humidity: number
	feels_like: number
}

const WeatherNowDetails = (props: WeatherNowDetailsProps) => {
	const { speed, humidity, feels_like } = props
	const details = {
		'Feels like': `${Math.round(feels_like)}℃`,
		Humidity: `${humidity}%`,
		Wind: `${speed} m/sec`,
	}

	const detailsList = Object.entries(details).map(([key, value]) => (
		<ListItem key={key}>
			<p>{key}</p>
			<p>{value}</p>
		</ListItem>
	))

	return (
		<div className={classNames(classes.WeatherNowDetails)}>
			<List>{...detailsList}</List>
		</div>
	)
}

export { WeatherNowDetails }
