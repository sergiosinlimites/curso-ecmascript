// VALORES POR DEFECTO:
// antes era así.

function newFunction(name, age, country){
    var name = name || "Sergio";
    var age = age || 18;
    var country = country || "CO";
    console.log(name, age, country);
}

// en ES6 es así.

function newFunction2(name = "Sergio", age = 18, country = "CO"){
    console.log(name,age,country);
}

newFunction2() // da los valores por defecto "Sergio", 32, "CO"
newFunction2("Oscar", 23, "NZ") // da los valores que le pasamos por parámetros.

// CONCATENACIÓN:
// template literals => nos permiten separar o unir varios elementos

let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// `` <--- estas son las comillas francesas;
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// MULTILÍNEA
// antes
let lorem = "lorem impum at sumoris \n" + "otra frase más abajo \n";

// es6

let lorem2 = `esta es una primera línea
y si nosotros damos enter
nos damos cuenta de cómo cambia de línea`;

console.log(lorem, lorem2);

// DESTRUCTURACIÓN
// antes
let person = {
    name: "Sergio",
    age: 18,
    country: "CO"
}

console.log(person.name, person.age, person.country);

// es6

let { name, age, country } = person; // los nombres pueden ser incluso a, b, c

console.log(name, age, country, "es6");

// SPREAD OPERATOR

let team1 = ["Oscar", "Julian", "Camilo"];
let team2 = ["Valeria", "Jessica", "Juana"];

let education = ["Antonio", ...team1, ...team2];
console.log(education);

// LET Y CONST

{
    var globalVar = "hola, soy una var";
}

{
    let globalLet = "hola, soy un let";
    console.log(globalLet + "si funciona aquí");
}

console.log(globalVar);
console.log(globalLet);

const varA = "soy una constante";
varA = "ya no me deja reasignar";

/////////////////////////////////////////////

let nombrecito = "Sergio";
let edadcita = 16;

// para crear un nuevo con estas variables era de la siguiente forma:
// es5
obj = { name: nombrecito, edad: edadcita};

// es6

obj2 = { nombrecito, edadcita};
console.log(obj2);

// ARROW FUNCTION
// * sintaxis más reducidas
// * this no vinculado

const names = [
    {nombre: "Sergio", edad: 18},
    {nombre: "Camila", edad: 42}
]

// antes
const listOfNames = names.map(function(elem){
    console.log(elem.nombre);
})

// es6
const listOfNames2 = names.map(item => console.log(item.name));

// otra forma
const listOfNames3 = (names, ages) => {
    //...
}
// otra forma
const listOfNames4 = nombre => {
    //...
}
const square = num => num * num;

// PROMESAS
// con estas se trabaja el asincronismo
// resuelven lo que antés era el Callback Hell, que era ejecutar llamados en cascada y era complicado y poco escalable

const helloPromise = () => {
    // require resolve y reject
    return new Promise((resolve, reject) => { // tiene la espera de una lógica que vamos a resolver
        if(true){
            resolve("Works!");
        } else {
            reject("Oops");
        }
    })
}

helloPromise().then(response => console.log(response)).then(() => console.log("Heyyy")).catch(err => console.log(err));

// CLASES

class calculator { // con esto se puede trabajar mejor los objetos y la herencia, que es una característica de las clases
    constructor(){ // es el método para inicializar nuestra clase
        this.valueA = 0; // asigna al global estas variables
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 3));

// IMPORT Y EXPORT

import myHello from './module.js';

console.log(myHello());

// GENERATORS -> función especial que retorna una serie de valores según el algortimo definido
// Un ejemplo muy típico donde esto ayuda es en el algoritmo de fibonacci;
function* helloworld(){
    if(true){
        yield 'hello, world'
    }
    if(true){
        yield 'world';
    }
}

const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

////////// HASTA AQUÍ LLEGA ECMASCRIPT6 /////////////

