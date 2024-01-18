import { ForecastItem, ForecastNormalize } from '@/models/forecast'

const API_KEY = 'aefaf2ee38ea734b4f10c61ceafcc3cc'

export const createUrl = (url: string, city: string) => {
	return `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`
}

export const getDate = (seconds: number) => {
	const date = new Date(seconds * 1000)
	const minutes = date.getMinutes().toString().padStart(2, '0')
	const hours = date.getHours().toString().padStart(2, '0')

	return `${hours}:${minutes}`
}

export const getArrayDate = (array: ForecastItem[]) => {
	const obj: ForecastNormalize = {}
	array.forEach((item) => {
		const key = item.dt_txt.split(' ')[0]
		if (!obj[key]) obj[key] = []
		obj[key].push(item)
	})
	return obj
}
