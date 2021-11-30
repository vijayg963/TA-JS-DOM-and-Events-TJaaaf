function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let divOne = document.querySelector(".first");
let divTwo = document.querySelector(".second");

function bgColor() {
  divOne.style.backgroundColor = getRandomColor();
}

divOne.addEventListener("click", bgColor);

function randomColor() {
  divTwo.style.backgroundColor = getRandomColor();
}

divTwo.addEventListener("mousemove", randomColor);
