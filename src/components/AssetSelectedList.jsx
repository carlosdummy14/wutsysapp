import { AssetContext } from '../context/Asset/Asset.context'
import { useContext, useEffect, useState } from 'react'
import AssetSelected from './AssetSelected'
import style from './AssetSelectedList.module.css'

const AssetSelectedList = ({ assignView }) => {
  const { assets, getAllAssets, deleteAsset, getOneAsset } = useContext(AssetContext)
  const [search, setSearch] = useState('')
  const [assetsFilter, setAssetsFilter] = useState([])

  useEffect(() => {
    getAllAssets()
  }, [])

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      if (search === '') {
        setAssetsFilter([])
      } else {
        setAssetsFilter(assets.filter((asset) => asset.genericName.toLowerCase().includes(search)))
      }
    }, 500)

    return () => clearTimeout(timerSearch)
  }, [search])

  const handleDelete = (assetId) => {
    deleteAsset(assetId)
    setSearch('')
  }

  const handleUpdate = (assetId) => {
    getOneAsset(assetId)
    setSearch('')
  }

  const handleSelect = (assetId) => {
    console.log({ assetId })
    // selectAssetToAssign
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
          ? assets.map((asset) => (
              <AssetSelected
                key={asset._id}
                {...asset}
                assetId={asset._id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleSelect={handleSelect}
                assignView={assignView}
              />
            ))
          : assetsFilter.map((asset) => (
              <AssetSelected
                key={asset._id}
                {...asset}
                assetId={asset._id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleSelect={handleSelect}
                assignView={assignView}
              />
            ))}
      </ul>
    </div>
  )
}

export default AssetSelectedList
