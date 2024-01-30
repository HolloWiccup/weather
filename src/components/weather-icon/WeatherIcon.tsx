import classes from './WeatherIcon.module.scss'
import { classNames } from '@/helpers/classNames'
import { useDynamicSVGImport } from '@/hooks/useDynamicSvgImport'
import { Skeleton } from '../ui/skeleton/Skeleton'
import { memo } from 'react'

enum WeatherIconSize {
	BIG = 'big',
	MEDIUM = 'medium',
	SMALL = 'small',
}

interface WeatherIconProps {
	name: string
	size?: WeatherIconSize
}

const WeatherIcon = memo((props: WeatherIconProps) => {
	const { name, size = WeatherIconSize.MEDIUM } = props
	const { SvgIcon } = useDynamicSVGImport(name)

	const className = classNames(classes.WeatherIcon, {}, [classes[size]])

	return (
		<div className={classNames(classes.WeatherIcon, {}, [classes[size]])}>
			{SvgIcon ? (
				<SvgIcon className={className} />
			) : (
				<Skeleton className={className} />
			)}
		</div>
	)
})

export { WeatherIcon, WeatherIconSize }
