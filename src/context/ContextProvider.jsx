import { EmployeeState } from './Employee/Employee.context'
import { AssetState } from './Asset/Asset.context'
import { AssignState } from './Assign/Assign.context'

const ContextProvider = ({ children }) => {
  return (
    <EmployeeState>
      <AssetState>
        <AssignState>{children}</AssignState>
      </AssetState>
    </EmployeeState>
  )
}

export { ContextProvider }
