const hamburgerMenu = document.querySelector(".hamburgerMenu");
const offScreenMenu = document.querySelector(".offScreenMenu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
