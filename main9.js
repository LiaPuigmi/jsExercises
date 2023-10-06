/* EJERCICIO
1. Crea una función en la que pasándole un string como parámetro
se substituyan las letras A por las O. */

function transformacion(palabreja){
console.log(palabreja.replaceAll('a', 'o'));
}

transformacion('patata');

/* 2. Crea una función que compruebe si un string pasado como
parámetro empieza por ‘aca’ y llama dos veces a la función una con
academia y otra con escuela. */
function comprobacion(palabreja){
    if(palabreja.startsWith('aca')){
        console.log(palabreja+ ' empieza por aca');
    }else{
        console.log(palabreja+ ' NO empieza por aca');
    }
}

comprobacion('academia');
comprobacion('escuela');

/* 3. Crea una función que pasándole un Hola nos salude 3 veces
utilizando métodos de Strings. */

function salutacion(valor){
    valor=valor+'\n';
    console.log(valor.repeat(3))
}

salutacion('Hola!');
