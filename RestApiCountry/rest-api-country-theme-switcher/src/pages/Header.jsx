import React from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      aria-label="Country Flag Application Header"
      className="flex justify-between items-center px-4 py-6 dark:bg-[hsl(var(--background-dark-mode))] shadow-md transition-colors duration-300 "
    >
      <h1
        aria-label="Navigate to Home"
        tabIndex="0"
        className=" text-lg sm:text-xl font-bold text-dark-gray dark:text-white "
      >
        Where in the world
      </h1>
      <button
        className="flex items-center gap-2  bg-[hsl(var(--background-light-gray)] dark:bg-[hsl(var(--background-dark-mode))] text-[hsl(var(--dark-gray))] dark:text-hsl(var(--white)) px-2 py-2 rounded-md shadow transition-colors duration-30 "
        aria-label="Switch to Dark Mode"
        onClick={toggleTheme}
      >
        <img
          src="/moon-solid.svg"
          alt="Light or Dark Mode Image"
          className="w-5 h-5"
        />

        <span className="text-sm ">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </header>
  );
};

export default Header;
