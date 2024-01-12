import { CardDay } from "@/entities/CardDay"
import { SearchForm } from "@/features/SearchForm"

const App = () => {

	return (
		<div className="app">
			<SearchForm />
			<CardDay />
		</div>
	)
}

export default App
