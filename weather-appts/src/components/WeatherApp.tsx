import React, { useState } from "react";

const API_KEY = "4d4f683201ee320165dbd5c9e948b385"; // Replace this

// Type definitions based on OpenWeatherMap response
type WeatherData = {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
};
type APIError = {
  cod: string | number;
  message: string;
};

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (): Promise<void> => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data: WeatherData | APIError = await res.json(); //

      if (res.ok) {
        setWeatherData(data as WeatherData);
        setError("");
      } else {
        const errData = data as APIError;
        setWeatherData(null);
        setError(errData.message);
      }
    } catch (err: unknown) {
      // err is unknown type in ts
      setWeatherData(null);
      setError("Failed to fetch weather data");
      console.log(err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetchWeather();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
          className="flex-1 border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>🌡 Temp: {weatherData.main.temp}°C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>💨 Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

// React.FormEvent is the type for form submission events.

// The generic <HTMLFormElement> specifies the HTML element the event is coming from.

// Similarly, React.ChangeEvent<HTMLInputElement> is for text inputs.
