import { ForecastItem, ForecastNormalize } from '@/models/forecast'

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

export const createUrl = (url: string, city: string) => {
	return `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`
}

export const getTime = (seconds: number) => {
	const date = new Date(seconds * 1000)
	const minutes = date.getMinutes().toString().padStart(2, '0')
	const hours = date.getHours().toString().padStart(2, '0')

	return `${hours}:${minutes}`
}

export const getDate = (seconds: number) => {
	const date = new Date(seconds * 1000)
	const dayWeek = nameDayWeek[date.getDay()]
	const day = date.getDate()
	const month = monthName[date.getMonth()]
	const year = date.getFullYear()
	return `${dayWeek}, ${day} ${month} ${year}`
}

export const getForecastNormalize = (array: ForecastItem[]) => {
	const obj: ForecastNormalize = {}
	array.forEach((item) => {
		const key = item.dt_txt.replace(/\d+[-](\d+)[-](\d+)\s.+/, '$2 $1')
		if (!obj[key]) obj[key] = []
		obj[key].push(item)
	})
	return obj
}
