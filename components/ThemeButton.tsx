"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className=" border-(--white) rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer hover:bg-(--neutral-gray) transition-colors duration-200"
    >
      {theme === "dark" ? <Moon color="var(--white)" /> : <Sun color="var(--black)" />}
    </div>
  );
};

export default ThemeButton;
