"use client";
import NavBar from "@/components/global/navbar";
import { Sidebar } from "@/components/global/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  return (
    <div className="flex flex-col min-h-full">
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <div>
          <NavBar />
        </div>
      </main>
    </div>
  );
}
