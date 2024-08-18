import { cn } from "@/lib/utils";
import React, { useContext } from "react";
import ThemeToggle from "../ui/theme-toggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserContext } from "@/context/user-context";

import { CreditCard, Keyboard, Settings, User } from "lucide-react";
import Dropdown from "../ui/dropdown";
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
interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const { user, setUser } = useContext(UserContext);
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
        {user ? (
          <>
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
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Register</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
