async function getWeather() {
    event.preventDefault();
    try {
      const place = document.getElementById("search").value;
      const apiKey = "31387fbb9b6c465582264237251906";  
  
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`);
      const data = await response.json();
  
      document.getElementById('temperature').textContent = ` ${data.current.temp_c}°C`;
      document.getElementById('humidity').textContent = ` ${data.current.humidity}%`;
      document.getElementById('wind').textContent = ` ${data.current.wind_kph} kph`;
      console.log("Your Input:", place);
      console.log("API Returned:", data.location.name, data.current.temp_c);

  
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }
  