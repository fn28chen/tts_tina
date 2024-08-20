"use client";

import AboutNavbar from "@/components/global/about-navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      router.push("/about");
    }
  }, [router]);

  return (
    <div className={`flex flex-col min-h-screen`}>
      <AboutNavbar className="fixed py-4 z-40" />
      {children}
    </div>
  );
}