import React from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const getBackgroundColor = () => {
    // ❌ TASK: Return different background colors based on the theme
    if (theme === "light") return "#ffffff";
    if (theme === "dark") return "#111827";
    return "#3498db";
  };
  
  const getTextColor = () => {
    return theme === "light" ? "#1f2937" : "#ffffff";
  };

  return (
    <header
    style={{ backgroundColor: getBackgroundColor(), color: getTextColor() }}
     className=" w-full h-[80px] flex justify-between items-center px-4 py-6 shadow-md transition-colors duration-300">
      <h1 className="text-xl sm:text-xl font-bold">
        Where in the world?
      </h1>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${
          theme === "light" ? "dark" : "light"
        } mode`}
        className="flex items-center gap-2 text-sm px-3 py-2 rounded-md transition-colors"
        style={{
          backgroundColor: theme === "light" ? "#ffffff" : "#111827", // gray-100 and gray-700
          color: getTextColor(),
        }}
      >
        <img
          src="/moon-solid.svg"
          alt="Theme icon"
          className="w-5 h-5 "
          style={{ filter: theme === "dark" ? "invert(1)" : "none" }}

        />
        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  );
};

export default Header;
