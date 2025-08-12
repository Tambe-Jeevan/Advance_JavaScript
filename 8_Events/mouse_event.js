/*Mouse Events
Event	Trigger
click	Single click on an element
dblclick	Double-click
mousedown	Mouse button pressed down
mouseup	Mouse button released
mousemove	Mouse moves over an element
mouseover	Pointer enters an element (bubbles)
mouseout	Pointer leaves an element (bubbles)
mouseenter	Pointer enters an element (no bubbling)
mouseleave	Pointer leaves an element (no bubbling)
contextmenu	Right-click / context menu*/

// 1.click	Single click on an element
const click = document.querySelector("#images");
click.addEventListener("click", (e) => {
//   alert(`${e.target.tagName} clicked`);
});

// 2.mousedown	Mouse button pressed down
const mousedown = document.querySelector("#images");
mousedown.addEventListener("mousedown", (e) => {
//   alert(`${e.target.tagName} mousedown`);
});

// 3.mouseover	Pointer enters an element (bubbles)
const mouseover = document.querySelector("#images");
mouseover.addEventListener("mouseover", (e) => {
//   alert(`${e.target.tagName} mouseover`);
});
// 4.mouseout	Pointer leaves an element (bubbles)
const mouseout = document.querySelector("#images");
mouseout.addEventListener("mouseout", (e) => {
//   alert(`${e.target.tagName} mouseout`);
});

// 5.mouseenter	Pointer enters an element (no bubbling)
const mouseenter = document.querySelector("#images");
mouseenter.addEventListener("mouseenter", (e) => {
//   alert(`${e.target.tagName} mouseenter`);
});
// 6.mouseleave	Pointer leaves an element (no bubbling)
const mouseleave = document.querySelector("#images");
mouseleave.addEventListener("mouseleave", (e) => {
//   alert(`${e.target.tagName} mouseleave`);
});

// contextmenu	Right-click / context menu 
const contextmenu = document.querySelector("#images");
contextmenu.addEventListener("contextmenu", (e) => {
   alert(`${e.target.tagName} contextmenu`);
});

//********** Capturing Mode false is default we add true ************
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    // console.log("clicked inside the ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    // console.log("owl clicked");
    // e.stopPropagation();
  },
  false
);
