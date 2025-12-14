import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-white text-black">
        <Navbar />

        {/* IMPORTANT: NO padding, NO centering, NO max-width */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
