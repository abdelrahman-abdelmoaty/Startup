"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonSVG from "../svgs/MoonSVG";
import SunSVG from "../svgs/SunSVG";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
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
