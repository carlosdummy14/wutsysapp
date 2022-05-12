import style from './AssetList.module.css'
import { useEffect, useState } from 'react'
import { getAllAssets, deleteAsset } from '../api/asset.api'

const AssetList = () => {
  const [assets, setAssets] = useState([])

  const getData = async () => {
    const { data } = await getAllAssets()
    setAssets(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = async (assetId) => {
    await deleteAsset(assetId)
    getData()
  }

  // type: 'HARDWARE',
  return (
    <div className={style.container}>
      <h3>Asset List</h3>
      <input type='text' name='search' />
      <ul className={style.list}>
        {assets.map((asset) => {
          return (
            <li className={style.item} key={asset._id}>
              <div className={style.image}>
                <img src={asset.avatar} alt={asset.genericName} loading='lazy' />
              </div>
              <div className={style.profile}>
                <span className={style.name} title={`id: ${asset.internalId}`}>
                  {asset.internalId}
                  {'  '}
                  {asset.genericName}
                </span>
                <span className={style.other}>{asset.brand}</span>
                <span className={style.other}>{asset.model}</span>
                <span className={style.other}>{asset.serialNumber}</span>
                <span className={style.other}>{asset.comments}</span>
              </div>
              <div>
                <button>✏️</button>
                <button onClick={() => handleDelete(asset._id)}>❌️</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AssetList
