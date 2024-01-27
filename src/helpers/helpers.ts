import { ForecastItem, ForecastNormalize } from '@/models/forecast'
import { CityWeather, WeatherNormalize } from '@/models/weather'

const API_KEY = 'aefaf2ee38ea734b4f10c61ceafcc3cc'

const nameDayWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const monthName = [
	'Янв',
	'Фев',
	'Мар',
	'Апр',
	'Май',
	'Июн',
	'Июл',
	'Авг',
	'Сен',
	'Окт',
	'Ноя',
	'Дек',
]

const createUrl = (url: string, city: string) => {
	return `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`
}

const getTime = (seconds: number) => {
	const date = new Date(seconds * 1000)
	const minutes = date.getMinutes().toString().padStart(2, '0')
	const hours = date.getHours().toString().padStart(2, '0')

	return `${hours}:${minutes}`
}

const getDate = (seconds: number) => {
	const date = new Date(seconds * 1000)
	const dayWeek = nameDayWeek[date.getDay()]
	const day = date.getDate()
	const month = monthName[date.getMonth()]
	const year = date.getFullYear()
	return `${dayWeek}, ${day} ${month} ${year}`
}

const getWeatherNormalize = (weather: CityWeather) => {
	const weatherNormalize: WeatherNormalize = {
		city: weather.name,
		date: weather.dt,
		sunrise: weather.sys.sunrise,
		sunset: weather.sys.sunset,
		icon: weather.weather[0].icon,
		temperature: weather.main.temp,
		feels: weather.main.feels_like,
		humidity: weather.main.humidity,
		wind: weather.wind.speed,
	}
	return weatherNormalize
}

const getForecastNormalize = (array: ForecastItem[]) => {
	const forecast: ForecastNormalize = {}
	array.forEach((item) => {
		const key = item.dt_txt.replace(/\d+[-](\d+)[-](\d+)\s.+/, '$2 $1')
		if (!forecast[key]) forecast[key] = []
		forecast[key].push(item)
	})
	return forecast
}

export {
	createUrl,
	getDate,
	getTime,
	getForecastNormalize,
	getWeatherNormalize,
}
