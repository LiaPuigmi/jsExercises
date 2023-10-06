/* EJERCICIO
1. A partir de la siguiente instrucción que genera un número
aleatorio console.log(Math.round(Math.random())); que genera un
número aleatorio 0 o 1. Haz una función con return, invocala y
muestra por consola cara si el valor es 1 y cruz si el valor es 0. */


let numAleatorio=Math.round(Math.random());
let caraCruz;
function caraOCruz(valor){
    if(valor==1){
        caraCruz='Cara';
    }else{
        caraCruz='Cruz';
    }

    return caraCruz;
}

console.log(caraOCruz(numAleatorio));