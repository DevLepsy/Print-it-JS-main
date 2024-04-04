const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");
const dotsContainer = document.querySelector(".dots");

// Function to create dots and attach event listeners
function setupSlider() {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => updateSlide(index));
    dotsContainer.appendChild(dot);
  });

  updateSlide(currentIndex); // Initialize slide to the first one

  document
    .querySelectorAll(".arrow_left, .arrow_right")
    .forEach((arrow) =>
      arrow.addEventListener("click", ({ target }) =>
        updateSlide(
          target.classList.contains("arrow_left")
            ? currentIndex - 1
            : currentIndex + 1
        )
      )
    );

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      updateSlide(e.key === "ArrowLeft" ? currentIndex - 1 : currentIndex + 1);
    }
  });
}

// Function to update slide based on current index
function updateSlide(newIndex) {
  currentIndex = (newIndex + slides.length) % slides.length; // Ensure currentIndex is always within bounds
  img.src = slides[currentIndex].image;
  txt.innerHTML = slides[currentIndex].tagLine;
  document
    .querySelectorAll(".dot")
    .forEach((dot, index) =>
      dot.classList.toggle("dot_selected", index === currentIndex)
    );
}

setupSlider();
