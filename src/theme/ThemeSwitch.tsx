"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonSVG from "@components/SVGs/MoonSVG";
import SunSVG from "@components/SVGs/SunSVG";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {mounted ? (
        <>
          <SunSVG />
          <MoonSVG />
        </>
      ) : (
        <SunSVG className="opacity-0 dark:opacity-0 !block" />
      )}
    </button>
  );
};

export default ThemeSwitch;
