import { useContext, useEffect, useState } from 'react'
import AssetSelected from './AssetSelected'
import style from './AssetSelectedList.module.css'
import { AssignContext } from '../context/Assign/Assign.context'

const AssetSelectedList = ({ assignView }) => {
  const { assignEmployeeSelected, deleteAsset } = useContext(AssignContext)
  const [search, setSearch] = useState('')
  const [assetsFilter, setAssetsFilter] = useState([])

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      if (search === '') {
        setAssetsFilter([])
      } else {
        setAssetsFilter(
          assignEmployeeSelected.assets.filter((asset) =>
            asset.asset.genericName.toLowerCase().includes(search)
          )
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

  return (
    <div className={style.container}>
      <h3>Asset Selected</h3>
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
          ? assignEmployeeSelected?.assets.map((asset) => (
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
    </div>
  )
}

export default AssetSelectedList
