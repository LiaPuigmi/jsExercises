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

/* Declara 2 variables: "numero" e "i", a numero le asigna el valor 1 y a i el valor 0.
   Luego le pide que haga lo del if y else mientras que el numero sea más pequeño que 5.
   Si la i es 0 se le suma uno, se le resta uno al numero y se imprime. Pero si no,
   se le suma uno al numero y se imprime el numero.
   De este modo entras dentro del if una vez quedando la i=1 y el numero=0,
   luego al else 5 veces ya que la i=1 y no vuelve a cambiar y el numero va sumando
   hasta llegar a 5 y salir del de-while.
   Eso da un total de 6 veces.
*/