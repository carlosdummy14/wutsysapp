import style from './AssignAsset.module.css'

const AssignAsset = () => {
  return (
    <div className={style.container}>
      <div style={{ backgroundColor: 'blue' }}>
        <h4>Employees Availables</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>

      <div className={style['employee-selected']}>
        <h4>Employee Selected</h4>
        <div className={style.profile}>
          <div className={style.img}>
            <img src='' alt='' />
          </div>
          <div className={style.text}>
            <span>Name</span>
            <span>Position</span>
            <span>Area</span>
          </div>
        </div>
        <div className={style.resume}>
          <h4>Resume</h4>
          <div className={style['resume-data']}>
            <span>Hardware</span>
            <span>10</span>
            <span>Software</span>
            <span>100</span>
            <span>Other</span>
            <span>100</span>
          </div>
        </div>
        <div className={style.buttons}>
          <button>Apply</button>
          <button>Cancel</button>
        </div>
      </div>

      <div style={{ backgroundColor: 'tomato' }}>
        <h4>Assets Availables</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
      <div style={{ backgroundColor: 'peru' }}>
        <h4>Assets Selected</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
    </div>
  )
}

export default AssignAsset
