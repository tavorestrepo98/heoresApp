import { heroes } from '../data/heroes';
import { Hero } from '../models/hero.model';

export const getHeroesByPublisher = (publisher: string): Hero[] => {

  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if(!validPublishers.includes(publisher)){
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((hero: Hero) => hero.publisher === publisher);
};