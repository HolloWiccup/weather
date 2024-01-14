import { classNames } from '@/helpers/classNames/classNames'
import classes from './IconSvg.module.scss'

interface IconSvgProps {
	className?: string
	Svg: React.FC<React.SVGProps<SVGElement>>
}

const IconSvg = (props: IconSvgProps) => {
	const { className, Svg } = props
	return <Svg className={classNames(classes.Icon, {}, [className])} />
}

export { IconSvg }
