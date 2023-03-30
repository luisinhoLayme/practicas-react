import './Services.css'
import HeartEmoji from '../../assets/img/heartemoji.png'
import Glasses from '../../assets/img/glasses.png'
import Humble from '../../assets/img/humble.png'
import Card from '../card/Card'

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quo.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{left: '14rem'}}>
          <Card
            emoji={ HeartEmoji }
            heading='Design'
            detail='Figma, Sketch, Photoshop, Adobe xd'
          />
        </div>
        <div style={{top: '12rem', left: '-4rem'}}>
          <Card
            emoji={ Glasses }
            heading='Developer'
            detail='Html, Css, JavaScript, React'
          />
        </div>
        <div style={{top: '19rem', left: '12rem'}}>
          <Card
            emoji={ Humble }
            heading='UI/UX'
            detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem.'
          />

        </div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  )
}

export default Services
