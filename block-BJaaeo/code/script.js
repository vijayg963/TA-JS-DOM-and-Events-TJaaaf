let screen = document.querySelector(".display");

let btns = document.querySelectorAll("button");
let initialValue = 0;
screen.innerText = initialValue;

function handleBtn(event) {
  if (event.target.classList.contains("store")) {
    screen.innerText = eval(screen.innerText);
    return;
  }
  if (event.target.classList.contains("clear")) {
    screen.innerText = initialValue;
    return;
  }
  if (screen.innerText == initialValue) {
    screen.innerText = event.target.innerText;
  } else {
    screen.innerText += event.target.innerText;
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", handleBtn);
});
