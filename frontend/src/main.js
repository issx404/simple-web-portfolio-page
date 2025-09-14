import "./style.css";
import "../node_modules/modern-normalize/modern-normalize.css";

document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    const slideWidth = 25;

    if (currentIndex >= totalSlides - 4) {
      currentIndex = 0; // Возвращаемся к началу
    } else if (currentIndex < 0) {
      currentIndex = totalSlides - 4; // Переходим к концу
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    updateSlider();
  });

  /////////////////////////////////

  const heterochromia = document.getElementById("cat_heterochromia");
  const random = document.getElementById("cat_random");
  const catgirl = document.getElementById("cat_catgirl");
  const foxgirl = document.getElementById("cat_foxgirl");
  const blonde = document.getElementById("cat_blonde");

  async function fetchAnime(query) {}
});
