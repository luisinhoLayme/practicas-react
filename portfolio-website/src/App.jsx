import {useState} from 'react';

import {
  Header,
  Nav,
  About,
  Experience,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from './components'

const App = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <>
      <Header 
        setActiveNav={ setActiveNav }
      />
      <Nav
        activeNav={ activeNav }
        setActiveNav={ setActiveNav }
      />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      {/* You are at minute 3:07:20 Swiper xd nav :) */}
    </>
  )
}

export default App;
