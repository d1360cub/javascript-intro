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

const exists = (list) => {
  for (let i = 0; i <= list.length; i++) {
    if ((list[i].id = 2)) return true;
  }
};

console.log(exists(heroes));
