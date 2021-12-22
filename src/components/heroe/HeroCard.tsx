import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Hero } from '../../models/hero.model';

interface Props {
  heroe: Hero
}

export const HeroCard: FC<Props> = ({ heroe }) => {

  const imagePath = `assets/${heroe.id}.jpg`;

  return (
    <div className="col">
      <div className="card">

        <div className="row no-gutters">

          <div className="col-4">
            <img src={imagePath} className="card-img" alt={heroe.superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{heroe.superhero}</h5>
              <p className="card-text">{heroe.alter_ego}</p>
              {
                (heroe.alter_ego !== heroe.characters) && <p className="text-muted">{heroe.characters}</p>
              }

              <p className="card-text">
                <small className="text-muted">{heroe.first_appearance}</small>
              </p>
              
              <Link to={`/heroe/${heroe.id}`}>
                Mas...
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
