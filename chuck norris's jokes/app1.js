let params = new URLSearchParams(window.location.search);
let categoryId = params.get("id");

async function getRandomJoke(category) {
  let jokeResponse = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  let jokeData = await jokeResponse.json();
  return jokeData;
}

let cont = document.querySelector(".container");
getRandomJoke(categoryId).then((joke) => {
  displayJoke(joke);
});

function displayJoke(joke) {
  let jokeDiv = document.createElement("div");
  jokeDiv.className = "joke";

  let jokeText = document.createElement("p");
  jokeText.innerText = joke.value;
  jokeDiv.appendChild(jokeText);

  let newJokeButton = document.createElement("button");
  newJokeButton.innerText = "Get Another Joke";
  newJokeButton.addEventListener("click", () => {
    getRandomJoke(categoryId).then((newJoke) => {
      jokeText.innerText = newJoke.value;
    });
  });
  jokeDiv.appendChild(newJokeButton);

  cont.appendChild(jokeDiv);
}
