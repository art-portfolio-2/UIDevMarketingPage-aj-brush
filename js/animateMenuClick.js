const menuBars = document.querySelector(".menuBars");

menuBars.addEventListener("click", e => {
  const dropdown = document.querySelector(".dropdown");
  const nav = document.querySelector("header nav");
  const diamond = document.querySelector(".menuEnd");
  diamond.classList.toggle("clicked");
  dropdown.classList.toggle("clicked");
  nav.classList.toggle("clicked");
  menuBars.classList.toggle("clicked");
});
