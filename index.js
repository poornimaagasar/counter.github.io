let value=document.querySelector('.value');
let incr=document.querySelector('.incr');
let reset=document.querySelector('.reset');
let decr=document.querySelector('.decr');
let count=0;
incr.addEventListener('click',function (){
    
    value.innerHTML=++count;
});
decr.addEventListener('click',function (){
    value.innerHTML=--count;
});
reset.addEventListener('click',function (){
    count=0;
    value.innerHTML=count;
});

