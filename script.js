const apiKey = "aee4337116dcd79c88f2b28fb30e360d";

function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (city === "") {
    result.innerHTML = "❌ Please enter city name";
    return;
  }

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
  if (data.cod === "404") {
    result.innerHTML = "❌ City not found";
    return;
  } else if (data.cod === 401) {
    result.innerHTML = "❌ Invalid API key";
    return;
  }



      result.innerHTML = `
        <p class='js-class'><b>City:</b> ${data.name}</p>
        <p class='js-class'><b>Temp:</b> ${data.main.temp} °C</p>
        <p class='js-class'><b>Weather:</b> ${data.weather[0].main}</p>
        <p class='js-class'><b>Humadity:</b> ${data.main.humidity}</p>
      `;
    })
    .catch(() => {
      result.innerHTML = "⚠ Error fetching data";
    });
}



document.querySelector("#btn").addEventListener("click", getWeather);