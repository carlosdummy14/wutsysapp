import { ASSIGN_ACTIONS } from '../actions'

const AssignReducer = (state, dispatch) => {
  const { type, payload } = dispatch

  switch (type) {
    case ASSIGN_ACTIONS.GET_EMPLOYEE_SELECTED:
      return {
        ...state,
        assignEmployeeSelected: payload,
      }

    case ASSIGN_ACTIONS.CANCEL_EMPLOYEE_SELECTED:
      return {
        ...state,
        assignEmployeeSelected: null,
      }

    default: {
      return state
    }
  }
}

export default AssignReducer
