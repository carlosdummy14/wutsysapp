import { AssetState } from './context/Asset/Asset.context'
import { ContextProvider } from './context/ContextProvider'
import { EmployeeState } from './context/Employee/Employee.context'
import { useState } from 'react'
import AssetForm from './components/AssetForm'
import AssetList from './components/AssetList'
import AssignAsset from './components/AssignAsset'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import Header from './components/Header'
import style from './App.module.css'

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
            <ContextProvider>
              <AssignAsset />
            </ContextProvider>
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
