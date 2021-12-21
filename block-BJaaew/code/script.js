let rootHouse = document.querySelector(".houseName");
let rootPeople = document.querySelector(".peoples");
let search = document.getElementById("search");
let activeHouse = "";

let allHouses = got.houses.map((house) => house.name);

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

function houseUI(allHouses = []) {
  rootHouse.innerHTML = "";
  allHouses.forEach((house) => {
    let li = document.createElement("li");
    li.classList.add("list");
    li.innerText = house;

    if (activeHouse === house) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => {
      activeHouse = house;
      let filterByHome = got.houses.find((h) => h.name === house).people || [];
      peopleUI(filterByHome);
      houseUI(allHouses);
    });
    rootHouse.append(li);
  });
}

houseUI(allHouses);

function peopleUI(allPeople = []) {
  rootPeople.innerHTML = "";
  allPeople.forEach((people) => {
    let li = document.createElement("li");
    li.classList.add("people");
    let img = document.createElement("img");
    img.alt = people.name;
    img.src = people.image;
    let h2 = document.createElement("h2");
    h2.innerText = people.name;
    let p = document.createElement("p");
    p.innerText = people.description;
    let button = document.createElement("button");
    button.classList.add("list");
    button.innerText = "Know More!";
    li.append(img, h2, p, button);

    rootPeople.append(li);
  });
}

peopleUI(allPeople);

function searchInput(event) {
  let searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) => {
    return p.name.toLowerCase().includes(searchText.toLowerCase());
  });
  peopleUI(filteredPeople);
}

search.addEventListener("keyup", searchInput);
