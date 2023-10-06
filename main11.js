/* EJERCICIO
1. Define un array con las letras ‘a’, ‘b’, ‘c’, ‘d’ y ‘e’. Y,
posteriormente, recorre cada uno de los elementos mediante a
forEach */
let array=['a','b','c','d','e'];

array.forEach(element => {
    console.log(element);
});


/* 2. Define una variable let numero = 5; que itere hasta que el valor
sea 0. */

let numero=5;

while (numero >= 0) {
    console.log(numero);
    numero--;
}

/* EJERCICIO
1. Analiza que hace el siguiente programa, explica lo que hace
¿Cuántas iteraciones da? ¿Cuándo entrará en el if? ¿Y en el else?: */

/* let numero=1;
let i=0;
do{
    if(i===0){
        i++;
        numero--;
        console.log(numero);
    }else{
        numero++;
        console.log(numero);
    }
}while(numero<5); */