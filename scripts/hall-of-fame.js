const modal = document.getElementById("postModal");
const newPostBtn = document.querySelector(".new-post-btn");

newPostBtn.onclick = () => modal.style.display = "flex";

modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

document.querySelectorAll(".like-btn").forEach(btn => {
  btn.onclick = () => {
    btn.classList.toggle("liked");
    const likes = btn.nextElementSibling;
    let count = parseInt(likes.textContent);
    likes.textContent = btn.classList.contains("liked")
      ? `${count + 1} likes`
      : `${count - 1} likes`;
  };
});
