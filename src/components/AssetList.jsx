import style from './AssetList.module.css'
import { useEffect, useState } from 'react'
import { getAllAssets, deleteAsset } from '../api/asset.api'
import Asset from './Asset'

const AssetList = () => {
  const [assets, setAssets] = useState([])
  const [search, setSearch] = useState('')
  const [assetsFilter, setAssetsFilter] = useState([])

  const getData = async () => {
    const { data } = await getAllAssets()
    setAssets(data)
  }

  useEffect(() => {
    const timerLoad = setTimeout(getData, 100)
    return () => clearTimeout(timerLoad)
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

  const handleDelete = async (assetId) => {
    await deleteAsset(assetId)
    getData()
    setSearch('')
  }

  const handleChange = (ev) => {
    setSearch(ev.target.value.toLowerCase())
  }

  return (
    <div className={style.container}>
      <h3>Asset List</h3>
      <input
        className={style.input}
        type='text'
        name='search'
        value={search}
        placeholder='Search by name'
        onChange={handleChange}
      />
      <ul className={style.list}>
        {assetsFilter.length === 0
          ? assets.map((asset) => (
              <Asset key={asset._id} {...asset} assetId={asset._id} handleDelete={handleDelete} />
            ))
          : assetsFilter.map((asset) => (
              <Asset key={asset._id} {...asset} assetId={asset._id} handleDelete={handleDelete} />
            ))}
      </ul>
    </div>
  )
}

export default AssetList
