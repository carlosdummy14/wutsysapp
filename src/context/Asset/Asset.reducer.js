import { ASSET_ACTIONS } from '../actions'

const AssetReducer = (state, dispatch) => {
  const { type, payload } = dispatch

  switch (type) {
    case ASSET_ACTIONS.GET_ALL_ASSETS:
      return {
        ...state,
        assets: payload,
      }
    case ASSET_ACTIONS.CREATE_ASSET:
      return {
        ...state,
        assets: [...state.assets, payload],
      }
    case ASSET_ACTIONS.DELETE_ASSET:
      return {
        ...state,
        assets: state.assets.filter((asset) => asset._id !== payload),
      }

    default: {
      return state
    }
  }
}

export default AssetReducer
