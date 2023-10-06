/* EJERCICIO 03 */
/* Define un tipo de dato de cada uno de los tipos de datos que
hemos visto. */

const NUMEROPI=3.141592;
var string="Hola!";
let boleano=true;
let nada=null;
let undefinido=undefined;
let symbolo=Symbol('Qualcosa');
let objeto = {key:'valor'};
let array= [1,2,'textillo'];

function funcion() {
    let numeroLocal=123123;
    console.log(numeroLocal);
}

function funcion2(valor) {
    console.log(valor);
}
/* 1. Declara la variable, y posteriormente inicialízala. */
let string2;
string2="Hola que tal!";
/* 2. Imprime por consola el valor que tiene la variable por consola */
console.log(string2);
/* 3. Posteriormente imprime además el tipo de dato que almacena por consola. */
console.log(typeof string2);
/* 4. Declara una variable con scope local y global. */
funcion();
funcion2(NUMEROPI);