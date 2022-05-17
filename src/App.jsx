import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'
import { useState } from 'react'
import Header from './components/Header'
import { AssetState } from './context/Asset/Asset.context'

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
          <>
            <EmployeeForm />
            <EmployeeList />
          </>
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
