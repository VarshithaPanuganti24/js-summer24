import React, { useState } from "react";

const API_KEY = "4d4f683201ee320165dbd5c9e948b385";

const WeatherApp = () => {
  const [city, setCity] = useState("austin");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log("data",data);

      if (data.cod === 200) {
        setWeatherData(data);
        setError("");
      } else {
        setWeatherData(null);
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch weather data");
      setWeatherData(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Weather App</h2>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
          className="flex-1 border px-4 py-2 bg-blue-500 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">{weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>🌡️ Temp: {weatherData.main.temp}°C</p>
          <p>💨 Wind: {weatherData.wind.speed} m/s</p>
          <p>🌫️ Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

