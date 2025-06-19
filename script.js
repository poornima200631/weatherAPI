async function getWeather() {
    event.preventDefault();

    try {
      const place = document.getElementById("search").value;
      const apiKey = "31387fbb9b6c465582264237251906";  
      if(!place){
        document.getElementById('city').innerText = "City cannot be empty❗️❗️";
        document.getElementById('temperature').textContent = "--";
        document.getElementById('humidity').textContent = "--";
        document.getElementById('wind').textContent = "--";
        return;
      }
  
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`);
      const data = await response.json();
  
      document.getElementById('temperature').textContent = ` ${data.current.temp_c}°C`;
      document.getElementById('humidity').textContent = ` ${data.current.humidity}%`;
      document.getElementById('wind').textContent = ` ${data.current.wind_kph} kph`;
      document.getElementById('city').textContent=`${place}`;
      document.getElementById("search").value = "";
  
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }
  