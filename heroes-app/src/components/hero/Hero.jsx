import {useMemo} from 'react';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {getHeroById} from '../../selectors/getHeroById';
import {Body, HeroContainer, Image, Button} from '../../styled/Hero';

const Hero = () => {
  const { heroId } = useParams()

  const hero = useMemo(() => getHeroById( heroId ), [ heroId ])
  const navigate = useNavigate()

  if( !hero ) {
    return <Navigate to="/" />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  const handleReturn = () => {
    navigate(-1)
  }

  const imgPath = `/src/assets/images/${id}.jpg`

  return (
    <HeroContainer>
      <Image>
        <img src={ imgPath } alt={superhero} />
      </Image>

      <Body>
        <h3>{ superhero }</h3>
        <ul>
          <li><b>Alter Ego: </b>{ alter_ego }</li>
          <li><b>Publisher: </b>{ publisher }</li>
          <li><b>First appearence: </b>{ first_appearance }</li>
        </ul>

        <h4>Characters</h4>
        <p>{ characters }</p>

        <Button
          onClick={ handleReturn }
        >
          Go Back
        </Button>
      </Body>
    </HeroContainer>
  )
}

export default Hero;
