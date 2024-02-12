export default function ui() {
  const mainContent = document.querySelector('.main-content');
  const button = document.createElement('button');
  const searchInput = document.createElement('input');
  const dataOutput = document.createElement('section');

  button.textContent = 'Search';
  button.id = 'search-btn';
  searchInput.type = 'text';
  searchInput.id = 'searchInput';
  searchInput.placeholder = 'Search for a location';
  dataOutput.className = 'data-output';

  mainContent.appendChild(searchInput);
  mainContent.appendChild(button);
  mainContent.appendChild(dataOutput);
}
