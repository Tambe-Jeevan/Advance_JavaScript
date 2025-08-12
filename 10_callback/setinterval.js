/*const start = function (str) {
    console.log(`${str} jeevan`);
//   const start = document.getElementById("start");
//   start.addEventListener("click", function (e) {
//     const h1 = document.getElementsByTagName("h1");
    
//   });
};
setInterval(start, 2000, "hello");*/

const getColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(getColor());

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let createInterval;
let interval;

let startChagingColor = function () {
if(!createInterval){
   interval = setInterval(() => {
    document.body.style.backgroundColor = getColor();
  }, 1000);
}
}

let stopChangingColor = function(){
    clearInterval(interval);
    createInterval = null;
}

start.addEventListener("click", startChagingColor);
stop.addEventListener("click", stopChangingColor);
