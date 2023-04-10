"use strict";

let last=document.querySelector('.last');
let next=document.querySelector('.next');

function lastBtn(){
    let activeImage=document.querySelector('.active');

    if(activeImage.previousElementSibling!=null){
     activeImage.classList.remove('active');
     activeImage.previousElementSibling.classList.add('active');
     timeLine();
    }
    else{
     activeImage.classList.remove('active');
     activeImage.parentNode.lastElementChild.classList.add('active');
     timeLine();
    }
}

function nextBtn(){
    let activeImage=document.querySelector('.active');
 
    if(activeImage.nextElementSibling!=null){
     activeImage.classList.remove('active');
     activeImage.nextElementSibling.classList.add('active');
     timeLine();
    }
    else{
     activeImage.classList.remove('active');
     activeImage.parentNode.firstElementChild.classList.add('active');
     timeLine();
    }
}

function timeLine(){
    document.querySelector('.time').style.transition='all 0s';
    document.querySelector('.time').style.width='0px';
    document.querySelector('.time').style.transition='all 6s';
    document.querySelector('.time').style.width='100%';
}

timeLine();

last.addEventListener('click',lastBtn);

next.addEventListener('click',nextBtn);

setInterval(()=>{
    nextBtn();

    document.querySelector('.time').style.transition='all 0s';
    document.querySelector('.time').style.width='0px';
},6000);