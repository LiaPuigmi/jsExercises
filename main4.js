/* EJERCICIO */
/* 1. Crea una función arrow function que retorne tu nombre y tus
apellidos e imprímelos por pantalla desde fuera de la función */

const saludos=()=>{
    
    return 'Lia Puigmitjà Ruiz'
}

console.log(saludos());

/* 2. Crea una función con nombre y sin return. Pásale un tipo de dato
boolean y dentro de la función imprime el valor el valor que hemos
pasado por los parámetros. */

function nombre(valor){
    console.log(valor);
}
let paloma=true;
nombre(paloma);

/* 3. Crea una función que reciba parámetros infinitos, haz la llamada
con los valores 1,2,3,4,5 y muestra dichos mediante un forEach. */
const infinita=function(...valoresMultiples){
    valoresMultiples.forEach(elemento=>{
        console.log(elemento)
    });
}

infinita(1,2,3,4,5);
