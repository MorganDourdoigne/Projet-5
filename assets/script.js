// Variables
// Variable du tableau des slides
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables "flèches"
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let nowSlide = 0;
const imgBanner = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const emptycircle = document.querySelectorAll(".dot");

// Partie flèche
// left arrow
// clique = message d'alerte
arrowLeft.addEventListener("click", () => {
  console.log("Je tourne à gauche");
});

// right arrow
// lors du clique message dans la console
arrowRight.addEventListener("click", () => {
  console.log("je tourne à droite");
});


// Partie défilement du carousel

// () appelé à chaque mise a jour du diapo
function updateSlide() {
  imgBanner.src = `./assets/images/slideshow/${slides[nowSlide].image}`;
  bannerTagLine.innerHTML = slides[nowSlide].tagLine;
  emptycircle.forEach((dot, index) => {
    if (index === nowSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

arrowRight.addEventListener("click", () => {
  nowSlide++;
  if (nowSlide >= slides.length) {
    nowSlide = 0;
  }
  updateSlide();
});

arrowLeft.addEventListener("click", () => {
  nowSlide--;
  if (nowSlide < 0) {
    nowSlide = slides.length - 1;
  }
  updateSlide();
});
