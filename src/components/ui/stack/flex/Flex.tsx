import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cls from './Flex.module.scss'
import { Mods, classNames } from '@/helpers/classNames'

export type FlexJustify = 'start' | 'end' | 'center' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '12' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
	start: cls.justifyStart,
	center: cls.justifyCenter,
	end: cls.justifyEnd,
	between: cls.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
	start: cls.alignStart,
	center: cls.alignCenter,
	end: cls.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
	row: cls.directionRow,
	column: cls.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	12: cls.gap12,
	16: cls.gap16,
	32: cls.gap32,
}

export interface FlexProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
	children: ReactNode
	justify?: FlexJustify
	align?: FlexAlign
	gap?: FlexGap
	direction: FlexDirection
	max?: boolean
	wrap?: boolean
}

export const Flex = (props: FlexProps) => {
	const {
		className,
		children,
		justify = 'start',
		align = 'center',
		direction = 'row',
		gap,
		max,
		wrap,
	} = props

	const classes = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap],
	]

	const mods: Mods = {
		[cls.max]: max,
		[cls.wrap]: wrap,
	}

	return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>
}
