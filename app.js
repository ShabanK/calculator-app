const buttons = document.getElementsByTagName("button");
const toggle = document.getElementById("toggle");
const spec = document.getElementsByClassName("special");

//a bit of lazy manipulation
for (let i = 0; i < buttons.length; i++) {
  if (
    buttons[i].innerText == "7" ||
    buttons[i].innerText == "4" ||
    buttons[i].innerText == "1" ||
    buttons[i].innerText == "0" ||
    buttons[i].innerText == "Advanced"
  )
    buttons[i].style.borderLeft = "0.5px solid white";
  buttons[i].style.borderRight = "0.5px solid white";
  if (buttons[i].innerText == "Advanced")
    buttons[i].style.borderBottom = "0.5px solid white";
}

toggle.addEventListener("click", () => {
  if (event.target.innerText === "Advanced") {
    event.target.innerText = "Simple";
    for (let i = 0; i < spec.length; i++) spec[i].style.display = "block";
  } else {
    event.target.innerText = "Advanced";
    for (let i = 0; i < spec.length; i++) spec[i].style.display = "none";
  }
});
