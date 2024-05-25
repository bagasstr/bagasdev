"use client"; //is not necessary, as it's not a valid JavaScript statement

import { useTheme } from "next-themes";
import "./globals.css";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    console.log(resolvedTheme);
  };

  return (
    <button
      className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
      onClick={toggleTheme}
    >
      Change Theme
    </button>
  );
}
