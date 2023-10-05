const hero = {
  firstname: 'Tony',
  lastname: 'Stark',
  aka: 'Ironman',
};

const createHero = (
  { firstname, lastname, aka, power } /*{
  const { firstname, lastname, aka, power } = person;
  return {
    id: 1254,
    firstname,
    lastname,
    aka,
    power,
  };
};*/
) => ({ id: 1254, firstname, lastname, aka, power });

console.log(createHero(hero));

const heroes = ['Batman', 'Superman', 'Aquaman'];

//const [batman, superman, aquaman] = heroes;
//console.log(batman, superman, aquaman);

//const [, , aquaman] = heroes;
//console.log(aquaman);

//const [, superman] = heroes;
//console.log(superman);

const [batman, superman, aquaman, spiderman = 'no existe'] = heroes;
console.log(spiderman);

const returnArray = () => ['ABC', 123];

const [letters, numbers] = returnArray();
console.log(numbers);
