import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import axios from "axios";

import { section } from "@/lib/constant";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

export default function UserNavbar() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  useEffect(() => {
    if (isLoggingOut) {
      axios
        .get("https://dev.mys.tinasoft.com.vn/api/v1/auth/logout-once", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then(() => {
          Cookies.remove("token");
          setTimeout(() => {
            router.push("/about");
          }, 100);
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    }
  }, [isLoggingOut, router]);

  const handleLogout = () => {
    setIsLoggingOut(true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">User</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {section.map((sectionItem) => (
            <div key={sectionItem.title}>
              <h3>{sectionItem.title}</h3>
              {sectionItem.items.map((item) => (
                <DropdownMenuItem key={item.title}>
                  <item.icon className="w-4 h-4 mx-1" />
                  {item.title}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
            </div>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <Link href="/about" className="flex flex-col">
            <DropdownMenuItem onClick={handleLogout}>
              <p>Sign out</p>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
