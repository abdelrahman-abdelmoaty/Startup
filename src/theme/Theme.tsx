"use client";
import { ThemeProvider } from "next-themes";
export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      {children}
    </ThemeProvider>
  );
}
