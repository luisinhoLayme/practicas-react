import {
  Navbar,
  Intro,
  Services,
  Experience,
  Works,
  Portfolio,
  Testimonial,
  Contact,
  Footer
} from './components'

import './App.css'
import { useContext } from 'react'
import { themeContext } from './context/Context'

const App = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
      className="App"
      style={{
        background: darkMode? 'black' : '',
        color: darkMode? 'white' : ''
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
