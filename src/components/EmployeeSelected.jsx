import style from './EmployeeSelected.module.css'

const EmployeeSelected = () => {
  return (
    <>
      <h4 className={style.title}>Employee Selected</h4>
      <div className={style.card}>
        <div className={style.image}>
          <img src='' alt='' />
        </div>
        <div className={style.profile}>
          <span className={style.name}>Name</span>
          <span className={style.other}>Position</span>
          <span className={style.other}>Area</span>
        </div>
      </div>
      <div className={style.resume}>
        <h4 className={style.title}>Resume</h4>
        <div className={style['resume-data']}>
          <span className={style.label}>Hardware</span>
          <span className={style.amount}>10</span>
          <span className={style.label}>Software</span>
          <span className={style.amount}>100</span>
          <span className={style.label}>Other</span>
          <span className={style.amount}>100</span>
        </div>
      </div>
      <div className={style.buttons}>
        <button className={style.button}>Apply</button>
        <button className={style.button}>Cancel</button>
      </div>
    </>
  )
}

export default EmployeeSelected
