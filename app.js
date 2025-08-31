const API_KEY = "PUT_YOUR_OPENWEATHER_API_KEY_HERE";
document.getElementById('go').addEventListener('click', async () => {
  const city = document.getElementById('city').value.trim();
  if (!city) return;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById('out').textContent = JSON.stringify(data, null, 2);
});
