import "./style.css";
import "../node_modules/modern-normalize/modern-normalize.css";

// Ждём загрузки DOM, чтобы убедиться, что элементы доступны
document.addEventListener("DOMContentLoaded", () => {
  // Получаем элементы
  const sliderTrack = document.querySelector(".slider-track"); // Исправлено: правильный класс и querySelector
  const slides = document.querySelectorAll(".slide"); // Все слайды
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Функция для обновления позиции слайдера
  function updateSlider() {
    const slideWidth = 25; // Ширина одного слайда (25% как в CSS)

    // Учитываем, что показываем 4 слайда одновременно
    if (currentIndex >= totalSlides - 4) {
      currentIndex = 0; // Возвращаемся к началу
    } else if (currentIndex < 0) {
      currentIndex = totalSlides - 4; // Переходим к концу
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  // Обработчик для кнопки "Следующий"
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    updateSlider();
  });

  // Обработчик для кнопки "Предыдущий"
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
