export default function ui() {
  const mainContent = document.querySelector('.main-content');
  const button = document.createElement('button');
  const searchInput = document.createElement('input');
  const dataOutput = document.createElement('section');
  const tempToggle = document.createElement('button');

  button.textContent = 'Search';
  button.id = 'search-btn';
  searchInput.type = 'text';
  searchInput.id = 'searchInput';
  searchInput.placeholder = 'Search for a location';
  dataOutput.className = 'data-output';
  tempToggle.className = 'temp-toggle';
  tempToggle.textContent = 'Celsius';

  mainContent.appendChild(searchInput);
  mainContent.appendChild(tempToggle);
  mainContent.appendChild(button);
  mainContent.appendChild(dataOutput);
}

export function toggleTemp() {
  const tempToggle = document.querySelector('.temp-toggle');
  tempToggle.addEventListener('click', () => {
    if (tempToggle.textContent === 'Celsius') {
      tempToggle.textContent = 'Fahrenheit';
    } else {
      tempToggle.textContent = 'Celsius';
    }
  });
}
