let container = document.querySelector(".container");
let leftTop = document.querySelector(".left-top");
let leftBot = document.querySelector(".left-bot");
let rightTop = document.querySelector(".right-top");
let rightBot = document.querySelector(".right-bot");

leftTop.addEventListener("mouseenter",()=>{
    container.classList.add("active-left-top");
})

leftTop.addEventListener("mouseout",()=>{
    container.classList.remove("active-left-top");
})

leftBot.addEventListener("mouseenter",()=>{
    container.classList.add("active-left-bot");
})

leftBot.addEventListener("mouseout",()=>{
    container.classList.remove("active-left-bot");
})

rightTop.addEventListener("mouseenter",()=>{
    container.classList.add("active-right-top");
})

rightTop.addEventListener("mouseout",()=>{
    container.classList.remove("active-right-top");
})

rightBot.addEventListener("mouseenter",()=>{
    container.classList.add("active-right-bot");
})

rightBot.addEventListener("mouseout",()=>{
    container.classList.remove("active-right-bot");
})