import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";


const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light'); // State to manage the theme

    // Effect to apply the theme to the document body
    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#f0f0f0' : '#333333';
        document.body.style.color = theme === 'light' ? '#333333' : '#f0f0f0'; // Ensure text is visible
    }, [theme]); // Re-run when theme changes

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide the theme and toggle function to children components
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;