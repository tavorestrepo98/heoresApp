import { Navigate, useParams } from 'react-router-dom';

import { getHeroesById } from '../../selectors/getHeroById';

type PropParams = {
  '*'?: string;
  id?: string;
}


export const HeroScreen = () => {
  const { id } = useParams<PropParams>();

  const hero = getHeroesById(id);

  if(!hero){
    return <Navigate to={'/'} />;
  }
  
  return (
    <>
      <h1>Heroe Screen</h1>
      <p>{hero.superhero}</p>
    </>
  );
};
