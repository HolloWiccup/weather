import classes from './WeatherIcon.module.scss'
import { classNames } from '@/helpers/classNames/classNames'
import { useDynamicSVGImport } from '@/hooks/useDynamicSvgImport/useDynamicSvgImport'

interface WeatherIconProps {
	group: string
	name: string
}

const WeatherIcon = ({ group, name }: WeatherIconProps) => {
	const { SvgIcon } = useDynamicSVGImport(group, name)
	return (
		<div className={classNames(classes.WeatherIcon)}>
			{SvgIcon && <SvgIcon />}
		</div>
	)
}

export { WeatherIcon }
