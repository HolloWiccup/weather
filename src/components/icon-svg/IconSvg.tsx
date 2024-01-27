import { classNames } from '@/helpers/classNames'
import classes from './IconSvg.module.scss'
import { memo } from 'react'

interface IconSvgProps {
	className?: string
	Svg: React.FC<React.SVGProps<SVGElement>>
}

const IconSvg = memo((props: IconSvgProps) => {
	const { className, Svg } = props
	return <Svg className={classNames(classes.Icon, {}, [className])} />
})

export { IconSvg }
