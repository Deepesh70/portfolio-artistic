"use client";

import React from "react";
import { useTheme } from "@/lib/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 border-2 border-pencil bg-white flex items-center justify-center text-pencil hover:text-marker hover:border-marker transition-all duration-200 cursor-pointer group"
      style={{
        borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        size={18}
        strokeWidth={2.5}
        className={`absolute transition-all duration-300 ${
          theme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"
        }`}
      />
      <Moon
        size={18}
        strokeWidth={2.5}
        className={`absolute transition-all duration-300 ${
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      />
    </button>
  );
}
