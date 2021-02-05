let start = 0;

let percent = document.querySelector(".percent");
let bg = document.querySelector(".background");

let interval = setInterval(initAnimation,30);

function initAnimation(){
    start++;

    if(start > 99){
        clearInterval(interval);
    }

    bg.style.filter = `blur(${(mapConvertDuration(start,0,100,30,0))}px)`
    percent.style.opacity = `${mapConvertDuration(start,0,100,1,0)}`
    percent.innerHTML = `${start}%`;

}

const mapConvertDuration = (num,in_min,in_max,out_min,out_max) => {
    return (num - in_min) * (out_max-out_min) / (in_max-in_min) + out_min
}