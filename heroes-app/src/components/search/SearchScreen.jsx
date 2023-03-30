import {useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string'

import {useForm} from '../../hooks/useForm';
import {getHeroesByName} from '../../selectors/getHeroesByName';
import {AlertDanger, AlertInfo, Form, SearchContainer} from '../../styled/Search';
import HeroCard from '../hero/HeroCard';
import {useMemo} from 'react';

const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [{ searchText }, handleInputChange] = useForm({ searchText: q });

  // funcion para buscar heroes
  const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]) 

  // agregamos/enviamos a la url el query params
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <SearchContainer>
        <div>
          <h3>Search your Hero</h3>
          <hr />

          <Form action="" onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="Search Hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button type="submit">
              Search
            </button>

          </Form>
        </div>

        <div>
          <h3>Results</h3>
          <hr />

          {
            (q === '')
              ? <AlertInfo>Buscar un Heroe</AlertInfo>
              : (heroesFiltered.length === 0)
                && <AlertDanger>No hay Resultados</AlertDanger>
          }
          {
            heroesFiltered.map(hero => (
              <div className="space" key={hero.id}>
                <HeroCard
                  { ...hero }
                />
              </div>
            ))
          }
        </div>
      </SearchContainer>
    </>
  )
}

export default SearchScreen;
