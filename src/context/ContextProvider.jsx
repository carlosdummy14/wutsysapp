import { EmployeeState } from './Employee/Employee.context'
import { AssetState } from './Asset/Asset.context'

const ContextProvider = ({ children }) => {
  return (
    <EmployeeState>
      <AssetState>{children}</AssetState>
    </EmployeeState>
  )
}

export { ContextProvider }
