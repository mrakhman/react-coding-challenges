import React, { useState } from 'react';

import App from './App';
import ThemeContext from '../context/ThemeContext';

// Use something like react-router-dom to manage multiple pages/routes

export default function Home() {
    const [themeContext, setThemeContext] = useState('light');

    return (
        <ThemeContext.Provider value={{themeContext, setThemeContext}} >
            <App />
        </ThemeContext.Provider>
    )
};
