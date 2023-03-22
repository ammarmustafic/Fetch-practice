async function getAllJokes() {
  let catjokes = await fetch("https://api.chucknorris.io/jokes/categories");
  let response = catjokes.json();
  return response;
}

let cont = document.querySelector(".container");
let jokes;

getAllJokes().then((el) => {
  jokes = el;
  jokes.forEach((element) => {
    createCategory(element);
  });
  console.log(jokes);
});

function createCategory(element) {
  let a = document.createElement("div");
  a.className = "a";

  let category = document.createElement("p");
  category.innerText = element;
  a.appendChild(category);
  a.addEventListener("click", () => {
    window.location.href = `index1.html?id=${element}`;
  });
  cont.appendChild(a);
}
