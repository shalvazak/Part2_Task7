import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowSize from './hooks/useWindowSize';
import './App.css'; 

const App = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 576) {
      setDarkMode(false);
    }
  }, [width, setDarkMode]);

  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`app-container ${themeClass}`}>
      <h1>My App</h1>
      <p>Current Theme: {isDarkMode ? 'Dark' : 'Light'}</p>
      
      <button onClick={() => setDarkMode((prevState) => !prevState)}>Switch Theme</button>
    </div>
  );
};

export default App;
