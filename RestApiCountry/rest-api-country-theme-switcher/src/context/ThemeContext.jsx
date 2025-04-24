import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    // ❌ TASK: Update this function to cycle through Light → Dark
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};




























// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     // Load initial theme from localStorage or default to 'light'
//     return localStorage.getItem('theme') || 'light';
//   });

//   useEffect(() => {
//     // Apply or remove 'dark' class from <html>
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }

//     // Persist theme in localStorage
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

export const useTheme = () => useContext(ThemeContext);

