const buttons = document.querySelectorAll(".menu-nav button");
const items = document.querySelectorAll(".menu-item");

buttons.forEach(btn => {
  btn.onclick = () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    items.forEach(item => {
      item.style.display = item.classList.contains(category) ? "block" : "none";
    });
  };
});

/* VIDEO PLAY ON HOVER */
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
