import { ASSET_ACTIONS } from '../actions'
import { createContext, useReducer } from 'react'
import { getAllAssetsAPI, deleteAssetAPI, createAssetAPI } from '../../api/asset.api'
import AssetReducer from './Asset.reducer'

const AssetContext = createContext()

const AssetState = ({ children }) => {
  const INITIAL_STATE = { assets: [] }
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

  const value = {
    assets: state.assets,
    getAllAssets,
    createAsset,
    deleteAsset,
  }

  return <AssetContext.Provider value={value}>{children}</AssetContext.Provider>
}

export { AssetContext, AssetState }
