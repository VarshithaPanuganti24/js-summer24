import React from "react";
import { useTheme } from "../context/ThemeContext";

const RegionFilter = ({ setRegion }) => {
  const { theme } = useTheme();

  const getBackgroundColor = () =>
    theme === "light" ? "#ffffff" : "#111827";
  const getTextColor = () =>
    theme === "light" ? "#1f2937" : "#ffffff"; 

  return (
    <div className="w-full sm:w-1/4">
      <select
        onChange={(e) => setRegion(e.target.value)}
        aria-label="Filter countries by region"
        className="w-full px-4 py-2 text-sm rounded-lg shadow-sm focus:outline-none"
        style={{
          backgroundColor: getBackgroundColor(),
          color: getTextColor(),
        }}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default RegionFilter;

  