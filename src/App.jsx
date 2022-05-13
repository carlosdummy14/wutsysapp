import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [working, setWorking] = useState('')

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
          <>
            <AssetForm />
            <AssetList />
          </>
        )}
      </main>
    </div>
  )
}

export default App
