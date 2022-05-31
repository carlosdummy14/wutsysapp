import style from './AssignAsset.module.css'
import EmployeeList from './EmployeeList'
import AssetList from './AssetList'
import AssetSelectedList from './AssetSelectedList'
import EmployeeSelected from './EmployeeSelected'
import { useContext } from 'react'
import { AssignContext } from '../context/Assign/Assign.context'

const AssignAsset = () => {
  const { assignEmployeeSelected, getEmployeeSelected, cancelSelection } = useContext(AssignContext)

  const selectEmployee = (employeeId) => {
    getEmployeeSelected(employeeId)
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
        <AssetList assignView />
      </div>

      <div className={style['assets-selected']}>
        <AssetSelectedList assignView />
      </div>
    </div>
  )
}

export default AssignAsset
