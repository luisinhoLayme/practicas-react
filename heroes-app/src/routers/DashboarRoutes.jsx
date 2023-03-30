import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/ui/Navbar';
import DcScreen from '../components/dc/DcScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Hero from '../components/hero/Hero';
import { Container } from '../styled/Routes';

const DashboarRoutes = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="marvel" element={ <MarvelScreen /> } />
          <Route path="dc" element={ <DcScreen /> } />
          <Route path="search" element={ <SearchScreen /> } />
          <Route path="hero/:heroId" element={ <Hero /> } />
          <Route path="/" element={ <MarvelScreen /> } />
        </Routes>
      </Container>
    </>
  )
}

export default DashboarRoutes;
