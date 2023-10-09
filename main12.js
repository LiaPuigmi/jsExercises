/* EJERCICIO
1. A partir de la pizza sustituías todos los elemento del array por
cervezas: 🍔🌯🍣🍕🍜🍱🍙🍘🥩 */
const comida= ['🍔','🌯','🍣','🍕','🍜','🍱','🍙','🍘','🥩'];
let position;
for (let index = 0; index < comida.length; index++) {
    if(comida[index]=='🍕'){
        position=index;
    }
}
console.log(comida.fill('🍺', position, comida.length));

/* 2. Encontrar si existe un elemento en el array que sea una piña.
🍕🍕🍍🍕🍕 */
const comida2=['🍕','🍕','🍍','🍕','🍕'];
let existe=false;
for (let index = 0; index < comida2.length; index++) {
    if(comida2[index]=='🍍'){
        console.log('En la posición '+index+' hay una 🍍');
        existe=true;
    }
}
if(existe==false){
    console.log('No encontramos ninguna piña');
}


/* 3. Quita la piña del siguiente array. 🍕🍕🍍🍕🍕 */
for (let index = 0; index < comida2.length; index++) {
    if(comida2[index]=='🍍'){
        comida2.splice(index, 1)
    }
    console.log(comida2[index]);
}


/* 4. A partir del siguiente array 🍓🍋🍓🍋🍓 convierte todas las fresas
en 🍄 */
const frutas=['🍓','🍋','🍓','🍋','🍓'];

for (let index = 0; index < frutas.length; index++) {
    if(frutas[index]=='🍓'){
        frutas[index]='🍄';
    }
    console.log(frutas[index]);
    
}


/* 5. Añade el siguiente icono 🥵 inmediatamente después del cada 🌶
en el siguiente array: 🌶🥛🌶🥛🌶🥛 */

const picapica=['🌶','🥛','🌶','🥛','🌶','🥛'];
const picapica2=[];
for (let index = 0; index < picapica.length; index++) {
    if(picapica[index]=='🌶'){
        picapica2.push(picapica[index]);
        picapica2.push('🥵');
    }else{
        picapica2.push(picapica[index]);
    }
    
}

for (let index = 0; index < picapica2.length; index++) {
    picapica[index]=picapica2[index];
    console.log(picapica[index]);
    
}

/* 6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
ejemplo: 🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴 */
const cartas=['🎴','🎴','🎴','🃏','🎴','🎴','🎴'];
const cartas2=[];
for (let index = 0; index < cartas.length-1; index++) {
    if(cartas[index]=='🎴' && cartas[index+1]=='🎴'){
        cartas2.push('🎴')
        cartas2.push('🃏');
    }else{
        cartas2.push(cartas[index]);
    }
    
}
cartas2.push(cartas[cartas.length-1]);
for (let index = 0; index < cartas2.length; index++) {
    cartas[index]=cartas2[index];
    console.log(cartas[index]);
    
}