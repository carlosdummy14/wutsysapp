import style from './Asset.module.css'

const ASSET_IMAGE = {
  HARDWARE: '../images/hardware.png',
  SOFTWARE: '../images/software.png',
  OTHER: '../images/other.png',
}

const Asset = ({
  assetId,
  assigned,
  genericName,
  internalId,
  brand,
  model,
  serialNumber,
  type,
  comments,
  handleDelete,
  handleUpdate,
  handleSelect,
  assignView,
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
        {assignView ? (
          !assigned && <button onClick={() => handleSelect(assetId)}>️🎯Select</button>
        ) : (
          <>
            <button onClick={() => handleUpdate(assetId)}>✏️Edit</button>
            <button onClick={() => handleDelete(assetId)}>❌️Delete</button>
          </>
        )}
      </div>
    </li>
  )
}

export default Asset
