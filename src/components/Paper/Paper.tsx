import { classNames } from '@/helpers/classNames/classNames'
import classes from './Paper.module.scss'
import { ReactNode } from 'react'

const Paper = ({ children }: { children: ReactNode }) => {
	return <div className={classNames(classes.Paper)}>{children}</div>
}

export { Paper }
