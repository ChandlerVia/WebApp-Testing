const categorySelect = document.getElementById('categorySelect');
const subSelect = document.getElementById('subSelect');
const subSelectContainer = document.getElementById('subSelectContainer');
const message = document.getElementById('message');
const saveBtn = document.getElementById('saveBtn');

// Option map
const optionsMap = {
  fruits: ['Apple', 'Banana', 'Cherry'],
  colors: ['Red', 'Green', 'Blue']
};

// When category changes
categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;

  if (selectedCategory && optionsMap[selectedCategory]) {
    // Show sub dropdown
    subSelectContainer.style.display = 'block';
    // Clear previous options
    subSelect.innerHTML = '';
    // Add new options
    optionsMap[selectedCategory].forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.toLowerCase();
      opt.textContent = option;
      subSelect.appendChild(opt);
    });
  } else {
    subSelectContainer.style.display = 'none';
  }

  message.textContent = '';
});

// Save button
saveBtn.addEventListener('click', () => {
  const category = categorySelect.value;
  const subOption = subSelect.value;

  if (category && subOption) {
    localStorage.setItem('selection', JSON.stringify({ category, subOption }));
    message.textContent = `Saved: ${category} → ${subOption}`;
  } else {
    message.textContent = 'Please select both options.';
  }
});