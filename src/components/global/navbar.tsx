import { cn } from "@/lib/utils";
import React from "react";
import ThemeToggle from "../ui/theme-toggle";
import { Button } from "../ui/button";
import Link from "next/link";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div
      className={cn(
        "flex flex-start items-center justify-between w-full h-16 px-2 bg-zinc-100 dark:bg-zinc-800",
        className
      )}
    >
      <h1 className="text-zinc-900 dark:text-zinc-100 font-bold">
        Tinamys&apos;s Logo
      </h1>
      <div className="flex flex-row gap-2">
        <Link href="/auth/login">
          <Button variant="default" className="px-2">Login</Button>
        </Link>
        <Link href="/auth/register">
          <Button variant="default" className="px-2">Register</Button>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
