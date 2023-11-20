const delLink = document.getElementById("delete-link");
const upLink = document.getElementById("update-link");

const updatePost = async (event) => {
  const title = document.getElementById("edit-title").value;
  const content = document.getElementById("edit-content").value;
  const id = event.target.getAttribute("data-id");
  console.log(title, content, id, "from edit.js");

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      content: content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Your post was successfully updated");
    document.location.replace("/dashboard");
  } else {
    alert("Something went wrong");
  }
};

const deletePost = async (event) => {
  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    alert("Your Post was successfully deleted");
    document.location.replace("/dashboard");
  } else {
    alert("Something went wrong");
  }
};

upLink.addEventListener("click", updatePost);
delLink.addEventListener("click", deletePost);