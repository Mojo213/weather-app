export default function ui() {
  const mainContent = document.querySelector('.main-content');
  const button = document.createElement('button');
  const searchInput = document.createElement('input');

  button.textContent = 'Search';
  button.id = 'search-btn';
  searchInput.type = 'text';
  searchInput.id = 'searchInput';
  searchInput.placeholder = 'Search for a location';

  mainContent.appendChild(searchInput);
  mainContent.appendChild(button);
}
