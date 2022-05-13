import { useEffect } from 'react'
import style from './Header.module.css'

const Header = ({ working, setWorking }) => {
  useEffect(() => {
    setWorking('asset')
  }, [])

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
            onChange={(ev) => setWorking(ev.target.value)}
          />
          employee
        </label>
        <label>
          <input
            type='radio'
            name='options'
            value='asset'
            checked={working === 'asset'}
            onChange={(ev) => setWorking(ev.target.value)}
          />
          asset
        </label>
      </div>
    </header>
  )
}

export default Header
