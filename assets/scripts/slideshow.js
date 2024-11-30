const images = document.querySelectorAll('.slide-image');
const titleElement = document.getElementById('slide-title');
const descriptionElement = document.getElementById('slide-description');

let currentIndex = 0;

function showNextSlide() {
  // Hide the current image
  images[currentIndex].classList.remove('active');

  // Calculate the next image index
  currentIndex = (currentIndex + 1) % images.length;

  // Show the next image
  images[currentIndex].classList.add('active');

  // Update text overlay from data attributes
  const currentSlide = images[currentIndex];
  titleElement.textContent = currentSlide.getAttribute('data-title');
  descriptionElement.textContent = currentSlide.getAttribute('data-description');
}

// Change images and text every 5 seconds
setInterval(showNextSlide, 5000);
