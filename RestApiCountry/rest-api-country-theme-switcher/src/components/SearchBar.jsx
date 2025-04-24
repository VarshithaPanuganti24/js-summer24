import React from "react";
import { useTheme } from "../context/ThemeContext";

const SearchBar = ({ setSearchQuery }) => {
  const { theme } = useTheme();

  const getBackgroundColor = () => (theme === "light" ? "#ffffff" : "#111827");
  const getTextColor = () => (theme === "light" ? "#1f2937" : "#ffffff");
  const getPlaceholderColor = () => (theme === "light" ? "#1f2937" : "#ffffff"); // gray-700 / gray-200

  return (
    <div
      className="flex items-center gap-2 w-full sm:w-1/2 px-4 py-2 rounded-lg shadow-sm"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <img
        src="/magnifying-glass-solid.svg"
        alt="Search icon"
        className="w-5 h-5 opacity-60"
        style={{ filter: theme === "dark" ? "invert(1)" : "none" }}
      />
      <input
        type="text"
        placeholder="Search for a country..."
        aria-label="Search for a country"
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        className="w-full  outline-none text-md text-bold "
        style={{
          backgroundColor: getBackgroundColor(),
          color: getTextColor(),
          "::placeholder": {
            color: getPlaceholderColor(),
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
