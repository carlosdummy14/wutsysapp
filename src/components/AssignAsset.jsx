import style from './AssignAsset.module.css'
import EmployeeList from './EmployeeList'
import AssetList from './AssetList'
import AssetSelectedList from './AssetSelectedList'
import EmployeeSelected from './EmployeeSelected'
import { useContext } from 'react'
import { AssignContext } from '../context/Assign/Assign.context'

const AssignAsset = () => {
  const { assignEmployeeSelected, getEmployeeSelected, cancelSelection, selectAssetToAssign } =
    useContext(AssignContext)

  const selectEmployee = (employeeId) => {
    getEmployeeSelected(employeeId)
  }

  const selectAsset = (assetId) => {
    selectAssetToAssign(assetId)
  }

  const handleCancel = () => {
    cancelSelection()
  }

  return (
    <div className={style.container}>
      <div className={style['employees-list']}>
        <EmployeeList assignView selectEmployee={selectEmployee} />
      </div>

      <div className={style['employee-selected']}>
        <EmployeeSelected
          employeeSelected={assignEmployeeSelected || {}}
          handleCancel={handleCancel}
        />
      </div>

      <div className={style['assets-list']}>
        <AssetList assignView selectAsset={selectAsset} />
      </div>

      <div className={style['assets-selected']}>
        <AssetSelectedList assignView />
      </div>
    </div>
  )
}

export default AssignAsset
