const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('se resolvio la promesa');
      reject('reject en miPromesa');
    }, 1000);
  });
};

/*console.log('start');
promesa().then(console.log);
console.log('end');
*/

const asyncFunctionTest = async () => {
  try {
    console.log('inside async start');
    const promesa = await miPromesa();
    console.log(promesa);
    console.log('inside async end');
    return 'async resuelto';
  } catch (error) {
    //console.log('sale por el catch');
    throw 'error dentro del async';
  }
};

asyncFunctionTest().then(console.log).catch(console.error);
