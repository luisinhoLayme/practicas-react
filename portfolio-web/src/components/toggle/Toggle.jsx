import { useContext } from 'react'
import { themeContext } from '../../context/Context'
import './Toggle.css'

const Toggle = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' })
  }

  return (
    <div onClick={handleClick} className="toggle">
      <span>M</span>
      <span>S</span>
      <div
        className="t-button"
        style={darkMode? {left: '2px'} : { right: '2px'}}
      >

      </div>
    </div>
  )
}

export default Toggle
