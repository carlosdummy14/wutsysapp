import { AssignContext } from '../context/Assign/Assign.context'
import { useContext, useEffect, useState } from 'react'
import AssetSelected from './AssetSelected'
import style from './AssetSelectedList.module.css'

const AssetSelectedList = ({ assignView }) => {
  const { assignEmployeeSelected, deleteAsset } = useContext(AssignContext)
  const [search, setSearch] = useState('')
  const [assetsFilter, setAssetsFilter] = useState([])
  const { assets } = assignEmployeeSelected ?? []

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      if (search === '') {
        setAssetsFilter([])
      } else {
        setAssetsFilter(
          assets.filter((asset) => asset.asset.genericName.toLowerCase().includes(search))
        )
      }
    }, 500)

    return () => clearTimeout(timerSearch)
  }, [search])

  const handleDelete = (assetId) => {
    deleteAsset(assetId)
    setSearch('')
  }

  const handleChange = (ev) => {
    setSearch(ev.target.value.toLowerCase())
  }

  const getContainerSize = () => {
    const container = document.getElementById('assetselectedlist') ?? 0
    return container.clientHeight
  }

  return (
    <div className={style.container} style={{ '--height-container': `${getContainerSize()}px` }}>
      <h3>Asset Selected</h3>
      {assets && assets.length > 0 ? (
        <>
          <input
            className={style.input}
            type='text'
            name='search'
            value={search}
            placeholder='Search by name'
            onChange={handleChange}
          />
          <ul className={`${style.list} ${assignView ? style.assignView : ''}`}>
            {assetsFilter.length === 0
              ? assets.map((asset) => (
                  <AssetSelected
                    key={asset.asset._id}
                    {...asset.asset}
                    assetId={asset.asset._id}
                    handleDelete={handleDelete}
                    assignView={assignView}
                  />
                ))
              : assetsFilter.map((asset) => (
                  <AssetSelected
                    key={asset.asset._id}
                    {...asset.asset}
                    assetId={asset.asset._id}
                    handleDelete={handleDelete}
                    assignView={assignView}
                  />
                ))}
          </ul>
        </>
      ) : (
        <p className={style.message}>{'<--- No Assets --->'}</p>
      )}
    </div>
  )
}

export default AssetSelectedList
