import { EMPLOYEE_ACTIONS } from '../actions'

const EmployeeReducer = (state, dispatch) => {
  const { type, payload } = dispatch

  switch (type) {
    case EMPLOYEE_ACTIONS.GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: payload,
      }
    case EMPLOYEE_ACTIONS.CREATE_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, payload],
      }
    case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((employee) => employee._id !== payload),
      }
    case EMPLOYEE_ACTIONS.GET_ONE_EMPLOYEE:
      return {
        ...state,
        employeeSelected: payload,
      }
    case EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.map((employee) => {
          return employee._id === payload.id ? payload.data : employee
        }),
        employeeSelected: null,
      }
    }

    default: {
      return state
    }
  }
}

export default EmployeeReducer
