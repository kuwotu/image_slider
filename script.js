const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let counter = 1;

const size = carouselImages[0].clientWidth;

//clientWidth - gets the width of said element

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextImage = () => {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
};

nextBtn.addEventListener("click", nextImage);

previousImage = () => {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
};

previousBtn.addEventListener("click", previousImage);

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
