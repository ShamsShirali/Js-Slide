"use strict";

let last=document.querySelector('.last');
let next=document.querySelector('.next');

last.addEventListener('click',()=>{
    let activeImage=document.querySelector('.active');

    if(activeImage.previousElementSibling!=null){
     activeImage.classList.remove('active');
     activeImage.previousElementSibling.classList.add('active');
    }
    else{
     activeImage.classList.remove('active');
     activeImage.parentNode.lastElementChild.classList.add('active');
    }

    console.log('hello');
});

next.addEventListener('click',()=>{
   let activeImage=document.querySelector('.active');

   if(activeImage.nextElementSibling!=null){
    activeImage.classList.remove('active');
    activeImage.nextElementSibling.classList.add('active');
   }
   else{
    activeImage.classList.remove('active');
    activeImage.parentNode.firstElementChild.classList.add('active');
   }
});