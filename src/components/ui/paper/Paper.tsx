import { classNames } from '@/helpers/classNames'
import classes from './Paper.module.scss'
import { ReactNode, memo } from 'react'

interface PaperProps {
	children: ReactNode
	className?: string
	max?: boolean
}

const Paper = memo((props: PaperProps) => {
	const { children, max, className } = props

	return (
		<div
			className={classNames(classes.Paper, { [classes.max]: max }, [className])}
		>
			{children}
		</div>
	)
})

export { Paper }
