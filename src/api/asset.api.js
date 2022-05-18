import axios from 'axios'

const BASE_URI = 'http://127.0.0.1:4000/api/v1/asset'

const createAssetAPI = async (asset) => {
  const response = await axios.post(BASE_URI, asset)
  const data = await response.data
  return data
}

const getAllAssetsAPI = async () => {
  const response = await axios.get(BASE_URI)
  const data = await response.data
  return data
}

const deleteAssetAPI = async (id) => {
  const response = await axios.delete(`${BASE_URI}/${id}`)
  return response
}

const updateAssetAPI = async (asset, id) => {
  const response = await axios.patch(`${BASE_URI}/${id}`, asset)
  const data = await response.data
  return data
}

const getOneAssetAPI = async (id) => {
  const response = await axios.get(`${BASE_URI}/${id}`)
  const data = await response.data
  return data
}

export { createAssetAPI, getAllAssetsAPI, deleteAssetAPI, updateAssetAPI, getOneAssetAPI }
