export default function ui() {
  const mainContent = document.querySelector('.main-content');
  const h1 = document.createElement('h1');
  const h5 = document.createElement('h5');
  const button = document.createElement('button');
  const searchInput = document.createElement('input');
  const dataOutput = document.createElement('section');
  const tempToggle = document.createElement('button');

  h1.className = 'h1';
  h1.textContent = 'Current Weather';
  h5.className = 'h5';
  h5.textContent = 'Search location';
  button.textContent = 'Search';
  button.id = 'search-btn';
  searchInput.type = 'text';
  searchInput.id = 'searchInput';
  searchInput.placeholder = 'Search for a location';
  dataOutput.className = 'data-output';
  tempToggle.className = 'temp-toggle';
  tempToggle.textContent = 'Celsius';

  mainContent.appendChild(h1);
  mainContent.appendChild(h5);
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

export function backgroundImageUpdater(dataObj) {
  const body = document.querySelector('body');
  const condition = dataObj.condition.toLowerCase();
  let url = '';

  if (condition.includes('clear')) {
    url = 'https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('sunny')) {
    url = 'https://images.unsplash.com/photo-1615286628718-4a4c8924d0eb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('partly cloudy')) {
    url = 'https://images.unsplash.com/photo-1445297983845-454043d4eef4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('cloudy')) {
    url = 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('overcast')) {
    url = 'https://images.unsplash.com/photo-1489843377462-1105b03f39a5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('mist')) {
    url = 'https://images.unsplash.com/photo-1482841628122-9080d44bb807?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('fog')) {
    url = 'https://images.unsplash.com/photo-1560996025-95b43d543770?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('haze')) {
    url = 'https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('smoke')) {
    url = 'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('dust')) {
    url = 'https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('sand')) {
    url = 'https://images.unsplash.com/photo-1556596768-6d27210a5ee2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('rain')) {
    url = 'https://images.unsplash.com/photo-1496034663057-6245f11be793?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('showers')) {
    url = 'https://images.unsplash.com/photo-1622987857832-a31ceda6ad0d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('drizzle')) {
    url = 'https://images.unsplash.com/photo-1600415684478-744cf4f8f8d7?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('thunderstorm')) {
    url = 'https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('snow')) {
    url = 'https://images.unsplash.com/photo-1576823346787-8972d7b19c72?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('blowing snow')) {
    url = 'https://images.unsplash.com/photo-1517259227355-de4b20b3fe46?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('sleet')) {
    url = 'https://images.unsplash.com/photo-1484441876734-071a3e4b1ac7?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('freezing rain')) {
    url = 'https://images.unsplash.com/photo-1643147131591-30ba137ae59c?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if (condition.includes('ice pellets')) {
    url = 'https://images.unsplash.com/photo-1654023596103-ee5d8fa69048?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else {
    url = '../img/default.jpg';
  }

  body.style.backgroundImage = `url("${url}")`;
}
