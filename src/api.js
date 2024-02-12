export default async function getLocationData() {
    const searchInput = document.getElementById('searchInput');
    const button = document.getElementById('search-btn');
  
    button.addEventListener('click', async () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
        try {
          const data = await fetchData(searchTerm);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    });
  }
  
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
  