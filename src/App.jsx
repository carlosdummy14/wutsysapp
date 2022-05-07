import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <div className={style.app}>
      <h1>WUTsys</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  )
}

export default App
