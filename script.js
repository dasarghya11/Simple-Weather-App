async function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!location) {
    resultDiv.innerHTML = "Please enter a location.";
    return;
  }

  const apiKey = "d24fa1b839854a15b6e55453250410"; // Replace with your own API key
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  try {
    resultDiv.innerHTML = "Fetching weather...";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Location not found.");
    }

    const data = await response.json();
    const tempC = data.current.temp_c;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;

    resultDiv.innerHTML = `
      <h3>Weather in ${data.location.name}, ${data.location.country}</h3>
      <img src="https:${icon}" alt="${condition}" />
      <p><strong>${tempC}°C</strong> - ${condition}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "Error fetching weather: " + error.message;
  }
}
