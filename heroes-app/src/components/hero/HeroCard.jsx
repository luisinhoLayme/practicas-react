import {Link} from 'react-router-dom';
import {Card, CardImage, CardBody} from '../../styled/Heroes';

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgPath = `/src/assets/images/${ id }.jpg`

  return (
    <Card>
      <CardImage>
        <img src={ imgPath } alt={superhero} />
      </CardImage>
      <CardBody>
        <h5>{ superhero }</h5>
        <p>{ alter_ego }</p>
        {
          (alter_ego !== characters) &&
            <small>{ characters }</small>
        }
        <p>{ first_appearance }</p>

        <Link to={`/auth/hero/${ id }`}>
          Más...
        </Link>
      </CardBody>
    </Card>
  )
}

export default HeroCard;
