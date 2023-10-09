let opt_piedra=document.getElementById('piedra');
let opt_papel=document.getElementById('papel');
let opt_tijeras=document.getElementById('tijeras');

let img_opt_player1=document.getElementById('player1');
let img_opt_player2=document.getElementById('player2');

let start=document.getElementById('start_game');

let puntos_player1=document.getElementById("player1").innerText;
let puntos_player2=document.getElementById("player2").innerText;

let select_player1;
let select_player2;
let vs;

let valor_opt_random=['piedra','papel','tijeras'];
function opt_random(){
    return[...valor_opt_random]
    .sort(()=>Math.random() > 0.5 ? 1:-1)
    .slice(0,1)
}

function display_option_player(select_player2){
    if(select_player2=='piedra'){
        img_opt_player2.src='./imagenes/piedra.png';
    }else if(select_player2=='papel'){
        img_opt_player2.src='./imagenes/papel.png';
    }else{
        img_opt_player2.src='./imagenes/tijeras.png';
    }
}


start.onclick=function(){
    if(select_player1!=undefined){
        select_player2=opt_random(valor_opt_random.toString());
        display_option_player(select_player2);
        game_vs(select_player1,select_player2);
        console.log(select_player1);
    }else{
        document.getElementById('result').innerText='Elige una opción';
        document.getElementById('result').style.color='#A12035';
    }
    
}


opt_piedra.onclick=function(){
    select_player1='piedra';
    img_opt_player1.src='./imagenes/piedra.png';
    img_opt_player2.src='./imagenes/robot.png';

}

opt_papel.onclick=function(){
    select_player1='papel';
    img_opt_player1.src='./imagenes/papel.png';
    img_opt_player2.src='./imagenes/robot.png';

}

opt_tijeras.onclick=function(){
    select_player1='tijeras';
    img_opt_player1.src='./imagenes/tijeras.png';
    img_opt_player2.src='./imagenes/robot.png';

}

function game_vs(select_player1,select_player2){
    if(select_player1=='piedra'){
        if(select_player2=='piedra'){
            vs='same';
        }else if(select_player2=='papel'){
            vs='p2win';
        }else{
            vs='p1win';
        }
    }else if(select_player1=='papel'){
        if(select_player2=='papel'){
            vs='same';
        }else if(select_player2=='tijeras'){
            vs='p2win';
        }else{
            vs='p1win';
        }
    }else if(select_player1=='tijeras'){
        if(select_player2=='tijeras'){
            vs='same';
        }else if(select_player2=='piedra'){
            vs='p2win';
        }else{
            vs='p1win';
        }
    }

    if(vs=='p1win'){
        document.getElementById('result').innerText='Player 1 gana';
        document.getElementById('result').style.color='#3FA794';
        puntos_player1++;
        document.getElementById('puntos_player1').innerText=puntos_player1;

    }else if(vs=='same'){
        document.getElementById('result').innerText='Empate';
        document.getElementById('result').style.color='#FEC260';

    }else if(vs=='p2win'){
        document.getElementById('result').innerText='Player 2 gana';
        document.getElementById('result').style.color='#A10035';
        puntos_player2++;
        document.getElementById('puntos_player2').innerText=puntos_player2;
    }
     
}

const reload=document.getElementById('reset_game');
reload.addEventListener('click',_=>{
    location.reload();
})