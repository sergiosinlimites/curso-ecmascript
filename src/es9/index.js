// OPERADOR DE REPOSO

const obj = {
    nombre: 'sergio',
    age: 18,
    country: 'CO'
}

let { country, ...all } = obj;
console.log(`country: ${country}`);
console.log(`aditional info:`, all);

// UNIDADES DE PROPAGACIÓN

const obj2 = {
    nombre: 'Sergio',
    edad: 18
}

const obj3 = {
    ...obj2,
    country: 'CO',
}
console.log(obj3);

// PROMISE.FINALLY

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=>{
            resolve('Hello world')
        },3000)
        : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'));

// MEJORAS SOBRE REJECTS
                // el [] muestra los numeros permitidos y el {} la cantidad de digitos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]; // busca el primer bloque, es decir, el año
const month = match[2];
const day = match[3];
console.log(year, month, day); // muestra "2018 04 20"