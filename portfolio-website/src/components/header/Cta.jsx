import CV from '../../assets/cv.pdf';
import h from './header.module.scss';

const Cta = ({ setActiveNav }) => {
  return (
    <div className={h.cta}>
      <a href={ CV } download className={ h.btn }>Download CV</a>
      <a 
        onClick={() => setActiveNav('#contact')} 
        href="#contact" 
        className={h.btn_primary}
      >Let's Talk</a>
    </div>
  )
}

export default Cta;
