import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'

function App() {
  return (
    <div className={style.app}>
      <h1>WUTsys</h1>
      <EmployeeForm />
    </div>
  )
}

export default App
