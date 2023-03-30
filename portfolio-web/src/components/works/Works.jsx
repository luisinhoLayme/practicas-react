import './Works.css'
import Upwork from '../../assets/img/Upwork.png'
import Fiverr from '../../assets/img/fiverr.png'
import Amazon from '../../assets/img/amazon.png'
import Shopify from '../../assets/img/Shopify.png'
import Facebook from '../../assets/img/Facebook.png'

const Works = () => {
  return (
    <div className='works'>
      <div className="awesome">
        <span>Works for all these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quo.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipi.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit amet, consectetur.
          <br />
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={ Upwork } alt="image works" />
          </div>
          <div className="w-secCircle">
            <img src={ Fiverr } alt="image works" />
          </div>
          <div className="w-secCircle">
            <img src={ Amazon } alt="image works" />
          </div>
          <div className="w-secCircle">
            <img src={ Shopify } alt="image works" />
          </div>
          <div className="w-secCircle">
            <img src={ Facebook } alt="image works" />
          </div>
        </div>
        {/* background Circle  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
