import { heroes } from '../data/heroes';
import { Hero } from '../models/hero.model';

export const getHeroesById = (id = ''): Hero | undefined => {
  return heroes.find((hero: Hero) => hero.id === id);
};