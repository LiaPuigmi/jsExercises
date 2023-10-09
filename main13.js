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
let icon=['😁','🤣','😎','🥰','🙄','😫','🥱','😴','🤤','😲','🤑','☹','🤯','😭','😱','🥵','🥶','😳','😵','🤪','🥴','🤮','🤬','🥳','😇','🤡','🤫','😈','👽','👾','👻','☠','💩','🤖'];
push.onclick=function(){
    let random=Math.floor(Math.random() * icon.length);
    array.push(icon[random]);
    elements.innerHTML=array;
    
}

pop.onclick=function(){
    array.pop();
    elements.innerHTML=array;
}

unshift.onclick=function(){
    let random=Math.floor(Math.random() * icon.length);
    array.unshift(icon[random]);
    elements.innerHTML=array;
}

shift.onclick=function(){
    array.shift();
    elements.innerHTML=array;
}

insert.onclick=function(){
    let random=Math.floor(Math.random() * icon.length);
    const deletedArray = array.splice(quantityInsert.value, 0, icon[random]);
    elements.innerHTML=array;
}

remove.onclick=function(){
    const deletedArray = array.splice(quantityRemove.value, 1);
    elements.innerHTML=array;
}