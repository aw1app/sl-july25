import { useState } from "react";
import ChildComponent from "./components/ChildComponent";
import ThemeContext from "./contexts/ThemeContext";


function App() {

    const [appTheme, setAppTheme] = useState('light'); // State to manage the current theme


    // Function to toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        setAppTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };


    document.body.style.backgroundColor = appTheme === 'dark' ? 'black' : 'white';
    document.body.style.color = appTheme === 'dark' ? 'white' : 'black'; // Adjust text color for readability


    return (
        <>

            <ThemeContext.Provider value={appTheme}>
                <h1>App</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>

                <ChildComponent /> {/* ChildComponent will receive the theme from context */}
            </ThemeContext.Provider>


        </>
    )

}


export default App;
