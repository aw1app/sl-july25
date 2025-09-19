import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";


const Toolbar = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;

  return (
    <div>
      <h2>Toolbar</h2>
      <button
        style={{ backgroundColor: theme === 'dark' ? '#555' : '#eee', color: theme === 'dark' ? 'white' : 'black' }}
        onClick={toggleTheme}
      >
        Change Theme
      </button>
      <p>Current Theme: {theme}</p> {/* Added for clarity */}
    </div>
  );
};

export default Toolbar;