// ===============================
// Navbar Toggle Button Animation
// ===============================
const toggler = document.querySelector('.navbar-toggler');
if (toggler) {
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
}

// ===============================
// Toggle Slider for Package Section
// ===============================
const optionLeft = document.getElementById('option-left');
const optionRight = document.getElementById('option-right');
const slider = document.querySelector('.toggle-slider');

if (optionLeft && optionRight && slider) {
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
}

// ===============================
// Custom Carousel Functionality
// ===============================
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

let currentIndex = 0;

if (track && items.length > 0 && prevBtn && nextBtn) {
  // Update carousel position based on index
  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });

    const itemWidth = items[0].offsetWidth;
    const gap = 30;
    const offset = -(currentIndex * (itemWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
  }

  // Next Button
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  // Previous Button
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  // Auto Resize Handling
  window.addEventListener('resize', updateCarousel);
  window.addEventListener('load', updateCarousel);
}

// ===============================
// Auto Slide (Optional)
// ===============================
// Uncomment if you want automatic sliding
/*
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);
*/

// ===============================
// Mobile Responsiveness Enhancements
// ===============================

// Adjust toggle width dynamically for smaller screens
function adjustToggleWidth() {
  const toggleContainer = document.querySelector('.toggle-container');
  if (!toggleContainer) return;

  if (window.innerWidth < 576) {
    toggleContainer.style.width = '90%';
  } else if (window.innerWidth < 768) {
    toggleContainer.style.width = '400px';
  } else {
    toggleContainer.style.width = '500px';
  }
}

window.addEventListener('resize', adjustToggleWidth);
window.addEventListener('load', adjustToggleWidth);
