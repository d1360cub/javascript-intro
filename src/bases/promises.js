/*console.log('start');

new Promise((resolve, reject) => {
  console.log('promise body');
  resolve('success');
  //reject('execution error');
})
  //.then((msg) => console.log(msg))
  //.catch((error) => console.error(error));
  .then(console.log) //el parametro de la ejecucion exitosa se pasa como parametro al primer callback
  .catch(console.error); //el parametro de la ejecucion fallida se pasa como parametro al primer callback

console.log('finish');
*/

import { getHeroById } from './importExport';

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject('There is no hero with that Id');
      }
    }, 1000);
  })
    .then((hero) => console.log(`El heroe es: ${hero.name}`))
    .catch(console.error);
};

export default getHeroByIdAsync;

/*
Esto va en el index
import getHeroByIdAsync from './bases/promises';
getHeroByIdAsync(1);
getHeroByIdAsync(123);
/*