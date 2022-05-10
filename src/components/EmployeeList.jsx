import style from './EmployeeList.module.css'
import { useEffect, useState } from 'react'
import { getAllEmployees, deleteEmployee } from '../api/employee.api'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  const getData = async () => {
    const { data } = await getAllEmployees()
    setEmployees(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = async (employeeId) => {
    await deleteEmployee(employeeId)
    getData()
  }

  return (
    <div className={style.container}>
      <h3>Employee List</h3>
      <input type='text' name='search' />
      <ul className={style.list}>
        {employees?.map((employee) => {
          return (
            <li className={style.item} key={employee._id}>
              <div className={style.image}>
                <img src={employee.avatar} alt={employee.name} loading='lazy' />
              </div>
              <div className={style.profile}>
                <span
                  className={style.name}
                  title={`id: ${employee.internalId}`}
                >
                  {employee.name}
                </span>
                <span className={style.other}>{employee.position}</span>
                <span className={style.other}>{employee.area}</span>
              </div>
              <div>
                <button>✏️</button>
                <button onClick={() => handleDelete(employee._id)}>❌️</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default EmployeeList
