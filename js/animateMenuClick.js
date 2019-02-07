const menuBars = document.querySelector(".menuBars");

menuBars.addEventListener("click", e => {
  const nav = document.querySelector("header nav");
  const ddContainer = document.querySelector(".ddContainer");
  if (ddContainer.classList.length > 1) {
    ddContainer.classList.toggle("unclicked");
    nav.classList.toggle("unclicked");
  }
  ddContainer.classList.toggle("clicked");
  nav.classList.toggle("clicked");
  menuBars.classList.toggle("clicked");
});
