const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const dots = document.querySelectorAll(".dot");

const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let counter = 1;

// so that we start from the first picture and not the last clone which would be when counter is at 0

const size = carouselImages[0].clientWidth;

//clientWidth - gets the width of said element

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// -size so we can move down the right side of the x-axis

toggleActiveDot = (dots) => {
  dots.style.transition = "background-color 0.2s ease-in-out";
  dots.classList.toggle("active-dot");
};

toggleActiveDot(dots[counter - 1]);

nextImage = () => {
  if (counter >= carouselImages.length - 1) return;
  // counter starts at 1, so we can only allow it to go up to 6.
  // if it gets to 7 or above, we will slide off to the right of the carousel into empty space
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
};

nextBtn.addEventListener("click", nextImage);

previousImage = () => {
  if (counter <= 0) return;
  // counter ends at 0, so if it go past that, we will slide to the left of the carousel into empty space
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
};

previousBtn.addEventListener("click", previousImage);

// transitioned is a function that fires after the transition has ended. If you set the delay of the transition to 0,
// transitionend will not work work, as tehnically the transition will be automatic and have no start/end, as theres no delay

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    // 7 - 2 = 5 which is the position of the last slide
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    dots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });
    toggleActiveDot(dots[counter - 1]);
  }
  if (carouselImages[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    // 7 - 6 = 1 which is the position of the last slide. Counter starts from 1.
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    dots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });
    toggleActiveDot(dots[counter - 1]);
  } else {
    dots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });
    toggleActiveDot(dots[counter - 1]);
  }
});
