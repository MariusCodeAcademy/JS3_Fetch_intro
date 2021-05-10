"use strict"; // here we go again
console.log("api");

const loadBtn = document.getElementById("load");

loadBtn.addEventListener("click", getUsers);

// gauti 100 useriu duomenis is nutolio serverio json formatu
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    //                json() - nes gaunam duomenis json formatu
    .then((resp) => resp.json())
    // gaunam duomenis
    .then((data) => {
      generatePosts(data);
    })
    // jei yra klaidu jos bus atvaizduotos catch dalyje
    .catch((err) => console.warn(err));
}

function generatePosts(postData) {
  let str = "";
  postData.forEach((post) => {
    str += `
        <article data-id=${post.id} >
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button class='open-modal'>Read more</button> 
          <span>userId: ${post.userId}</span>
      </article>
        `;
  });
  document.getElementById("app").innerHTML = str;
}
