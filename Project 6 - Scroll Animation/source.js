let card = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
    let windowHeight = window.innerHeight/5 * 4
    console.log(windowHeight);
    card.forEach((card)=>{
        let cardTop = card.getBoundingClientRect().top

        if(cardTop < windowHeight){
            card.classList.add("active");
        }else{
            card.classList.remove("active");
        }
    })
})
