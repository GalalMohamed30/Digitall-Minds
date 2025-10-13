import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeMode() {

    const [theme, setTheme] = useState(localStorage.getItem("currentmode") ?? "light");


    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            document.body.style.background = '#111111';
            document.body.style.transition = '0.5s';
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            document.body.style.background = '#f3f3f3';
            document.body.style.transition = '0.5s';
        }
    }, [theme])

    function toggeleMode() {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("currentmode", newTheme);
        setTheme(newTheme);
    }

    return (
        <div>
            <button onClick={toggeleMode}>
                {theme === 'light' ? <FaMoon size={25} color='#111111' /> : <FaSun size={25} color='#f3f3f3' />}
            </button>
        </div>
    )
}
