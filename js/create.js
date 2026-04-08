document.getElementById("postForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const newPost = {
    title: title,
    date: new Date().toISOString().split("T")[0],
    content: content
  };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift(newPost);

  localStorage.setItem("posts", JSON.stringify(posts));

  window.location.href = "index.html";
});