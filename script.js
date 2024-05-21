const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// const cartIcon =document.querySelector("#carts-icon");
// const carts = document.querySelector(".carts");
// const closeCart = document.querySelector("#carts-close");
// cartIcon.addEventListener("click",()=>{
//     carts.classList.add("active");
// })
// cartIcon.addEventListener("click",()=>{
//     carts.classList.remove("active");
// })


// function re(){
//     var element = document.getElementById("carts");
//     element.classList.toggle();

// }

function re(){
    let remove=document.getElementById('carts')
    if(remove.style.display==='none'){
        remove.style.display='block';
    }
    else{
        remove.style.display='none';
    }
}




