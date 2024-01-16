import classes from './WeatherIcon.module.scss'
import { classNames } from '@/helpers/classNames/classNames'
import { useDynamicSVGImport } from '@/hooks/useDynamicSvgImport/useDynamicSvgImport'

export enum WeatherIconSize {
	BIG = 'big',
	MEDIUM = 'medium',
	SMALL = 'small'
}

interface WeatherIconProps {
	name: string
	size?: WeatherIconSize
}

const WeatherIcon = (props: WeatherIconProps) => {
	const { name, size = WeatherIconSize.MEDIUM } = props
	const { SvgIcon } = useDynamicSVGImport(name)
	return (
		<div className={classNames(classes.WeatherIcon, {}, [classes[size]])}>
			{SvgIcon && <SvgIcon />}
		</div>
	)
}

export { WeatherIcon }
