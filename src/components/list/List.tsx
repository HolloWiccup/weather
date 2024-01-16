import { classNames } from '@/helpers/classNames/classNames'
import classes from './List.module.scss'
import { ReactNode } from 'react'

const List = ({ children }: { children: ReactNode }) => {
	return <div className={classNames(classes.List)}>{children}</div>
}

export { List }
