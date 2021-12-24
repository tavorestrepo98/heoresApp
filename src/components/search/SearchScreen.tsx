import { FormEvent, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroe/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

interface ISearchForm {
  searchText: string;
}

export const SearchScreen = () => {

  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);

  const { values, handleInputChange } = useForm<ISearchForm>({
    searchText: q as string
  });

  const { searchText } = values;

  const navigate = useNavigate();


  const heroes = useMemo(() => getHeroesByName(q as string), [q]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Formulario</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Buscar un heroe"
              autoComplete="off"
              value={searchText}
              name="searchText"
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-3"
              type="submit"
            >
              Buscar
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '')
              && <div>Buscar un Héroe</div>

          }
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} heroe={hero} />
            ))
          }
        </div>
      </div>
    </>
  );
};
