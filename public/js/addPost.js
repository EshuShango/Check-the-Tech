const saveBtn = document.getElementById("saveBtn");
const newPostTitle = document.getElementById("newPostTitle");
const newPostContent = document.getElementById("newPostContent");

async function addPost(e) {
  e.stopPropagation();
  e.preventDefault();
  const body = {
    p_title: newPostTitle.value,
    p_content: newPostContent.value,
  };

  console.log(body);

  const response = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //below is helping to parse (turning json into an object) and get an error
  const results = await response.json()
  // good to keep for info on error
  console.log(results);

  // if (response.ok) {
  //   document.location.replace("/dashboard");
    
  // }
}

saveBtn.addEventListener("submit", addPost);
