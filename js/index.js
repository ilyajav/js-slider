// DOM узлы
const appartaments = Array.from(document.getElementsByClassName("appartaments__item"));
const sliderDots = Array.from(document.getElementsByClassName("slider-dots_item"));
const appartamentsTitle = Array.from(document.getElementsByClassName("title appartaments__tab"));

let currentIndex = 0; // Начальный индекс слайдера

// ВАЛИДАТОР: если элементов нет, просто выходим
const hasSlides = appartaments.length > 0;

// Обновление видимого слайда и активных элементов
const handleShowSlide = (index) => {
  if (!hasSlides) return;

  const total = appartaments.length;
  // Нормализация индекса
  currentIndex = ((index % total) + total) % total; // безопасно для отрицательных

  // Прячем все слайды
  appartaments.forEach((appartament) => {
    appartament.style.display = "none";
  });

  // Убираем активности
  if (sliderDots.length) sliderDots.forEach((dot) => dot.classList.remove("active"));
  if (appartamentsTitle.length) appartamentsTitle.forEach((t) => t.classList.remove("active-title"));

  // Показываем текущий слайд
  const currentSlide = appartaments[currentIndex];
  currentSlide.style.display = "flex";

  // Делаем активными соответствующие элементы, если они существуют
  if (sliderDots[currentIndex]) sliderDots[currentIndex].classList.add("active");
  if (appartamentsTitle[currentIndex]) appartamentsTitle[currentIndex].classList.add("active-title");
};

// Инициализация слайдера
handleShowSlide(0);

// Управление слайдером
const handlePlusSlide = () => handleShowSlide(currentIndex + 1);
const handleMinusSlide = () => handleShowSlide(currentIndex - 1);
const handleCurrentSlide = (n) => handleShowSlide(n);