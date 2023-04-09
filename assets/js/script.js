"use strict";

let last=document.querySelector('.last');
let next=document.querySelector('.next');

function lastBtn(){
    let activeImage=document.querySelector('.active');

    if(activeImage.previousElementSibling!=null){
     activeImage.classList.remove('active');
     activeImage.previousElementSibling.classList.add('active');
    }
    else{
     activeImage.classList.remove('active');
     activeImage.parentNode.lastElementChild.classList.add('active');
    }
}

function nextBtn(){
    let activeImage=document.querySelector('.active');
 
    if(activeImage.nextElementSibling!=null){
     activeImage.classList.remove('active');
     activeImage.nextElementSibling.classList.add('active');
    }
    else{
     activeImage.classList.remove('active');
     activeImage.parentNode.firstElementChild.classList.add('active');
    }
 }

last.addEventListener('click',lastBtn);

next.addEventListener('click',nextBtn);

setInterval(()=>{
    nextBtn();
},4000);