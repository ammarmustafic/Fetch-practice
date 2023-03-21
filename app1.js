const params = new URLSearchParams(window.location.search);
let id = params.get("id");

let postsContainer = document.querySelector(".posts");

async function nesto(id) {
  let posts = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  let response = posts.json();
  return response;
}

nesto(id).then((podaci) => {
  podaci.forEach((post) => {
    let postD = document.createElement("div");
    postD.className = "post";

    let title = document.createElement("h2");
    title.innerText = post.title;

    let body = document.createElement("p");
    body.innerText = post.body;

    postD.appendChild(title);
    postD.appendChild(body);

    postsContainer.appendChild(postD);
  });
});
