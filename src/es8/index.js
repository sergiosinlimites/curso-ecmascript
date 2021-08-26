// Object.entries -> nos devuelve una matríz en forma de array

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); // nos permite saber el tamaño de nuestro objeto, cosa que antes era muy complicada de hacer

// Object values

const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: ''
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

// padding

const string1 = 'hello';
console.log(string1.padStart(7,'hi'));
console.log(string1.padEnd(12, " ------"));
console.log("producto:".padEnd(15, " pera."));

// trailing-comas

const obj = {
    name: 'oscar',
}

// ASYNC AWAIT
// le dicen que se comporte de forma distinta y nos ayudará a construir mejores funciones asíncronas
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) // se torna a false muestra el error
        ? setTimeout(() => resolve("Hello world"), 3000) 
        : reject(new Error("Test error"));
    })
}
// helloWorld(); por sí mismo no funciona ya que no muestra nada, porque se demora en cargar

const helloAsync = async () => {
    const hi = await helloWorld();
    // const hi2 = await function2();
    console.log(hi);
}

helloAsync();

// la forma propuesta para manejar los errores correctamente es:

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch(err){
        console.log(err); // si hay un reject aquí lo muestra
    }
};

anotherFunction();