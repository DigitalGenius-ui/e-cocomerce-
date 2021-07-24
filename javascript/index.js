// variables 

const input = document.querySelector(".input");
const icon = document.querySelector(".fa-search");
const search = document.querySelector(".search");
const second = document.querySelector(".second")
const span = document.querySelector(".second span");

const times = '<i class="fas fa-times"></i>';
const icon_search = '<i class="fas fa-search"></i>';

input.addEventListener("click", ()=>{
    input.classList.add("active");
    search.classList.add("active");
    second.classList.add("active");
    span.innerHTML = times;
});

span.addEventListener("click", ()=>{
    input.classList.remove("active");
    search.classList.remove("active");
    second.classList.remove("active");
    icon.classList.remove("active");
    span.innerHTML = icon_search;
})

// toggle 

const toggle = document.querySelector(".toggle");
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".list");

let down = false;

toggle.addEventListener("click", ()=>{
    if(!down){
        toggle.classList.add('open');
        overlay.classList.add('open');
        menu.classList.add('open');
        down = true;
    }else{
        toggle.classList.remove('open');
        overlay.classList.remove('open');
        menu.classList.remove('open');
        down = false;
    }
})
