import style from './Asset.module.css'

const ASSET_IMAGE = {
  HARDWARE: '../images/hardware.png',
  SOFTWARE: '../images/software.png',
  OTHER: '../images/other.png',
}

const Asset = ({
  assetId,
  genericName,
  internalId,
  brand,
  model,
  serialNumber,
  type,
  comments,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <li className={style.item} key={assetId}>
      <div className={style.image}>
        <img src={ASSET_IMAGE[type]} alt={genericName} loading='lazy' />
      </div>
      <div className={style.profile}>
        <span className={style.name} title={`id: ${internalId}`}>
          {internalId}
          {'  '}
          {genericName}
        </span>
        <span className={style.other}>{brand}</span>
        <span className={style.other}>{model}</span>
        <span className={style.other}>{serialNumber}</span>
        <span className={style.other}>{comments}</span>
      </div>
      <div>
        <button onClick={() => handleUpdate(assetId)}>✏️</button>
        <button onClick={() => handleDelete(assetId)}>❌️</button>
      </div>
    </li>
  )
}

export default Asset
