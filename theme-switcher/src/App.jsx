import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Theme from "./Components/Theme/Theme";
import Card from "./Components/Card/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  
  useEffect(() => {
    setThemeMode(themeMode);
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        darkTheme: () => setThemeMode("dark"),
        lightTheme: () => setThemeMode("light"),
      }}
    >
      <div className="app-container">
        <header>
          <div className="logo">Theme Switcher</div>
          <div className="theme-toggle">
            <Theme />
          </div>
        </header>
        
        <main>
          <div className="showcase">
            <h1>Beautiful Product Display</h1>
            <p>Toggle the theme using the switch in the header</p>
          </div>
          
          <div className="product-container">
            <Card />
          </div>
        </main>
        
        <footer>
          <p>© 2025 Theme Switcher Demo</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
export default App;