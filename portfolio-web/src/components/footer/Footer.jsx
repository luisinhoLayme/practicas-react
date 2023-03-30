import './Footer.css'
import Wave from '../../assets/img/wave.png'
import Facebook from '../../assets/img/Facebook.png'
import Instagram from '../../assets/img/instagram.png'
import Github from '../../assets/img/github.png'


const Footer = () => {
  return (
    <div className="footer">
      <img src={ Wave } alt="iamge footer" />
      <div className="f-content">
        <span>Luis@luis.com</span>
        <div className="f-icons">
          <img src={Facebook} alt="image footer" />
          <img src={Instagram} alt="image footer" />
          <img src={Github} alt="image footer" />
        </div>
      </div>
    </div>
  )
}

export default Footer
