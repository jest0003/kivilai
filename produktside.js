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
