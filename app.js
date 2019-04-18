const buttons = document.getElementsByTagName("button");
const toggle = document.getElementById("toggle");
const spec = document.getElementsByClassName("special");
const screen = document.getElementById("screen");
const zero = document.querySelector("#zero");
const num = document.querySelectorAll(".num");
const point = document.querySelector("#decimal");
const root = document.querySelector("#root");
const equal = document.querySelector("#equal");
const power = document.querySelector("#power");
const percent = document.querySelector("#percent");
const log = document.querySelector("#log");
const binary = document.querySelectorAll(".binary");

// const multi = document.querySelector("#multi");
// const add = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// const divide = document.querySelector("#divide");
const backspace = document.querySelector("#razor");
let num1; //first number
let num2; //second number
var pointCheck = false; //boolean value for decimal point only appearing once
var gear = true; //true for num1, false for num2
var gear1 = false; // true when num2 is also entered
var op;

//functions
var exceed = () => {
  if (screen.innerHTML.length > 8) {
    return true;
  } else return false;
};

//to check if the textarea is blank or not
var isEmpty = () => {
  if (screen.innerHTML === "" || screen.innerHTML === "0") {
    return true;
  } else return false;
};

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

// num pad
for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", event => {
    if (isEmpty()) {
      if (event.target == point) {
        screen.innerHTML = "0.";
        pointCheck = true;
      } else screen.innerHTML = event.target.innerText;
    }
    //if the input field isnt empty
    else if (!exceed()) {
      if (event.target == point) {
        if (!pointCheck) {
          screen.innerHTML = screen.innerHTML.concat(event.target.innerText);
          pointCheck = true;
        }
      } else screen.innerHTML = screen.innerHTML.concat(event.target.innerText);
    }
  });
}

//backspace
backspace.addEventListener("click", () => {
  if (!isEmpty()) {
    if (screen.innerHTML.charAt(screen.innerHTML.length - 1) == ".") {
      pointCheck = false;
    }
    screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length - 1);
  }
});
//unary operations

//binary operations
var result = (number1, number2, operation) => {
  if (operation == "+") {
    return (number1 + number2).toString();
  }
  if (operation == "-") {
    return (number1 - number2).toString();
  }
  if (operation == "*") {
    return (number1 * number2).toString();
  }
  if (operation == "/") {
    if (number2 == 0) {
      return "";
    } else return (number1 / number2).toString();
  }
};
for (let i = 0; i < binary.length; i++) {
  binary[i].addEventListener("click", () => {
    if (gear) {
      num1 = parseFloat(screen.innerHTML);
      screen.innerHTML = event.target.innerText;
      gear = false;
      pointCheck = false;
      gear1 = true;
      op = binary[i].innerText;
    } else {
      screen.innerHTML = toString(result(num1, num2, op));
    }
  });
}
equal.addEventListener("click", () => {
  if (!gear && gear1) {
    num2 = parseFloat(screen.innerHTML);
    screen.innerHTML = event.target.innerText;
    gear = true;
    pointCheck = false;
    gear1 = true;
  }
  num1 = result(num1, num2, op);
  screen.innerHTML = num1.toString();
});
