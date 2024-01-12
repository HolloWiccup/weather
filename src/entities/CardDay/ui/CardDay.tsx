import { classNames } from '@/shared/lib/classNames/classNames'
import classes from './CardDay.module.scss'


const CardDay = () => {
  return (
    <div className={classNames(classes.CardDay)}>
      <div className={classNames(classes.up)} />
      <div className={classNames(classes.center)}>
      <p>CardDay</p>
      <p>CardDay</p>
      <p>CardDay</p>
      </div>
      <div className={classNames(classes.down)} />
    </div>
  )
}

export { CardDay }