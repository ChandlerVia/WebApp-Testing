const select = document.getElementById('fruitSelect');
const saveBtn = document.getElementById('saveBtn');
const message = document.getElementById('message');

// Load saved choice if exists
window.addEventListener('DOMContentLoaded', () => {
  const savedFruit = localStorage.getItem('favoriteFruit');
  if (savedFruit) {
    select.value = savedFruit;
    message.textContent = `Previously selected: ${savedFruit}`;
  }
});

// Save current choice to localStorage
saveBtn.addEventListener('click', () => {
  const selectedFruit = select.value;
  if (selectedFruit) {
    localStorage.setItem('favoriteFruit', selectedFruit);
    message.textContent = `Saved: ${selectedFruit}`;
  } else {
    message.textContent = `Please select a fruit first.`;
  }
});