import { ASSIGN_ACTIONS } from '../actions'

const AssignReducer = (state, dispatch) => {
  const { type, payload } = dispatch

  switch (type) {
    case ASSIGN_ACTIONS.GET_EMPLOYEE_SELECTED:
      return {
        ...state,
        assignEmployeeSelected: payload,
      }

    case ASSIGN_ACTIONS.GET_ASSET_SELECTED: {
      const { assignEmployeeSelected } = state
      const newAssets = [...assignEmployeeSelected.assets, { asset: payload }]
      const newAssignEmployee = {
        ...assignEmployeeSelected,
        assets: newAssets,
      }
      return {
        ...state,
        assignEmployeeSelected: newAssignEmployee,
      }
    }

    case ASSIGN_ACTIONS.CANCEL_EMPLOYEE_SELECTED:
      return {
        ...state,
        assignEmployeeSelected: null,
      }

    case ASSIGN_ACTIONS.DELETE_ASSET: {
      const { assignEmployeeSelected } = state
      const newAssets = assignEmployeeSelected.assets.filter((asset) => asset.asset._id !== payload)
      const newAssignEmployee = {
        ...assignEmployeeSelected,
        assets: newAssets,
      }
      return {
        ...state,
        assignEmployeeSelected: newAssignEmployee,
      }
    }

    default: {
      return state
    }
  }
}

export default AssignReducer
