import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';

import './App.scss'

// You are at minute 1:32:48 xd nab :)

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App;
