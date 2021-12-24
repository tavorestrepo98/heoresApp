import { Hero } from './../models/hero.model';
import { heroes } from './../data/heroes';


export const getHeroesByName = (name = ''): Hero[] => {
  console.log('Hola');
  if(name.length === 0){
    return [];
  }
  return heroes.filter((hero: Hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()));
};
