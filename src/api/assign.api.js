import axios from 'axios'

const BASE_URI = 'http://127.0.0.1:4000/api/v1/assign'

const getEmployeeSelectedAPI = async (employee) => {
  const response = await axios.get(`${BASE_URI}/employeeassign/${employee}`)
  const data = await response.data
  return data
}

const getAssetSelectedAPI = async (asset) => {
  const response = await axios.get(`${BASE_URI}/assetassign/${asset}`)
  const data = await response.data
  return data
}

const createAssignAPI = async (assign) => {
  const response = await axios.post(BASE_URI, assign)
  const data = await response.data
  return data
}

const getAllAssignAPI = async () => {
  const response = await axios.get(BASE_URI)
  const data = await response.data
  return data
}

const deleteAssignAPI = async (id) => {
  const response = await axios.delete(`${BASE_URI}/${id}`)
  return response
}

const updateAssignAPI = async (assign, id) => {
  const response = await axios.patch(`${BASE_URI}/${id}`, assign)
  const data = await response.data
  return data
}

const getOneAssignAPI = async (id) => {
  const response = await axios.get(`${BASE_URI}/${id}`)
  const data = await response.data
  return data
}

export {
  getAssetSelectedAPI,
  getEmployeeSelectedAPI,
  createAssignAPI,
  getAllAssignAPI,
  deleteAssignAPI,
  updateAssignAPI,
  getOneAssignAPI,
}
