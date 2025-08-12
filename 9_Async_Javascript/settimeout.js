const sayHitesh = function () {
  console.log("Hitesh");
};
const changeText = function () {
  document.querySelector("h1").innerHTML = "jeevan";
};

const changeMe = setTimeout(changeText, 2000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeMe);
  console.log("STOPPED");
});
