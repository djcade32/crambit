"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      data-testid="theme-button"
      onClick={toggleTheme}
      className=" border-(--white) rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer hover:bg-(--neutral-gray) transition-colors duration-200"
    >
      {theme === "dark" ? (
        <Moon data-testid="icon-moon" color="var(--white)" />
      ) : (
        <Sun data-testid="icon-sun" color="var(--black)" />
      )}
    </div>
  );
};

export default ThemeButton;
