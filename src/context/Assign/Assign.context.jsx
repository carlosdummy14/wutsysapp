import { ASSIGN_ACTIONS } from '../actions'
import { createContext, useReducer } from 'react'
import { getEmployeeSelectedAPI } from '../../api/assign.api'
import AssignReducer from './Assign.reducer'

const AssignContext = createContext()

const AssignState = ({ children }) => {
  const INITIAL_STATE = { assigns: [], assignSelected: null, assignEmployeeSelected: null }
  const [state, dispatch] = useReducer(AssignReducer, INITIAL_STATE)

  const getEmployeeSelected = async (employeeId) => {
    const { data } = await getEmployeeSelectedAPI(employeeId)
    dispatch({
      type: ASSIGN_ACTIONS.GET_EMPLOYEE_SELECTED,
      payload: data,
    })
  }

  const cancelSelection = () => {
    dispatch({
      type: ASSIGN_ACTIONS.CANCEL_EMPLOYEE_SELECTED,
    })
  }

  const value = {
    assigns: state.assigns,
    assignSelected: state.assignSelected,
    assignEmployeeSelected: state.assignEmployeeSelected,
    getEmployeeSelected,
    cancelSelection,
  }

  return <AssignContext.Provider value={value}>{children}</AssignContext.Provider>
}

export { AssignContext, AssignState }
