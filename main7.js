/* EJERCICIO
1. Realiza un switch case que muestre el mes del año cuando lo
introduzcamos en formato numérico (1 al 12) */
/* Funciona con el index3.html para que el usuario le meta el número que quiera. */
function alerta() 
{
    let mesito;
    let mes = prompt('Introduzca el mes numerico:', '');

    switch(mes){
        case '1': mesito='Enero';
            break;
        case '2': mesito='Febrero';
            break;
        case '3': mesito='Marzo';
            break;
        case '4': mesito='Abril';
            break;
        case '5': mesito='Mayo';
            break;
        case '6': mesito='Junio';
            break;
        case '7': mesito='Julio';
            break;
        case '8': mesito='Agosto';
            break;
        case '9': mesito='Septiembre';
            break;
        case '10': mesito='Octubre';
            break;
        case '11': mesito='Noviembre';
            break;
        case '12': mesito='Diciembre';
            break;
        default: mesito='De que dimensión vienes, aquí no existe este mes.'
            break;
    }
    document.getElementById("mesito").innerHTML = mesito;
}

let mesitoNumerico;
let mesNumerico = 12; //Pon el número que quieras

switch(mesNumerico){
    case 1: mesitoNumerico='Enero';
        break;
    case 2: mesitoNumerico='Febrero';
        break;
    case 3: mesitoNumerico='Marzo';
        break;
    case 4: mesitoNumerico='Abril';
        break;
    case 5: mesitoNumerico='Mayo';
        break;
    case 6: mesitoNumerico='Junio';
        break;
    case 7: mesitoNumerico='Julio';
        break;
    case 8: mesitoNumerico='Agosto';
        break;
    case 9: mesitoNumerico='Septiembre';
        break;
    case 10: mesitoNumerico='Octubre';
        break;
    case 11: mesitoNumerico='Noviembre';
        break;
    case 12: mesitoNumerico='Diciembre';
        break;
    default: mesitoNumerico='De que dimensión vienes, aquí no existe este mes.'
        break;
}
console.log(mesitoNumerico);

/* 2. Realiza un switch case en el que puedas introducir un número
del uno al cinco en un string y lo transforme a un número */

let numero;
let numeroString = 'menosuno'; //Escribe aqui el numero del 1 al 5

    switch(numeroString){
        case 'uno': numero=1;
            break;
        case 'dos': numero=2;
            break;
        case 'tres': numero=3;
            break;
        case 'cuatro': numero=4;
            break;
        case 'cinco': numero=5;
            break;
        default: numero='Te pasaste maestro! O te quedaste corto, tu sabrá!';
            break;
    }
console.log(numero);
