import e from './experience.module.scss';
import {BsPatchCheckFill} from 'react-icons/bs';

const Backend = () => {
  return (
    <div className={ e.backend }>
      <h3>Backend Development</h3>
      <div className={ e.content }>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>Node js</h4>
            <small className="text_light">Experienced</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>Python</h4>
            <small className="text_light">Basic</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>MongoDB</h4>
            <small className="text_light">Experienced</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>PHP</h4>
            <small className="text_light">Basic</small>
          </div>
        </article>

        <article className={ e.details }>
          <BsPatchCheckFill className={ e.icon } />
          <div>
            <h4>MySql</h4>
            <small className="text_light">Basic</small>
          </div>
        </article>

      </div>
    </div>
  )
}

export default Backend;
