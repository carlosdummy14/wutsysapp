import axios from 'axios'

const BASE_URI = 'http://127.0.0.1:4000/api/v1/asset'

const addAsset = async (asset) => {
  const response = await axios.post(BASE_URI, asset)
  return response
}

const getAllAssets = async () => {
  const response = await axios.get(BASE_URI)
  const data = await response.data
  return data
}

const deleteAsset = async (id) => {
  const response = await axios.delete(`${BASE_URI}/${id}`)
  return response
}

export { addAsset, getAllAssets, deleteAsset }
