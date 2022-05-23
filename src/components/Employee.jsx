import style from './Employee.module.css'

const Employee = ({
  employeeId,
  avatar,
  name,
  internalId,
  position,
  area,
  handleDelete,
  handleUpdate,
  handleSelect,
  assignView,
}) => {
  return (
    <li className={style.item} key={employeeId}>
      <div className={style.image}>
        <img src={avatar} alt={name} loading='lazy' />
      </div>
      <div className={style.profile}>
        <span className={style.name} title={`id: ${internalId}`}>
          {name}
        </span>
        <span className={style.other}>{position}</span>
        <span className={style.other}>{area}</span>
      </div>
      <div>
        {assignView ? (
          <button onClick={() => handleSelect(employeeId)}>🎯Select</button>
        ) : (
          <>
            <button onClick={() => handleUpdate(employeeId)}>✏️Edit</button>
            <button onClick={() => handleDelete(employeeId)}>❌️Delete</button>
          </>
        )}
      </div>
    </li>
  )
}

export default Employee
