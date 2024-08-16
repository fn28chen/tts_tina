"use client"
import NavBar from "@/components/global/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className={`flex flex-col min-h-screen`}>
      <NavBar className="fixed py-4 z-40" />
      {children}
    </div>
  );
}
