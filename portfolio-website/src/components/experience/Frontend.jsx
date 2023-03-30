import e from './experience.module.scss';
import {BsPatchCheckFill} from 'react-icons/bs';

const Frontend = () => {
  return (
    <div className={ e.frontend }>
      <h3>Frontend Development</h3>
      <div className={ e.content }>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>HTML</h4>
            <small className="text_light">Experienced</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>CSS</h4>
            <small className="text_light">Experienced</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>JavaScript</h4>
            <small className="text_light">Experienced</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>Bootstrap</h4>
            <small className="text_light">Intermedie</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>SCSS</h4>
            <small className="text_light">Experienced</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>REACT</h4>
            <small className="text_light">Intermedie</small>
          </div>
        </article>

      </div>
    </div>
  )
}

export default Frontend;
