import s from './services.module.scss';
import {BiCheck} from 'react-icons/bi';

const Service = ({ mas, title }) => {
  return (
    <article className={ s.service }>
      <div className={ s.service_head }>
        <h3 className={ s.service_title }>{ title }</h3>
      </div>

      <ul className={ s.service_list }>
        <li>
          <BiCheck className={ s.service_icon } />
          <p>Ipsum reprehenderit in vitae quod officia.</p>
        </li>
        <li>
          <BiCheck className={ s.service_icon } />
          <p>Ipsum reprehenderit in vitae quod officia.</p>
        </li>
        <li>
          <BiCheck className={ s.service_icon } />
          <p>Ipsum reprehenderit in vitae quod officia.</p>
        </li>
        <li>
          <BiCheck className={ s.service_icon } />
          <p>Ipsum reprehenderit in vitae quod officia.</p>
        </li>
        <li>
          <BiCheck className={ s.service_icon } />
          <p>Ipsum reprehenderit in vitae quod officia.</p>
        </li>
        {
          mas &&
          <li>
            <BiCheck className={ s.service_icon } />
            <p>Ipsum reprehenderit in vitae quod officia.</p>
          </li>
        }
      </ul>
    </article>
  )
}

export default Service;
