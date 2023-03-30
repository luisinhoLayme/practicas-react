import './Intro.css'
import Github from '../../assets/img/github.png'
import LinkedIn from '../../assets/img/linkedin.png'
import Instagram from '../../assets/img/instagram.png'

import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector2.png'
import boy from '../../assets/img/boy.png'
import thumbup from '../../assets/img/thumbup.png'
import Crown from '../../assets/img/Crown.png'
import glassesimoji from '../../assets/img/glassesimoji.png'
import FloatingDiv from '../floatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Andrew Thomas</span>
          <span>Frontend Developer with hight level of experience in web designing and development, producting the Quality work</span>
        </div>

        <button className="button i-button">
          Hire me
        </button>

        <div className="i-icons">
          <img src={ Github } alt="image icons" />
          <img src={ LinkedIn } alt="image icons" />
          <img src={ Instagram } alt="image icons" />
        </div>

      </div>

      <div className="i-right">
        <img src={ Vector1 } alt="image info" />
        <img src={ Vector2 } alt="image info" />
        <img src={ boy } alt="image info" />
        <img src={ glassesimoji } alt="image info" />

        <div style={{top: '-4%', left: '68%'}}>
          <FloatingDiv image={ Crown } txt1='Web' txt2='Developer' />
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
          <FloatingDiv image={ thumbup } txt1='Best Design' txt2='Award' />
        </div>
        {/* blur div  */}
        <div className="blur" style={{background: 'rgb(238 210 255)', top: '0px'}}></div>
        <div
          className="blur"
          style={{
            background: '#c1f5ff',
            top: '17rem',
            left: '-9rem',
            width: '21rem',
            height: '11rem'
          }}
          ></div>
      </div>
    </div>
  )
}

export default Intro
