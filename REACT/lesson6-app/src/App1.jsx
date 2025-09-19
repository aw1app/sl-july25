// src/App.js

import Toolbar from "./components/Toolbar";
import ThemeProvider from "./contexts/ThemeProvider";



function App() {
  

  return (
    <div>
      <h1>Context Demo</h1>

      <ThemeProvider> {/* Wrap Toolbar in ThemeProvider */}
        <Toolbar />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
