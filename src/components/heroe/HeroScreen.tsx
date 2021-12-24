import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';

import { getHeroesById } from '../../selectors/getHeroById';

type PropParams = {
  '*'?: string;
  id?: string;
}


export const HeroScreen = () => {

  const { id } = useParams<PropParams>();

  const hero = useMemo(() => getHeroesById(id), [id]);  

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
    console.log('Return');
  };

  if(!hero){
    return <Navigate to={'/'} />;
  }

  const imagePath = `/assets/${hero.id}.jpg`;
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First Appearance: </b>{hero.first_appearance}</li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>
        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};
