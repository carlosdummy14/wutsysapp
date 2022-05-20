import style from './AssignAsset.module.css'
import EmployeeList from './EmployeeList'

const AssignAsset = () => {
  return (
    <div className={style.container}>
      <div style={{ backgroundColor: 'blue' }}>
        <h4>Employees Availables</h4>
        <EmployeeList />
      </div>

      <div className={style['employee-selected']}>
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
      </div>

      <div style={{ backgroundColor: 'tomato' }}>
        <h4>Assets Availables</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
      <div style={{ backgroundColor: 'peru' }}>
        <h4>Assets Selected</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
    </div>
  )
}

export default AssignAsset
