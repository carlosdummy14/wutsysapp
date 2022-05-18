import { ASSET_ACTIONS } from '../actions'
import { createContext, useReducer } from 'react'
import {
  getAllAssetsAPI,
  deleteAssetAPI,
  createAssetAPI,
  updateAssetAPI,
  getOneAssetAPI,
} from '../../api/asset.api'
import AssetReducer from './Asset.reducer'

const AssetContext = createContext()

const AssetState = ({ children }) => {
  const INITIAL_STATE = { assets: [], assetSelected: null }
  const [state, dispatch] = useReducer(AssetReducer, INITIAL_STATE)

  const getAllAssets = async () => {
    const { data } = await getAllAssetsAPI()
    dispatch({
      type: ASSET_ACTIONS.GET_ALL_ASSETS,
      payload: data,
    })
  }

  const createAsset = async (asset) => {
    try {
      const { data } = await createAssetAPI(asset)
      dispatch({
        type: ASSET_ACTIONS.CREATE_ASSET,
        payload: data,
      })
    } catch (error) {
      throw new Error(`Algo salio mal, revise sus datos...`)
    }
  }

  const deleteAsset = async (id) => {
    await deleteAssetAPI(id)
    dispatch({
      type: ASSET_ACTIONS.DELETE_ASSET,
      payload: id,
    })
  }

  const updateAsset = async (asset, id) => {
    try {
      const { data } = await updateAssetAPI(asset, id)
      dispatch({ type: ASSET_ACTIONS.UPDATE_ASSET, payload: { data, id } })
    } catch (error) {
      throw new Error(`Algo salio mal, revise sus datos...`)
    }
  }

  const getOneAsset = async (id) => {
    try {
      const { data } = await getOneAssetAPI(id)
      dispatch({ type: ASSET_ACTIONS.GET_ONE_ASSET, payload: data })
    } catch (error) {
      throw new Error(`Algo salio mal, revise sus datos...`)
    }
  }

  const value = {
    assets: state.assets,
    assetSelected: state.assetSelected,
    getAllAssets,
    createAsset,
    deleteAsset,
    updateAsset,
    getOneAsset,
  }

  return <AssetContext.Provider value={value}>{children}</AssetContext.Provider>
}

export { AssetContext, AssetState }
