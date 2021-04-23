import {createContext} from 'react';

// 'light' or 'dark'
const ThemeContext = createContext({
    themeContext: {theme: 'light' | 'dark'},
    setThemeContext: () => {},
});

export default ThemeContext;
