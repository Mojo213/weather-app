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

export function toggleTemp(dataObj) {
  const tempToggle = document.querySelector('.temp-toggle');
  const feelsLikeDiv = document.querySelector('.feels-like');
  const temperature = document.querySelector('.temperature');

  tempToggle.addEventListener('click', () => {
    if (tempToggle.textContent === 'Celsius') {
      tempToggle.textContent = 'Fahrenheit';
      feelsLikeDiv.textContent = `Feels like: ${dataObj.feelslike_f}F`;
      temperature.textContent = `Temp: ${dataObj.tempF}F`;
    } else {
      tempToggle.textContent = 'Celsius';
      feelsLikeDiv.textContent = `Feels like: ${dataObj.feelslike_c}C`;
      temperature.textContent = `Temp: ${dataObj.tempC}C`;
    }
  });
}
