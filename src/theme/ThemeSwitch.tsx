"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonSVG from "@components/SVGs/MoonSVG";
import SunSVG from "@components/SVGs/SunSVG";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="toggle theme"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <SunSVG />
      <MoonSVG />
    </button>
  );
};

export default ThemeSwitch;
