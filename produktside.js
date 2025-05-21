/* Sektionen herunder styrer stylingen på knapperne, så man kan se, om man har valgt styk/par eller venstre/højre.*/

const quantButtons = document.querySelectorAll(".quantButton");

quantButtons.forEach((quantButton) => {
  quantButton.addEventListener("click", function () {
    quantButtons.forEach((quantButton) => quantButton.classList.remove("selected"));

    this.classList.add("selected");
  });
});

const sideButtons = document.querySelectorAll(".sideButton");

sideButtons.forEach((sideButton) => {
  sideButton.addEventListener("click", function () {
    sideButtons.forEach((sideButton) => sideButton.classList.remove("selected"));

    this.classList.add("selected");
  });
});

const infoSelectors = document.querySelectorAll(".infoSelector");

infoSelectors.forEach((infoSelector) => {
  infoSelector.addEventListener("click", function () {
    infoSelectors.forEach((infoSelector) => infoSelector.classList.remove("selected_2"));

    this.classList.add("selected_2");
  });
});

/* Sektionen herunder styrer prisen afhængigt af, om du klikker på styk eller par */
const prisInfo = document.querySelector("#pris");
const stykButton = document.querySelector("#styk");
const parButton = document.querySelector("#par");

stykButton.addEventListener("click", function () {
  console.log("Hello styk!");
  prisInfo.innerText = "650 kr";
});

parButton.addEventListener("click", function () {
  console.log("Hello par!");
  prisInfo.innerText = "1300 kr";
});

/* Sektionen herunder styrer om du ser produktbeskrivelsen eller produktplejeinfo */

const prodDesc = document.querySelector("#productDescription");
const beskrivelseButton = document.querySelector("#beskrivelse");
const produktplejeButton = document.querySelector("#produktpleje");

produktplejeButton.addEventListener("click", function () {
  console.log("Hello produktpleje!");
  prodDesc.innerHTML = "Sådan passer du dit smykke.";
});

beskrivelseButton.addEventListener("click", function () {
  console.log("Hello beskrivelse!");
  prodDesc.innerHTML =
    "Eksklusiv ørering med Kivilais signaturlås, som sikrer, at det smukke design vender fremad, så det tydeligt kan ses. <br><br>Øreringen er hypoallergenisk og nikkelfri, og fås i sterling sølv eller forgyldt sterling sølv. <br><br>Øreringen er 1,9 cm bred og 8-9 cm lang. Fås i flere længder.";
});

/* Sektionen herunder styrer om du ser valget af guld eller sølv*/

const metals = document.querySelectorAll(".metal");
const colorDesc = document.querySelector("#colorDesc");

metals.forEach((metal) => {
  metal.addEventListener("click", function () {
    metals.forEach((metal) => metal.classList.remove("selected_3"));

    this.classList.add("selected_3");

    const desc = this.getAttribute("data-description");
    colorDesc.innerText = desc;
    console.log(this);
  });
});

/* Sektionen herunder styrer scrollbaren på det nederste galleri. Har fulgt guiden på Youtube af GreatStack: https://www.youtube.com/watch?v=gzXyRa7jwk4*/

let scrollContainer = document.querySelector(".gallery");
let backButton = document.querySelector("#backButton");
let nextButton = document.querySelector("#nextButton");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

nextButton.addEventListener("click", () => {
  scrollContainer.scrollLeft += 599;
});

backButton.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 599;
});

/* Sektionen herunder styrer produktbillederne i toppen. Den er bygget med guiden på https://www.w3schools.com/howto/howto_js_slideshow.asp */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /* for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } */
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
