import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'
import { useState } from 'react'
import Header from './components/Header'
import { AssetState } from './context/Asset/Asset.context'
import { EmployeeState } from './context/Employee/Employee.context'

const SCREEN_TO_RENDER = {
  EMPLOYEE: 'employee',
  ASSET: 'asset',
  ASSIGN: 'assign',
}

function App() {
  const [working, setWorking] = useState(() => {
    const localWorking = window.localStorage.getItem('working') || null
    return SCREEN_TO_RENDER[localWorking] || SCREEN_TO_RENDER.EMPLOYEE
  })

  const screenToRender = () => {
    switch (working) {
      case SCREEN_TO_RENDER.EMPLOYEE:
        return (
          <EmployeeState>
            <EmployeeForm />
            <EmployeeList />
          </EmployeeState>
        )

      case SCREEN_TO_RENDER.ASSET:
        return (
          <AssetState>
            <AssetForm />
            <AssetList />
          </AssetState>
        )

      case SCREEN_TO_RENDER.ASSIGN:
        return <h4>Assign</h4>
      default:
        break
    }
  }

  return (
    <div className={style.app}>
      <Header working={working} setWorking={setWorking} />
      <main className={style.container}>{screenToRender()}</main>
    </div>
  )
}

export default App
