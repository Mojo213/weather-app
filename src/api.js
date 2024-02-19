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
    locationCountry: data.location.country,
    feelslike_f: data.current.feelslike_f,
    feelslike_c: data.current.feelslike_c,
    condition: data.current.condition.text,
    wind_mph: data.current.wind_mph,
    humidity: data.current.humidity,
    uvIndex: data.current.uv,
    lastUpdated: data.current.last_updated,
    tempC: data.current.temp_c,
    tempF: data.current.temp_f,
  };
  return dataObj;
}

function displayData(dataObj) {
  const dataDisplay = document.querySelector('.data-output');
  const locationDiv = document.createElement('div');
  const locationCountryDiv = document.createElement('div');
  const feelsLikeDivF = document.createElement('div');
  const feelsLikeDivC = document.createElement('div');
  const condition = document.createElement('div');
  const windMph = document.createElement('div');
  const humidity = document.createElement('div');
  const uvIndex = document.createElement('div');
  const lastUpdated = document.createElement('div');
  const tempC = document.createElement('div');
  const tempF = document.createElement('div');

  locationDiv.className = 'location';
  locationCountryDiv.className = 'location-country';
  feelsLikeDivC.className = 'feels-likeC';
  feelsLikeDivF.className = 'feels-likeF';
  condition.className = 'condition';
  windMph.className = 'wind';
  humidity.className = 'humidity';
  uvIndex.className = 'uvIndex';
  lastUpdated.className = 'lastUpdated';
  tempC.className = 'tempC';
  tempF.className = 'tempF';

  dataDisplay.innerHTML = '';
  locationDiv.textContent = dataObj.location;
  locationCountryDiv.textContent = dataObj.locationCountry;
  feelsLikeDivC.textContent = `Feels like: ${dataObj.feelslike_c}C`;
  feelsLikeDivF.textContent = `Feels like: ${dataObj.feelslike_f}F`;
  condition.textContent = dataObj.condition;
  windMph.textContent = `Wind: ${dataObj.wind_mph}`;
  humidity.textContent = `Humidity: ${dataObj.humidity}`;
  uvIndex.textContent = `UV: ${dataObj.uvIndex}`;
  lastUpdated.textContent = `Last Updated: ${dataObj.lastUpdated}`;
  tempC.textContent = `Temp: ${dataObj.tempC}C`;
  tempF.textContent = `Temp: ${dataObj.tempF}F`;

  dataDisplay.appendChild(locationDiv);
  dataDisplay.appendChild(locationCountryDiv);
  dataDisplay.appendChild(feelsLikeDivC);
  dataDisplay.appendChild(feelsLikeDivF);
  dataDisplay.appendChild(condition);
  dataDisplay.appendChild(windMph);
  dataDisplay.appendChild(humidity);
  dataDisplay.appendChild(uvIndex);
  dataDisplay.appendChild(lastUpdated);
  dataDisplay.appendChild(tempC);
  dataDisplay.appendChild(tempF);

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
        console.log(data);
        console.log(keyInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  });
}
