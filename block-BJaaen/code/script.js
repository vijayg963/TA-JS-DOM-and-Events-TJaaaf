let user = document.querySelector(".usericon");
let computer = document.querySelector(".computericon");
let result = document.querySelector(".result");
let set = document.querySelector(".reset");

let dataSet = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

function randomNumber(max = 3) {
  return Math.floor(Math.random() * max);
}

let userSelect = {},
  computerSelect = {};

function winner(you, com) {
  if (you.name === com.name) {
    result.innerText = "It's a Tie";
  } else if (you.beats === com.name) {
    result.innerText = "You Won!";
  } else {
    result.innerText = "You Lost..";
  }
}

function layoutUser() {
  user.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    if (userSelect.name === icon.name) {
      li.classList.add("select");
    }
    li.addEventListener("click", () => {
      userSelect = icon;
      computerSelect = dataSet[randomNumber()];
      winner(userSelect, computerSelect);
      layoutUser();
      layoutComputer();
    });
    li.append(i);
    user.append(li);
  });
}

layoutUser();

function layoutComputer() {
  computer.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    if (computerSelect.name === icon.name) {
      li.classList.add("select");
    }
    li.append(i);
    computer.append(li);
  });
}

layoutComputer();

set.addEventListener("click", () => {
  userSelect = {};
  computerSelect = {};
  layoutUser();
  layoutComputer();
});
