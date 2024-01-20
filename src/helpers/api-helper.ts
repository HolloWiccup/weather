
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

const API_KEY = 'aefaf2ee38ea734b4f10c61ceafcc3cc'

export enum requestStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

// export const createUrl = (url: string, city: string) => {
// 	return `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`
// }

// const 


// export const fetchWeather = (url: string) {
  
// } 