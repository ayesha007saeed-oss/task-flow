import React, { createContext, useState, useEffect, useContext } from 'react';

// Context Create kiya
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default mode Dark rakha hai
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Jab bhi isDarkMode change hoga, yeh HTML body ki class update karega
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Button ke liye toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Navbar/Components ke liye custom hook
export const useTheme = () => useContext(ThemeContext);