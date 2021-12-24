import { FC, useMemo } from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import { Hero } from '../../models/hero.model';
import { HeroCard } from './HeroCard';

interface Props {
  publisher: string
}

export const HeroList: FC<Props> = ({publisher = 'marvel'}) => {
  
  const heroes: Hero[] = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
             
        {
          heroes.map((heroe: Hero) => (
            <HeroCard key={heroe.id} heroe={heroe}>
              { heroe.superhero }
            </HeroCard>
          ))
        }
    
    </div>
  );
};
