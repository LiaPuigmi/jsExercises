const push=document.getElementById('push');
const elements=document.getElementById('elements');
const pop=document.getElementById('pop');
const unshift=document.getElementById('unshift');
const shift=document.getElementById('shift');
const insert=document.getElementById('insert');
const quantityInsert=document.getElementById('quantityInsert');
const quantityRemove=document.getElementById('quantityRemove');
const remove=document.getElementById('remove');
const array=[];
const aux=[];

push.onclick=function(){
    array.push('1');
    elements.innerHTML=array;
    
}

pop.onclick=function(){
    array.pop();
    elements.innerHTML=array;
}

unshift.onclick=function(){
    array.unshift('2');
    elements.innerHTML=array;
}

shift.onclick=function(){
    array.shift();
    elements.innerHTML=array;
}

insert.onclick=function(){

    const deletedArray = array.splice(quantityInsert.value, 0, '3');
    elements.innerHTML=array;
}