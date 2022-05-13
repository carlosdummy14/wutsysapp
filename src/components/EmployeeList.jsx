import style from './EmployeeList.module.css'
import { useEffect, useState } from 'react'
import { getAllEmployees, deleteEmployee } from '../api/employee.api'
import Employee from './Employee'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState('')
  const [employeesFilter, setEmployeesFilter] = useState([])

  const getData = async () => {
    const { data } = await getAllEmployees()
    setEmployees(data)
  }

  useEffect(() => {
    const timerLoad = setTimeout(getData, 100)
    return () => clearTimeout(timerLoad)
  }, [])

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      if (search === '') {
        setEmployeesFilter([])
      } else {
        setEmployeesFilter(
          employees.filter((employee) => employee.name.toLowerCase().includes(search))
        )
      }
    }, 500)

    return () => clearTimeout(timerSearch)
  }, [search])

  const handleDelete = async (employeeId) => {
    await deleteEmployee(employeeId)
    getData()
    setSearch('')
  }

  const handleChange = (ev) => {
    setSearch(ev.target.value.toLowerCase())
  }

  return (
    <div className={style.container}>
      <h3>Employee List</h3>
      <input
        className={style.input}
        type='text'
        name='search'
        value={search}
        placeholder='Search by name'
        onChange={handleChange}
      />
      <ul className={style.list}>
        {employeesFilter.length === 0
          ? employees.map((employee) => (
              <Employee
                key={employee._id}
                {...employee}
                employeeId={employee._id}
                handleDelete={handleDelete}
              />
            ))
          : employeesFilter.map((employee) => (
              <Employee
                key={employee._id}
                {...employee}
                employeeId={employee._id}
                handleDelete={handleDelete}
              />
            ))}
      </ul>
    </div>
  )
}

export default EmployeeList
