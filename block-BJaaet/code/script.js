let input = document.querySelector(`input[type="text"]`);
let root = document.querySelector(`.moviesList`);

let allMovies = [
  {
    name: "Housefull",
    watched: true,
  },
  {
    name: "Titanic",
    watched: false,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // console.log(event.target.value);

    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    movieUi();
  }
});

function deleteList(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  movieUi();
}

function handdlechange(event) {
  let id = event.target.dataset.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function movieUi() {
  root.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add(`mList`);
    input.type = "checkbox";
    input.id = "i";
    input.checked = movie.watched;
    input.addEventListener("change", handdlechange);

    let lable = document.createElement("lable");
    lable.innerText = movie.name;
    lable.for = "i";
    let span = document.createElement("span");
    span.innerHTML = `<i class="fas fa-times"></i>`;
    span.setAttribute("data-id", i);

    span.addEventListener("click", deleteList);

    li.append(input, lable, span);

    root.append(li);
  });
}

movieUi();
