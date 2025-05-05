import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@satyam95/donutui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
