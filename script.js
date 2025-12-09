// Simple hero slider
const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = parseInt(dot.dataset.slide, 10);
    showSlide(slideIndex);
  });
});

// Auto slide
setInterval(() => {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}, 5000);

// Mobile nav toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mainNav = document.getElementById("mainNav");

if (mobileMenuToggle && mainNav) {
  mobileMenuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
