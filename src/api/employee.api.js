import axios from 'axios'

const addEmployee = async (employee) => {
  const response = await axios.post(
    'http://127.0.0.1:4000/api/v1/employee',
    employee
  )
  return response
}

export { addEmployee }
