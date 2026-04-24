// Write your code here!
const postList = document.getElementById("post-list");

function displayPosts(posts) {
  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

async function fetchPosts() {
  
  const data = [
    {
      title: "sunt aut facere repellat provident occaecati",
      body: "quia et suscipit suscipit recusandae consequuntur"
    }
  ];

  setTimeout(() => {
    displayPosts(data);
  }, 100);
}

fetchPosts();