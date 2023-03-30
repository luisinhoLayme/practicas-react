import a from './about.module.scss';

const Card = ({ icon, title, des }) => {
  return (
    <article className={ a.card }>
      {icon}
      <h5 className={ a.card_title }>{ title }</h5>
      <small className={ a.card_des }>{ des }</small>
    </article>
  )
}

export default Card;
