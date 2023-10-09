$(document).ready(function () {
    /* EJERCICIO
1. Mediante a jQuery haz un botón que mediante a un
toggle que cambie el texto de un párrafo al color rojo.*/
$('#rojo').click(()=>$('#texto1').toggleClass('red'));
});

/* 2. Mediante a JS haz otro botón que mediante a un
toggle el color de un párrafo a azul. */

let azul=document.querySelector('#azul');
let texto2=document.querySelector('#texto2');
azul.onclick=function(){
    texto2.classList.toggle('azul');
}