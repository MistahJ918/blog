async function loadJSONPosts() {
  try {
    const response = await fetch("data/posts.json");
    return await response.json();
  } catch {
    return [];
  }
}

async function loadAllPosts() {
  const jsonPosts = await loadJSONPosts();
  const localPosts = JSON.parse(localStorage.getItem("posts")) || [];

  return [...localPosts, ...jsonPosts];
}

loadAllPosts().then(posts => {
  const container = document.getElementById("posts");

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p>${post.content}</p>
    `;

    container.appendChild(div);
  });
});