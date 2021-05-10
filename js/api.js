"use strict"; // here we go again
console.log("api");

const loadBtn = document.getElementById("load");
const loadMore = document.getElementById("load-more");
const appEl = document.getElementById("app");

let postKartotinis = 1;

loadBtn.addEventListener("click", getUsers);
loadMore.addEventListener("click", getMorePosts);

// gauti 100 useriu duomenis is nutolio serverio json formatu
function getUsers(event, howMany = 1) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    //                json() - nes gaunam duomenis json formatu
    .then((resp) => resp.json())
    // gaunam duomenis
    .then((data) => {
      console.log(data);

      // visi 100postu yra data
      //   console.log(data);
      //   debugger;
      generatePosts(data.slice(0, 3 * howMany));
      //   generatePosts(data);
    })
    // jei yra klaidu jos bus atvaizduotos catch dalyje
    .catch((err) => console.warn(err));
}

function generatePosts(postData) {
  console.log(postData);
  let str = "";
  postData.forEach((post) => {
    str += `
        <article data-id=${post.id} >
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button class='open-modal'>Read more</button> 
          <span>id: ${post.id}</span>
      </article>
        `;
  });
  appEl.innerHTML = str;
}

function getMorePosts() {
  console.log("get more posts");
  getUsers(null, ++postKartotinis);
}
