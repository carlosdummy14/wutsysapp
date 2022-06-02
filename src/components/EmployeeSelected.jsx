import { useContext } from 'react'
import { AssignContext } from '../context/Assign/Assign.context'
import style from './EmployeeSelected.module.css'

const DEFAULT_AVATAR = 'https://www.gravatar.com/avatar/00000000000000000000000000000000'

const EmployeeSelected = ({ handleCancel }) => {
  const { assignEmployeeSelected } = useContext(AssignContext)
  const { employee, assets } = assignEmployeeSelected ?? {}
  const { avatar, position, name, area } = employee ?? ''

  const AMOUNT_OF_ASSETS =
    assets?.length > 0
      ? assets.reduce(
          (acum, item) => ({
            ...acum,
            [item.asset.type]: (acum[item.asset.type] += 1),
          }),
          { HARDWARE: 0, SOFTWARE: 0, OTHER: 0 }
        )
      : { HARDWARE: 0, SOFTWARE: 0, OTHER: 0 }

  return (
    <>
      <h4 className={style.title}>Employee Selected</h4>
      <div className={style.card}>
        <div className={style.image}>
          <img src={avatar || DEFAULT_AVATAR} alt={name || 'Name'} />
        </div>
        <div className={style.profile}>
          <span className={style.name}>{name || 'Name'}</span>
          <span className={style.other}>{position || 'Position'}</span>
          <span className={style.other}>{area || 'Area'}</span>
        </div>
      </div>
      <div className={style.resume}>
        <h4 className={style.title}>Resume</h4>
        <div className={style['resume-data']}>
          <span className={style.label}>Hardware</span>
          <span className={style.amount}>{AMOUNT_OF_ASSETS.HARDWARE}</span>
          <span className={style.label}>Software</span>
          <span className={style.amount}>{AMOUNT_OF_ASSETS.SOFTWARE}</span>
          <span className={style.label}>Other</span>
          <span className={style.amount}>{AMOUNT_OF_ASSETS.OTHER}</span>
        </div>
      </div>
      <div className={style.buttons}>
        <button className={style.button}>Apply</button>
        <button className={style.button} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default EmployeeSelected
