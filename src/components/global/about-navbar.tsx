"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { section } from "@/lib/constant";
import axios from "axios";
import Cookies from "js-cookie";

interface NavBarProps {
  className?: string;
}

const AboutNavbar = ({ className }: NavBarProps) => {
  const [user, setUser] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    axios
      .get("https://dev.mys.tinasoft.com.vn/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={cn(
        "flex flex-start items-center justify-between w-full h-16 px-2 bg-zinc-100 dark:bg-zinc-800",
        className
      )}
    >
      <h1 className="pl-4 text-zinc-900 dark:text-zinc-100 font-bold">
        Tinamys&apos;s Logo
      </h1>
      <div className="flex flex-row gap-2">
        <>
          <Link href="/auth/login">
            <Button
              variant="default"
              className="bg-white text-black dark:bg-neutral-600 dark:text-white hover-scale"
            >
              Trải nghiệm ngay
            </Button>
          </Link>
        </>
      </div>
    </div>
  );
};

export default AboutNavbar;
