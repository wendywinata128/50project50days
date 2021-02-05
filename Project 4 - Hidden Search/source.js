// const scale = (num,in_min,in_max,out_min,out_max)=>{
//     return (num - in_min) * (out_max-out_min) / (in_max - in_min) + out_min;
// }

// let num = 1;

// while(num != 100){
//     console.log(scale(num,0,100,1,0));
//     num++;
// }

let buttonSearch = document.querySelector("button");
let input = document.querySelector("input");
let searchLayout = document.querySelector(".search");

buttonSearch.addEventListener("click", () => {
  searchLayout.classList.toggle("active");

  input.focus();
});
