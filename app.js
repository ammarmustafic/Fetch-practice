async function getAllUser() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let response = data.json();
  return response;
}
let glavni = document.querySelector(".container");
let podaciKorisnika;

getAllUser().then((d) => {
  podaciKorisnika = d;
  podaciKorisnika.forEach((element) => {
    createCard(element);
  });
  console.log(podaciKorisnika);
});

function createCard(element) {
  let card = document.createElement("div");
  card.className = "card";

  let ime = document.createElement("p");
  ime.innerText = "Name:" + " " + element.name;

  let mail = document.createElement("p");
  mail.innerText = "Email:" + " " + element.email;

  let username = document.createElement("p");
  username.innerText = "Username:" + " " + element.username;

  card.addEventListener("click", () => {
    window.location.href = `index1.html?id=${element.id}`;
  });

  card.appendChild(username);
  card.appendChild(mail);
  card.appendChild(ime);

  glavni.appendChild(card);
}
