import { AssetContext } from '../context/Asset/Asset.context'
import { useContext, useEffect, useState } from 'react'
import style from './AssetForm.module.css'

const ASSET_TYPE = {
  HARDWARE: 'HARDWARE',
  SOFTWARE: 'SOFTWARE',
  OTHER: 'OTHER',
}

const ASSET_INITIAL_STATE = {
  internalId: '',
  genericName: '',
  brand: '',
  model: '',
  serialNumber: '',
  type: ASSET_TYPE.HARDWARE,
  comments: '',
}

const AssetForm = () => {
  const [asset, setAsset] = useState(ASSET_INITIAL_STATE)
  const [error, setError] = useState('')
  const { assetSelected, createAsset, updateAsset } = useContext(AssetContext)

  useEffect(() => {
    if (assetSelected) {
      setAsset({
        internalId: assetSelected.internalId,
        genericName: assetSelected.genericName,
        brand: assetSelected.brand,
        model: assetSelected.model,
        serialNumber: assetSelected.serialNumber,
        type: ASSET_TYPE[assetSelected.type],
        comments: assetSelected.comments,
      })
    }
  }, [assetSelected])

  const handleChange = (ev) => {
    setAsset((prevAsset) => {
      return {
        ...prevAsset,
        [ev.target.name]: ev.target.value,
      }
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      if (assetSelected) {
        await updateAsset(asset, assetSelected._id)
      } else {
        await createAsset(asset)
      }
      setAsset(ASSET_INITIAL_STATE)
    } catch (error) {
      setError(error.message)
      setTimeout(() => setError(''), 2000)
    }
  }

  return (
    <div className={style.container}>
      <h3>Asset Form</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='internalId'
          placeholder='Internal ID'
          onChange={handleChange}
          value={asset.internalId}
        />
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='genericName'
          placeholder='Generic Name'
          onChange={handleChange}
          value={asset.genericName}
        />
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='brand'
          placeholder='Brand'
          onChange={handleChange}
          value={asset.brand}
        />
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='model'
          placeholder='Model'
          onChange={handleChange}
          value={asset.model}
        />
        <input
          autoComplete='off'
          className={style.input}
          type='text'
          name='serialNumber'
          placeholder='Serial Number'
          onChange={handleChange}
          value={asset.serialNumber}
        />
        <select value={asset.type} name='type' className={style.input} onChange={handleChange}>
          <option>{ASSET_TYPE.HARDWARE}</option>
          <option>{ASSET_TYPE.SOFTWARE}</option>
          <option>{ASSET_TYPE.OTHER}</option>
        </select>
        <textarea
          autoComplete='off'
          className={style.input}
          rows='4'
          maxLength={100}
          type='text'
          name='comments'
          placeholder='Comments'
          onChange={handleChange}
          value={asset.comments}
        />
        {error === '' ? null : <span>{error}</span>}
        <button className={style.button} type='submit'>
          {assetSelected ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  )
}

export default AssetForm
