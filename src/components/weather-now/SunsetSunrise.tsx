interface SunsetSunriseProps {
	sunrise: number
	sunset: number
}

const SunsetSunrise = ({ sunrise, sunset }: SunsetSunriseProps) => {
	return (
		<div>
			<p>{sunrise}</p>
			<p>{sunset}</p>
		</div>
	)
}

export { SunsetSunrise }
