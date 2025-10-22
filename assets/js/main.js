// ===== Navbar Toggle =====
const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
});

// ===== Toggle Slider =====
const optionLeft = document.getElementById('option-left');
const optionRight = document.getElementById('option-right');
const slider = document.querySelector('.toggle-slider');

function setTogglePosition(position) {
  slider.style.left = position;
}

optionLeft.addEventListener('click', () => {
  setTogglePosition('5px');
  optionLeft.classList.add('active');
  optionRight.classList.remove('active');
});

optionRight.addEventListener('click', () => {
  setTogglePosition('calc(50% + 5px)');
  optionRight.classList.add('active');
  optionLeft.classList.remove('active');
});

const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');
let current = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === current) {
      item.classList.add('active');
    }
  });

  const offset = -(current * (items[0].offsetWidth + 30)); // 30 = gap
  document.querySelector('.carousel-track').style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
