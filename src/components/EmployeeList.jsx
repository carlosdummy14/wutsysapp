import { EmployeeContext } from '../context/Employee/Employee.context'
import { useContext, useEffect, useState } from 'react'
import Employee from './Employee'
import style from './EmployeeList.module.css'

const EmployeeList = ({ assignView }) => {
  const { employees, getAllEmployees, deleteEmployee, getOneEmployee } = useContext(EmployeeContext)
  const [search, setSearch] = useState('')
  const [employeesFilter, setEmployeesFilter] = useState([])

  useEffect(() => {
    getAllEmployees()
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

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId)
    setSearch('')
  }

  const handleUpdate = (employeeId) => {
    getOneEmployee(employeeId)
    setSearch('')
  }

  const handleSelect = (employeeId) => {
    console.log({ employeeId })
    // selectEmployeeToAssign
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
      <ul className={`${style.list} ${assignView ? style.assignView : ''}`}>
        {employeesFilter.length === 0
          ? employees?.map((employee) => (
              <Employee
                key={employee._id}
                {...employee}
                employeeId={employee._id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleSelect={handleSelect}
                assignView={assignView}
              />
            ))
          : employeesFilter.map((employee) => (
              <Employee
                key={employee._id}
                {...employee}
                employeeId={employee._id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleSelect={handleSelect}
                assignView={assignView}
              />
            ))}
      </ul>
    </div>
  )
}

export default EmployeeList
