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
