function initSlider() {
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

  const dotsContainer = document.querySelector(".dots");
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  const imageElement = document.querySelector(".banner-img");
  const textElement = document.querySelector("#banner p");
  let currentSlideIndex = 0;

  function generateDots() {
    slides.forEach(() => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlide() {
    imageElement.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
    textElement.innerHTML = slides[currentSlideIndex].tagLine;
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("dot_selected"));
    document
      .querySelectorAll(".dot")
      [currentSlideIndex].classList.add("dot_selected");
  }

  function handleArrowClick(isLeft) {
    if (isLeft) {
      currentSlideIndex =
        (currentSlideIndex - 1 + slides.length) % slides.length;
    } else {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    }
    updateSlide();
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        handleArrowClick(true);
        break;
      case "ArrowRight":
        handleArrowClick(false);
        break;
      default:
        break;
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  generateDots();
  updateSlide();

  arrowLeft.addEventListener("click", () => handleArrowClick(true));
  arrowRight.addEventListener("click", () => handleArrowClick(false));
}

initSlider();
