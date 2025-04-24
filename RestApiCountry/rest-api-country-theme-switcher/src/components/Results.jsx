import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Results = ({ countries }) => {
  const { theme } = useTheme();

  const getCardBg = () =>
    theme === "light" ? "#ffffff" : "#111827"; 
  const getTextColor = () =>
    theme === "light" ? "#1f2937" : "#ffffff"; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {countries.map((country, idx) => (
        <Link
        to={`/country/${encodeURIComponent(country.name)}`}
        
        //  to={`/country/${country.name}}`}
          key={idx}
          tabIndex={0}
          className="p-4 rounded-xl shadow hover:shadow-lg transition"
          style={{
            backgroundColor: getCardBg(),
            color: getTextColor(),
          }}
        >
          <div className="mb-4">
            <img
              src={country.flag}
              alt={`Country Flag For ${country.name}`}
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <p className="font-bold text-lg">{country.name}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </Link>
      ))}
    </div>
  );
};

export default Results;

  