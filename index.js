function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  for (const post of posts) {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  }
}

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.log(error.message);
  }
}

fetchPosts();

if (typeof module !== 'undefined') {
  module.exports = { fetchPosts, displayPosts };
}
