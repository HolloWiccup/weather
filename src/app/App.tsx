import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Weather } from '@/components/weather/Weather'

const App = () => {
	return (
		<div className="app">
			<Weather />
			<ToastContainer />
		</div>
	)
}

export default App
