import { EmployeeContext } from '../context/Employee/Employee.context'
import { useContext, useEffect, useState } from 'react'
import style from './EmployeeForm.module.css'

const EMPLOYEE_INITIAL_STATE = {
  internalId: '',
  name: '',
  position: '',
  area: '',
}

const EmployeeForm = () => {
  const [employee, setEmployee] = useState(EMPLOYEE_INITIAL_STATE)
  const [error, setError] = useState('')
  const { employeeSelected, createEmployee, updateEmployee } = useContext(EmployeeContext)

  useEffect(() => {
    if (employeeSelected) {
      setEmployee({
        internalId: employeeSelected.internalId,
        name: employeeSelected.name,
        position: employeeSelected.position,
        area: employeeSelected.area,
      })
    }
  }, [employeeSelected])

  const handleChange = (ev) => {
    setEmployee((prevEmployee) => {
      return {
        ...prevEmployee,
        [ev.target.name]: ev.target.value,
      }
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      if (employeeSelected) {
        await updateEmployee(employee, employeeSelected._id)
      } else {
        await createEmployee(employee)
      }
      setEmployee(EMPLOYEE_INITIAL_STATE)
    } catch (error) {
      setError(error.message)
      setTimeout(() => setError(''), 2000)
    }
  }

  return (
    <div className={style.container}>
      <h3>Employee Form</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='internalId'
          placeholder='Internal ID'
          onChange={handleChange}
          value={employee.internalId}
        />
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
          value={employee.name}
        />
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='position'
          placeholder='Position'
          onChange={handleChange}
          value={employee.position}
        />
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='area'
          placeholder='Area'
          onChange={handleChange}
          value={employee.area}
        />
        {error === '' ? null : <span>{error}</span>}
        <button className={style.button} type='submit'>
          {employeeSelected ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  )
}

export default EmployeeForm
