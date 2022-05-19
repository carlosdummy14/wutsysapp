import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'
import { useState } from 'react'
import Header from './components/Header'
import { AssetState } from './context/Asset/Asset.context'
import { EmployeeState } from './context/Employee/Employee.context'

function App() {
  const [working, setWorking] = useState(() => {
    const localWorking = window.localStorage.getItem('working') || null
    return localWorking || 'employee'
  })

  return (
    <div className={style.app}>
      <Header working={working} setWorking={setWorking} />
      <main className={style.container}>
        {working === 'employee' ? (
          <EmployeeState>
            <EmployeeForm />
            <EmployeeList />
          </EmployeeState>
        ) : (
          <AssetState>
            <AssetForm />
            <AssetList />
          </AssetState>
        )}
      </main>
    </div>
  )
}

export default App
