function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomNumber(max) {
  return Math.round(Math.random() * 500);
}

let root = document.querySelector(".big-box");

for (let index = 0; index < 500; index++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  let randomNum = randomNumber(500);
  h3.innerText = randomNum;
  div.append(h3);
  root.append(div);
}

let allBox = document.querySelectorAll(".box");

function disco() {
  allBox.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.querySelector("h3").innerText = randomNumber(500);
  });
}

root.addEventListener("mousemove", disco);
