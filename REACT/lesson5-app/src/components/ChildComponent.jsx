import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";


function ChildComponent() {
    // Consume the context to get the current theme value    
    const theme = useContext(ThemeContext);

    return <p>(INSIDE ChildComponent) Current Theme: {theme}</p>;
}

export default ChildComponent;