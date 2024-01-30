import { classNames } from '@/helpers/classNames'
import classes from './Card.module.scss'
import { ReactNode, memo } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
}

const Card = memo((props: CardProps) => {
	const { children, className } = props
	return (
		<div className={classNames(classes.Card, {}, [className])}>{children}</div>
	)
})

export { Card }
