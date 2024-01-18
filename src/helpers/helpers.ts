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
