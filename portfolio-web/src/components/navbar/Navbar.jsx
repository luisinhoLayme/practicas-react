import {} from 'react'
import Toggle from '../toggle/Toggle'
import './Navbar.css'

const Navbar = () => {

  return (
    <header className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Luisinho</div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <nav>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Experience</a>
            <a href="#">Porfolio</a>
            <a href="#">Testimonials</a>
          </nav>
        </div>
      </div>
      <button className="button n-button">
        Contact us
      </button>
    </header>
  )
}

export default Navbar
