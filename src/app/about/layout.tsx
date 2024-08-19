"use client"

import AboutNavbar from "@/components/global/about-navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className={`flex flex-col min-h-screen`}>
      <AboutNavbar className="fixed py-4 z-40" />
      {children}
    </div>
  );
}
