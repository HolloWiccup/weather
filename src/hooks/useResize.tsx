import { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce'

const SCREEN_SM = 576
const SCREEN_MD = 720
const SCREEN_LG = 992
const SCREEN_XL = 1200
const SCREEN_XXL = 1400

export const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth)

	const handleResize = (event: UIEvent) => {
		const target = event.target as Window
		setWidth(target.innerWidth)
	}

	const debounceResize = useDebounce(handleResize, 500)

	useEffect(() => {
		window.addEventListener('resize', debounceResize)
		return () => {
			window.removeEventListener('resize', debounceResize)
		}
	}, [])

	return {
		width,
		isScreenSm: width >= SCREEN_SM,
		isScreenMd: width >= SCREEN_MD,
		isScreenLg: width >= SCREEN_LG,
		isScreenXl: width >= SCREEN_XL,
		isScreenXxl: width >= SCREEN_XXL,
	}
}
