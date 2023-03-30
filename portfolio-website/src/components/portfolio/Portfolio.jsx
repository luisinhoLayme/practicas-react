import p from './portfolio.module.scss';
import IMG1 from '../../assets/images/portfolio1.jpg';
import IMG2 from '../../assets/images/portfolio2.jpg';
import IMG3 from '../../assets/images/portfolio3.jpg';
import IMG4 from '../../assets/images/portfolio4.jpg';
import IMG5 from '../../assets/images/portfolio5.png';
import IMG6 from '../../assets/images/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={ `${ p.portfolio } container` }>
        <article className={ p.portfolio_item }>
          <div className={ p.portfolio_img }>
            <img src={ IMG1 } alt="image portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a className={ p.portfolio_btn } href="https://github.com" target="_blank">Github</a>
          <a className={ p.portfolio_btnPrimary } href="https://dribbble.com" target="_blank">Live Demo</a>
        </article> {/*.portfolio_item*/} 
        <article className={ p.portfolio_item }>
          <div className={ p.portfolio_img }>
            <img src={ IMG2 } alt="image portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a className={ p.portfolio_btn } href="https://github.com" target="_blank">Github</a>
          <a className={ p.portfolio_btnPrimary } href="https://dribbble.com" target="_blank">Live Demo</a>
        </article> {/*.portfolio_item*/} 
        <article className={ p.portfolio_item }>
          <div className={ p.portfolio_img }>
            <img src={ IMG3 } alt="image portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a className={ p.portfolio_btn } href="https://github.com" target="_blank">Github</a>
          <a className={ p.portfolio_btnPrimary } href="https://dribbble.com" target="_blank">Live Demo</a>
        </article> {/*.portfolio_item*/} 
        <article className={ p.portfolio_item }>
          <div className={ p.portfolio_img }>
            <img src={ IMG4 } alt="image portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a className={ p.portfolio_btn } href="https://github.com" target="_blank">Github</a>
          <a className={ p.portfolio_btnPrimary } href="https://dribbble.com" target="_blank">Live Demo</a>
        </article> {/*.portfolio_item*/} 
        <article className={ p.portfolio_item }>
          <div className={ p.portfolio_img }>
            <img src={ IMG5 } alt="image portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a className={ p.portfolio_btn } href="https://github.com" target="_blank">Github</a>
          <a className={ p.portfolio_btnPrimary } href="https://dribbble.com" target="_blank">Live Demo</a>
        </article> {/*.portfolio_item*/} 
        <article className={ p.portfolio_item }>
          <div className={ p.portfolio_img }>
            <img src={ IMG6 } alt="image portfolio" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a className={ p.portfolio_btn } href="https://github.com" target="_blank">Github</a>
          <a className={ p.portfolio_btnPrimary } href="https://dribbble.com" target="_blank">Live Demo</a>
        </article> {/*.portfolio_item*/} 
      </div>
    </section>
  )
}

export default Portfolio;
