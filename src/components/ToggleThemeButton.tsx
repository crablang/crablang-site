import { useState, useEffect } from 'react';

export const ToggleThemeButton = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
      }, [theme]);

    return (
        <>
            <button className="bg-neutral-700 rounded-full px-6 py-2 text-" onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
        </>
    )
}