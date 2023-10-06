/* EJERCICIO
1. Crea una función pasa 3 números por parámetros súmalos y
devuelve el resultado mediante a return. Finalmente muéstralos
por pantalla */
function numerica(num1, num2, num3){
    let resultado= num1+num2+num3;
    /* console.log(num1+" + "+num2+" + "+num3+" = "); */
    return resultado;
}

console.log(numerica(4,33,2));

/* 2. Crea una función y escribe tu nombre completo en 3 parámetros:
nombre, apellido1, apellido2 y concaténalos y finalmente
muéstralos por pantalla */

function nombreCompleto(nombre, apellido1, apellido2){
    console.log(nombre+" "+apellido1+" "+apellido2);
}

nombreCompleto('Lia', 'Puigmitjà', 'Ruiz');

/* 3. Crea una función que acepte dos números y devuelva el número
mayor */

function numMayor(num1, num2){
    return Math.max(num1,num2);
}

function numMayor2(num1, num2){
    if(num1>=num2){
        return num1;
    }else{
        return num2;
    }
}

console.log(numMayor(17, 9));
console.log(numMayor2(23, 19));