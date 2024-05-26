/*Create a new button element. Give it a text "click me", background color of red and text color of white.
Insert the button as the first element inside the body tag.*/

/* let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn); */

/* ------------------------------------------- */

/* Create a <p> tag in html, give it a class & some styling. 
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.*/

/* let para = document.querySelector("p");

para.classList.add("newClass"); */

/* para.classList.remove("newClass"); */

/* -------------------------------------- */

/* Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again. */

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    currMode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }
  console.log(currMode);
});
