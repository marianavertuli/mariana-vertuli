"use client"

import { ReactNode, createContext, useEffect, useState } from "react";

export interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
      document.documentElement.className = theme === 'dark' ? 'dark-theme' : '';
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    };
     
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}