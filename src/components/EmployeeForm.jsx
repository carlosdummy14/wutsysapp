import { useState } from 'react'
import { addEmployee } from '../api/employee.api'
import style from './EmployeeForm.module.css'

const EMPLOYEE_INITIAL_STATE = {
  internalId: '',
  name: '',
  position: '',
  area: '',
}

const EmployeeForm = () => {
  const [employee, setEmployee] = useState(EMPLOYEE_INITIAL_STATE)

  const handleChange = (ev) => {
    setEmployee((prevEmployeeForm) => {
      return {
        ...prevEmployeeForm,
        [ev.target.name]: ev.target.value,
      }
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log({ employee })

    try {
      addEmployee(employee)
    } catch (error) {
      console.log(error)
    }

    setEmployee(EMPLOYEE_INITIAL_STATE)
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
        <button className={style.button} type='submit'>
          Add
        </button>
      </form>
    </div>
  )
}

export default EmployeeForm
