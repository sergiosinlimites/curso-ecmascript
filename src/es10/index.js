// ARRAY.FLAT -> devuelve cualquier matriz con submatricez

let array1 = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array1.flat(2));

// FLAT MAP

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

// TRIM START y TRIM END

let hello = '      hello world';
console.log(hello)
console.log(hello.trimStart());
//trim
let hello = "    Hello world    "
console.log(hello.trim())

let hello2 = 'hello world          ';
console.log(hello2);
console.log(hello2.trimEnd());

// TRY CATCH OPTIONAL CATCH BUILDING
//antes
try {

} catch(error){
    error
}

//es10
try {

} catch{
    error
}

// FROM ENTRIES
// transforma clave valor a objeto
// lo opuesto a Object.entries

let entries = [['name', 'sergio'],['age',18]];
console.log(Object.fromEntries(entries));

// OBJETO DE TIPO SYMBOL, permite acceder a descripcion

let mySymbl = 'My symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);
