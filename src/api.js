async function fetchData(searchTerm) {
  const api = 'd34d76793d0e448b9db151730242001';
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${searchTerm}&aqi=no`, { mode: 'cors' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch data:', error);
  }
}

function processData(data) {
  const dataObj = {
    location: data.location.name,
    feelslike_f: data.current.feelslike_f,
    feelslike_c: data.current.feelslike_c,
  };
  return dataObj;
}

function displayData(dataObj) {
  const dataDisplay = document.querySelector('.data-output');
  const locationDiv = document.createElement('div');
  const feelsLikeDivF = document.createElement('div');
  const feelsLikeDivC = document.createElement('div');

  locationDiv.className = 'location';
  feelsLikeDivC.className = 'feels-likeC';
  feelsLikeDivF.className = 'feels-likeF';

  locationDiv.textContent = dataObj.location;
  feelsLikeDivC.textContent = `Feels like ${dataObj.feelslike_c} C`;
  feelsLikeDivF.textContent = `Feels like ${dataObj.feelslike_f} F`;

  dataDisplay.appendChild(locationDiv);
  dataDisplay.appendChild(feelsLikeDivC);
  dataDisplay.appendChild(feelsLikeDivF);

  return dataDisplay;
}

export default async function getLocationData() {
  const searchInput = document.getElementById('searchInput');
  const button = document.getElementById('search-btn');

  button.addEventListener('click', async () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      try {
        const data = await fetchData(searchTerm);
        const keyInfo = processData(data);
        displayData(keyInfo);
        console.log(keyInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  });
}
