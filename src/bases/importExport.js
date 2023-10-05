import heroes, { owners } from '../data/heroes';

//owners.map((owner) => console.log(owner));
//heroes.map((hero) => console.log(hero.name));

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id == id);
};

export const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner == owner);
};

/*
Esto iria en el index.js
import { getHeroById, getHeroesByOwner } from './bases/importExport';

console.log(getHeroById(2));
console.log(getHeroesByOwner('Marvel'));
*/
