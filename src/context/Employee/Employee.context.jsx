import { EMPLOYEE_ACTIONS } from '../actions'
import { createContext, useReducer } from 'react'
import {
  createEmployeeAPI,
  getAllEmployeesAPI,
  deleteEmployeeAPI,
  updateEmployeeAPI,
  getOneEmployeeAPI,
} from '../../api/employee.api'
import EmployeeReducer from './Employee.reducer'

const EmployeeContext = createContext()

const EmployeeState = ({ children }) => {
  const INITIAL_STATE = { employee: [], employeeSelected: null }
  const [state, dispatch] = useReducer(EmployeeReducer, INITIAL_STATE)

  const getAllEmployees = async () => {
    const { data } = await getAllEmployeesAPI()
    dispatch({
      type: EMPLOYEE_ACTIONS.GET_ALL_EMPLOYEES,
      payload: data,
    })
  }

  const createEmployee = async (employee) => {
    try {
      const { data } = await createEmployeeAPI(employee)
      dispatch({
        type: EMPLOYEE_ACTIONS.CREATE_EMPLOYEE,
        payload: data,
      })
    } catch (error) {
      throw new Error(`Algo salio mal, revise sus datos...`)
    }
  }

  const deleteEmployee = async (id) => {
    await deleteEmployeeAPI(id)
    dispatch({
      type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE,
      payload: id,
    })
  }

  const updateEmployee = async (employee, id) => {
    try {
      const { data } = await updateEmployeeAPI(employee, id)
      dispatch({ type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE, payload: { data, id } })
    } catch (error) {
      throw new Error(`Algo salio mal, revise sus datos...`)
    }
  }

  const getOneEmployee = async (id) => {
    try {
      const { data } = await getOneEmployeeAPI(id)
      dispatch({ type: EMPLOYEE_ACTIONS.GET_ONE_EMPLOYEE, payload: data })
    } catch (error) {
      throw new Error(`Algo salio mal, revise sus datos...`)
    }
  }

  const value = {
    employees: state.employees,
    employeeSelected: state.employeeSelected,
    getAllEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee,
    getOneEmployee,
  }

  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>
}

export { EmployeeContext, EmployeeState }
