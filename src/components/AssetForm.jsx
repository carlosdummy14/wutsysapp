import { useState } from 'react'
import { addAsset } from '../api/asset.api'
import style from './AssetForm.module.css'

const ASSET_INITIAL_STATE = {
  internalId: '',
  genericName: '',
  brand: '',
  model: '',
  serialNumber: '',
  type: 'HARDWARE',
  comments: '',
}

const AssetForm = () => {
  const [asset, setAsset] = useState(ASSET_INITIAL_STATE)

  const handleChange = (ev) => {
    setAsset((prevAsset) => {
      return {
        ...prevAsset,
        [ev.target.name]: ev.target.value,
      }
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    try {
      addAsset(asset)
    } catch (error) {
      console.log(error)
    }

    setAsset(ASSET_INITIAL_STATE)
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
          <option>HARDWARE</option>
          <option>SOFTWARE</option>
          <option>OTHER</option>
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
        <button className={style.button} type='submit'>
          Add
        </button>
      </form>
    </div>
  )
}

export default AssetForm
