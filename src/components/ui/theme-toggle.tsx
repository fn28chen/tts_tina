"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { FiSun, FiMoon } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}
const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {mounted === true && (
        <Button
            variant={`default`}
            size={`default`}
          className="
            flex w-full items-center justify-center 
            rounded shadow 
            hover-scale
            bg-zinc-200 hover:bg-zinc-200 
            dark:bg-zinc-700 dark:hover:bg-zinc-700"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div className="p-2 text-zinc-800 dark:text-zinc-200">
            {theme === "dark" ? <FiMoon /> : <FiSun />}
          </div>
        </Button>
      )}
    </div>
  );
};

export default ThemeToggle;
