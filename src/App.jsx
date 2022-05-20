import style from './App.module.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'
import { useState } from 'react'
import Header from './components/Header'
import { AssetState } from './context/Asset/Asset.context'
import { EmployeeState } from './context/Employee/Employee.context'
import AssignAsset from './components/AssignAsset'

const SCREEN_TO_RENDER = {
  EMPLOYEE: 'employee',
  ASSET: 'asset',
  ASSIGN: 'assign',
}

function App() {
  const [working, setWorking] = useState(() => {
    const localWorking = window.localStorage.getItem('working') || null
    return localWorking || SCREEN_TO_RENDER.EMPLOYEE
  })

  const screenToRender = () => {
    switch (working) {
      case SCREEN_TO_RENDER.EMPLOYEE:
        return (
          <main className={style.doublecontainer}>
            <EmployeeState>
              <EmployeeForm />
              <EmployeeList />
            </EmployeeState>
          </main>
        )

      case SCREEN_TO_RENDER.ASSET:
        return (
          <main className={style.doublecontainer}>
            <AssetState>
              <AssetForm />
              <AssetList />
            </AssetState>
          </main>
        )

      case SCREEN_TO_RENDER.ASSIGN:
        return (
          <main className={style.singlecontainer}>
            <EmployeeState>
              <AssignAsset />
            </EmployeeState>
          </main>
        )
    }
  }

  return (
    <div className={style.app}>
      <Header working={working} setWorking={setWorking} />
      {screenToRender()}
    </div>
  )
}

export default App
