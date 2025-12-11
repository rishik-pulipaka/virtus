import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-white text-black flex">
        
        {/* Navbar Component */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </body>
    </html>
  );
}