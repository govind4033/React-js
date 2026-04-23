import { useEffect, useState } from "react";
import "./App.css";
import {ThemeProvider} from "./context/Theme";
import Card from "./comp/Card";
import Themebtn from "./comp/Themebtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  },[themeMode])

return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div
        className={`min-h-screen flex flex-col items-center justify-center transition ${
          themeMode === "dark"
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-black"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">
          Theme Switcher 🌗
        </h1>

        <p className="mb-4">
          Current Theme: <span className="font-semibold">{themeMode}</span>
        </p>
        <Themebtn />
        <Card />
        <div className="flex gap-4">
          <button
            onClick={darkTheme}
            className="px-6 py-2 rounded-lg bg-slate-800 text-white"
          >
            Dark
          </button>

          <button
            onClick={lightTheme}
            className="px-6 py-2 rounded-lg bg-indigo-500 text-white"
          >
            Light
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;