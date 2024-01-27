import { classNames } from '@/helpers/classNames'
import classes from './Card.module.scss'
import { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
}

const Card = (props: CardProps) => {
	const { children, className } = props
	return (
		<div className={classNames(classes.Card, {}, [className])}>{children}</div>
	)
}

export { Card }
