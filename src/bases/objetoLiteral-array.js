const objeto = {
  name: 'joe',
  lastname: 'doe',
};

console.log(objeto);

objetoPorReferencia = objeto;

console.log(objetoPorReferencia);

objetoPorReferencia.edad = 29;

console.log(objeto);
console.log(objetoPorReferencia);

const objetoCopiado = { ...objeto };
objetoCopiado.ciudad = 'chicago';

console.log(objetoCopiado);

const arreglo = ['a', 'b', 'c'];
arregloPorReferencia = arreglo;
arregloPorReferencia.push('d');

console.log(arreglo);
console.log(arregloPorReferencia);

const arregloCopiado = [...arreglo];
arregloCopiado.push('e');

console.log(arreglo);
console.log(arregloCopiado);

const arregloMapeado = arregloCopiado.map((elemento) => `${elemento}e`);
console.log(arregloMapeado);
