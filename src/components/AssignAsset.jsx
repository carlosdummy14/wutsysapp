import style from './AssignAsset.module.css'
import EmployeeList from './EmployeeList'
import AssetList from './AssetList'
import AssetSelectedList from './AssetSelectedList'
import EmployeeSelected from './EmployeeSelected'
import { useContext } from 'react'
import { AssignContext } from '../context/Assign/Assign.context'

const AssignAsset = () => {
  const { getEmployeeSelected, cancelSelection, selectAssetToAssign, applyAssign } =
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

  const handleApply = () => {
    applyAssign()
  }

  return (
    <div className={style.container}>
      <div className={style['employees-list']}>
        <EmployeeList assignView selectEmployee={selectEmployee} />
      </div>

      <div className={style['employee-selected']}>
        <EmployeeSelected handleCancel={handleCancel} handleApply={handleApply} />
      </div>

      <div className={style['assets-list']}>
        <AssetList assignView selectAsset={selectAsset} />
      </div>

      <div className={style['assets-selected']} id='assetselectedlist'>
        <AssetSelectedList assignView />
      </div>
    </div>
  )
}

export default AssignAsset
