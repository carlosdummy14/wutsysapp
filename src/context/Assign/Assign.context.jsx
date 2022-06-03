import { ASSIGN_ACTIONS } from '../actions'
import { createContext, useReducer } from 'react'
import { createAssignAPI, getEmployeeSelectedAPI } from '../../api/assign.api'
import AssignReducer from './Assign.reducer'
import { getOneAssetAPI } from '../../api/asset.api'

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

  const deleteAsset = (assetId) => {
    dispatch({
      type: ASSIGN_ACTIONS.DELETE_ASSET,
      payload: assetId,
    })
  }

  const selectAssetToAssign = async (assetId) => {
    if (!state.assignEmployeeSelected) return

    const { data } = await getOneAssetAPI(assetId)
    dispatch({
      type: ASSIGN_ACTIONS.GET_ASSET_SELECTED,
      payload: data,
    })
  }

  const applyAssign = async () => {
    const { employee, assets } = state.assignEmployeeSelected ?? {}
    if (!employee || assets.length < 1) return
    const data = {
      employee: employee._id,
      assets: assets.map((asset) => asset.asset._id),
    }

    const newAssign = await createAssignAPI(data)
    dispatch({
      type: ASSIGN_ACTIONS.APPLY_ASSIGN,
    })
  }

  const value = {
    assigns: state.assigns,
    assignSelected: state.assignSelected,
    assignEmployeeSelected: state.assignEmployeeSelected,
    getEmployeeSelected,
    cancelSelection,
    deleteAsset,
    selectAssetToAssign,
    applyAssign,
  }

  return <AssignContext.Provider value={value}>{children}</AssignContext.Provider>
}

export { AssignContext, AssignState }
