import UIFramework, { useEffect, useState } from "ui-library";
import { LightIcon, DarkIcon } from "icon-library";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        // Apply theme to the root element
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
            className="theme-toggle"
        >
            {theme === "dark" ? <LightIcon /> : <DarkIcon />}
        </button>
    );
}
