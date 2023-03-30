import a from './about.module.scss';
import ME from '../../assets/images/me-about.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Card from './Card';

const About = () => {
  const infoCard = [
    {
      icon: <FaAward className={a.card_icon} />,
      title: 'Experience',
      des: '3+ Yers Working'
    }, 
    {
      icon: <FiUser className={a.card_icon} />,
      title: 'Clients',
      des: '299+ Worldwide'
    }, 
    {
      icon: <VscFolderLibrary className={a.card_icon} />,
      title: 'Projects',
      des: '80+ Completed'
    }
  ]

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`${a.container} container`}>
        <div className={ a.me }>
          <div className={ a.image }>
            <img src={ ME } alt="" />
          </div>
        </div>

        <div className={ a.content }>
          <div className={ a.cards }>
            {
              infoCard.map((info, index) => (
                <Card key={index} { ...info } />
              ))
            }
          </div>

          <p className={ a.paragraph }>Adipisicing nihil consectetur facilis ab aspernatur? Cupiditate consectetur natus similique itaque minima. Veritatis libero nulla fugit beatae cum debitis? Natus sit culpa cum tempore fuga.</p>

          <a href="#contact" className={ a.btn }>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;
