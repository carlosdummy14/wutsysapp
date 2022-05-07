import style from './EmployeeList.module.css'
import bdemployees from '../data/bdemployees'
import { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    setEmployees(bdemployees)
  }, [])

  return (
    <div className={style.container}>
      <h3>Employee List</h3>
      <input type='text' name='search' />
      <ul className={style.list}>
        {employees.map((employee) => {
          return (
            <li className={style.item} key={employee.id}>
              <div className={style.image}>
                <img src={employee.avatar} alt={employee.name} loading='lazy' />
              </div>
              <div className={style.profile}>
                <span
                  className={style.name}
                  title={`id: ${employee.individualId}`}
                >
                  {employee.name}
                </span>
                <span className={style.other}>{employee.position}</span>
                <span className={style.other}>{employee.area}</span>
              </div>
              <div>
                <button>✏️</button>
                <button>❌️</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default EmployeeList
