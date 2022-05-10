import axios from 'axios'

const BASE_URI = 'http://127.0.0.1:4000/api/v1/employee'

const addEmployee = async (employee) => {
  const response = await axios.post(BASE_URI, employee)
  return response
}

const getAllEmployees = async () => {
  const response = await axios.get(BASE_URI)
  const data = await response.data
  return data
}

const deleteEmployee = async (employeeId) => {
  const response = await axios.delete(`${BASE_URI}/${employeeId}`)
  return response
}

export { addEmployee, getAllEmployees, deleteEmployee }
