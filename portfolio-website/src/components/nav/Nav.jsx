
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import n from './nav.module.scss';

const Nav = ({ activeNav, setActiveNav }) => {

  return (
    <nav>
      <a 
        onClick={() => setActiveNav('#')} 
        className={ `${n.link} ${activeNav === '#' ? n.active : ''} `} 
        href="#"
      ><AiOutlineHome /></a>
      <a 
        onClick={() => setActiveNav('#about')} 
        className={ `${n.link} ${activeNav === '#about' ? n.active : ''} `} 
        href="#about"
      ><AiOutlineUser /></a>
      <a 
        onClick={() => setActiveNav('#experience')} 
        className={ `${n.link} ${activeNav === '#experience' ? n.active : ''} `} 
        href="#experience"
      ><BiBook /></a>
      <a 
        onClick={() => setActiveNav('#services')} 
        className={ `${n.link} ${activeNav === '#services' ? n.active : ''} `} 
        href="#services"
      ><RiServiceLine /></a>
      <a 
        onClick={() => setActiveNav('#contact')} 
        className={ `${n.link} ${activeNav === '#contact' ? n.active : ''} `} 
        href="#contact"
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;
