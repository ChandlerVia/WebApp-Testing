const categorySelect = document.getElementById('categorySelect');
const subSelect = document.getElementById('subSelect');
const subSelectContainer = document.getElementById('subSelectContainer');
const weightSelect = document.getElementById('weightSelect');
const repSelect = document.getElementById('repSelect');
const message = document.getElementById('message');
const saveBtn = document.getElementById('saveBtn');

function downloadTextFile(filename, text) {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element); // Required for Firefox
  element.click();
  document.body.removeChild(element);
}

// Option map
const optionsMap = {
  Shoulders: ['Dumbbell Shoulder Press', 'Dumbell Lateral Raise', 'Dumbbell Shrug'],
  Legs: ['Machine Leg Extension', 'Leg Press', 'Hack Squat']
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
  const weight = weightSelect.value;
  const reps = repSelect.value;

  if (category && subOption && weight && reps) {
    localStorage.setItem('selection', JSON.stringify({category, subOption, weight, reps}));
    message.textContent = `Saved: ${category} → ${subOption}, ${weight}, ${reps}`;
    downloadTextFile("myfile.txt", "Saved: ${category} → ${subOption}, ${weight}, ${reps}");
  } else {
    message.textContent = 'Please select all options.';
  }
});