heroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
  },
];

const exists = heroes.some((hero) => (hero.id = 2));

console.log(exists);
