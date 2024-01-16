import { classNames } from '@/helpers/classNames/classNames'
import classes from './ListItem.module.scss'
import { ReactNode } from 'react'

const ListItem = ({ children }: { children: ReactNode }) => {
	return <div className={classNames(classes.ListItem)}>{children}</div>
}

export { ListItem }
