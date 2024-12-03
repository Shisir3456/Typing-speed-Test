// Select all keys
const keys = document.querySelectorAll('.key');

// Add click event for mouse interaction
keys.forEach((key) => {
  key.addEventListener('click', () => {
    addLightEffect(key);
  });
});

// Add keydown and keyup events for keyboard interaction
document.addEventListener('keydown', (e) => {
  const keyElement = document.querySelector(`.key[data-key="${e.key.toUpperCase()}"]`);
  if (keyElement) {
    keyElement.classList.add('pressed');
    addLightEffect(keyElement);
  }
});

document.addEventListener('keyup', (e) => {
  const keyElement = document.querySelector(`.key[data-key="${e.key.toUpperCase()}"]`);
  if (keyElement) {
    keyElement.classList.remove('pressed');
  }
});

// Function to add light effect
function addLightEffect(key) {
  // Add the 'light' class
  key.classList.add('light');

  // Remove the 'light' class after the animation ends
  setTimeout(() => {
    key.classList.remove('light');
  }, 500); // Match the animation duration in CSS
}