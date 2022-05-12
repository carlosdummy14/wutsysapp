import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'

const WORKING = 'asset'

function App() {
  return (
    <div className={style.app}>
      <h1>WUTsys</h1>
      {WORKING === 'employee' ? (
        <>
          <EmployeeForm />
          <EmployeeList />
        </>
      ) : (
        <>
          {/* <AssetForm /> */}
          <AssetList />
        </>
      )}
    </div>
  )
}

export default App
