let toggle = document.querySelector(".bar");
let nav = document.querySelector("nav");

let moveOpen = false;

toggle.addEventListener("click",()=>{
    if(!moveOpen){
        toggle.classList.add("open");
        nav.classList.add("open");
        moveOpen = true;
    }else{
        toggle.classList.remove("open")
        nav.classList.remove("open");
        moveOpen = false
    }
})