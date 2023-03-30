import Cta from './Cta';
import HeaderSocials from './HeaderSocials';

import h from './header.module.scss';
import me from '../../assets/images/me.png';

const Header = ({ setActiveNav }) => {
  return (
    <header className={ h.header }>
      <div className={ `${h.container} container` }>
        <h5>Hello I'm</h5>
        <h1>Emma Stone</h1>
        <h5 className="text_light">Frontend Developer</h5>
        <Cta setActiveNav={ setActiveNav } />
        <HeaderSocials />

        <div className={h.me}>
          <img src={ me } alt="me" />
        </div>

        <a 
          href="#contact" 
          className={ h.scroll_down }
          onClick={() => setActiveNav('#contact')}
        >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
