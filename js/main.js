const navBtn = document.querySelector("#nav-button");
const navOverlay = document.querySelector("#nav-overlay");
const closeNavBtn = document.querySelector("#close-nav-button");

navBtn.addEventListener("click", function () {
  navOverlay.style.display = "flex";
});

closeNavBtn.addEventListener("click", function () {
  navOverlay.style.display = "none";
});