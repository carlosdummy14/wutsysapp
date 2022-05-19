import axios from 'axios'

const BASE_URI = 'http://127.0.0.1:4000/api/v1/employee'

const createEmployeeAPI = async (employee) => {
  const response = await axios.post(BASE_URI, employee)
  const data = await response.data
  return data
}

const getAllEmployeesAPI = async () => {
  const response = await axios.get(BASE_URI)
  const data = await response.data
  return data
}

const deleteEmployeeAPI = async (id) => {
  const response = await axios.delete(`${BASE_URI}/${id}`)
  return response
}

const updateEmployeeAPI = async (employee, id) => {
  const response = await axios.patch(`${BASE_URI}/${id}`, employee)
  const data = await response.data
  return data
}

const getOneEmployeeAPI = async (id) => {
  const response = await axios.get(`${BASE_URI}/${id}`)
  const data = await response.data
  return data
}

export {
  createEmployeeAPI,
  getAllEmployeesAPI,
  deleteEmployeeAPI,
  updateEmployeeAPI,
  getOneEmployeeAPI,
}
