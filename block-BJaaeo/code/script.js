let screen = document.querySelector(".display");

let output = document.querySelector(".display");
let btn = document.querySelectorAll("button");
let initialValue = 0;

function handleBtn(event) {
  if (event.target.classList.contains("equalto")) {
    output.innerText = eval(output.innerText);
    return;
  }
  output.innerText += event.target.innerText;
}

btn.forEach((b) => {
  b.addEventListener("click", handleBtn);
});

let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  output.innerText = initialValue;
});

screen.innerText = result;
