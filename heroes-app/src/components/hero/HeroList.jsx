import {useMemo} from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import {ContainerCards} from '../../styled/Heroes';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]) 

  return (
    <ContainerCards>
      {
        heroes.map( hero => (
          <HeroCard 
            key={ hero.id } 
            {...hero}
          />
        ))
      }
    </ContainerCards>
  )
}

export default HeroList;
