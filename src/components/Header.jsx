import style from './Header.module.css'

const Header = ({ working, setWorking }) => {
  const handleChange = (ev) => {
    setWorking(ev.target.value)
    window.localStorage.setItem('working', ev.target.value)
  }

  return (
    <header>
      <h1>WUTsys</h1>
      <div className={style.options}>
        <label>
          <input
            type='radio'
            name='options'
            value='employee'
            checked={working === 'employee'}
            onChange={handleChange}
          />
          employee
        </label>
        <label>
          <input
            type='radio'
            name='options'
            value='asset'
            checked={working === 'asset'}
            onChange={handleChange}
          />
          asset
        </label>
      </div>
    </header>
  )
}

export default Header
