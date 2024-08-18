import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";

interface DropdownProps {
  triggerButton: string;
  section: {
    title: string;
    items: {
      icon: any;
      title: string;
    }[];
  }[];
}

export default function Dropdown({ triggerButton, section }: DropdownProps) {
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline">{triggerButton}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        {section.map((item) => (
          <DropdownMenuItem key={item.title}>
            <span>{item.title}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
    </DropdownMenuContent>
  </DropdownMenu>;
}
