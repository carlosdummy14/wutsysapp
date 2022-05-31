import style from './EmployeeSelected.module.css'

const EmployeeSelected = ({ employeeSelected, handleCancel }) => {
  const { employee, assets } = employeeSelected

  const AMOUNT_OF_HARDWARE = assets?.filter((asset) => asset.asset.type === 'HARDWARE').length || 0
  const AMOUNT_OF_SOFTWARE = assets?.filter((asset) => asset.asset.type === 'SOFTWARE').length || 0
  const AMOUNT_OF_OTHER = assets?.filter((asset) => asset.asset.type === 'OTHER').length || 0

  return (
    <>
      <h4 className={style.title}>Employee Selected</h4>
      <div className={style.card}>
        <div className={style.image}>
          <img
            src={
              employee?.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000'
            }
            alt={employee?.name || 'Name'}
          />
        </div>
        <div className={style.profile}>
          <span className={style.name}>{employee?.name || 'Name'}</span>
          <span className={style.other}>{employee?.position || 'Position'}</span>
          <span className={style.other}>{employee?.area || 'Area'}</span>
        </div>
      </div>
      <div className={style.resume}>
        <h4 className={style.title}>Resume</h4>
        <div className={style['resume-data']}>
          <span className={style.label}>Hardware</span>
          <span className={style.amount}>{AMOUNT_OF_HARDWARE}</span>
          <span className={style.label}>Software</span>
          <span className={style.amount}>{AMOUNT_OF_SOFTWARE}</span>
          <span className={style.label}>Other</span>
          <span className={style.amount}>{AMOUNT_OF_OTHER}</span>
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
