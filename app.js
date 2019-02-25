const buttons = document.getElementsByTagName("button");
const toggle = document.getElementById("toggle");
const spec = document.getElementsByClassName("special");
const screen = document.getElementById("screen");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const num = document.querySelectorAll(".num");
const point = document.querySelector("#decimal");
const root = document.querySelector("#root");
const equal = document.querySelector("#equal");
const power = document.querySelector("#power");
const percent = document.querySelector("#percent");
const log = document.querySelector("#log");
const multi = document.querySelector("#multi");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
let num1; //first number
let num2; //second number
var pointCheck = false; //boolean value for decimal point only appearing once

//a bit of lazy manipulation
for (let i = 0; i < buttons.length; i++) {
  if (
    buttons[i].innerText == "7" ||
    buttons[i].innerText == "4" ||
    buttons[i].innerText == "1" ||
    buttons[i].innerText == "0"
  )
    buttons[i].style.borderLeft = "0.5px solid white";
  buttons[i].style.borderRight = "0.5px solid white";
  if (buttons[i].innerText == "Advanced")
    buttons[i].style.borderBottom = "0.5px solid white";
}

//toggling between advanced and simple
toggle.addEventListener("click", event => {
  if (event.target.innerText === "Advanced") {
    event.target.innerText = "Simple";
    for (let i = 0; i < spec.length; i++) spec[i].style.display = "block";
  } else {
    event.target.innerText = "Advanced";
    for (let i = 0; i < spec.length; i++) spec[i].style.display = "none";
  }
});

//to check if the textarea is blank or not
var isEmpty = () => {
  if (screen.innerHTML === "0") {
    return true;
  } else return false;
};

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", event => {
    if (!isEmpty()) {
      if (!(event.target == point))
        screen.innerHTML = screen.innerHTML.concat(event.target.innerText);
    } else {
      if (event.target == point) {
        if (!pointCheck) {
          screen.innerHTML = screen.innerHTML.concat(event.target.innerText);
          pointCheck = true;
        }
      } else screen.innerHTML = event.target.innerText;
    }
  });
}
