let form = document.querySelector("form");
let modal = document.querySelector(".modal");

let info = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let element = event.target.elements;
  info.name = element.name.value;
  info.email = element.email.value;
  info.color = element.color.value;
  info.movie = element.movie.value;
  info.books = element.books.value;
  info.terms = element.terms.value;

  modal.classList.remove("modal-none");

  let close = document.querySelector(".btn-close");
  close.addEventListener("click", () => {
    modal.classList.add("modal-none");
  });
  submission(info);
});

function submission(data = {}) {
  modal.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}`;
  let p1 = document.createElement("p");
  p1.innerText = `Email: ${data.email}`;
  let p3 = document.createElement("p");
  p3.innerText = `Color: ${data.color}`;
  let p4 = document.createElement("p");
  p4.innerText = `Movie: ${data.movie}`;
  let p5 = document.createElement("p");
  p5.innerText = `Book: ${data.books}`;
  let strong = document.createElement("strong");
  strong.innerText = `👉: ${
    data.terms === "on" ? "You have agrred" : "You are not agreed"
  }`;
  modal.append(h1, p1, p3, p4, p5, strong);
}
