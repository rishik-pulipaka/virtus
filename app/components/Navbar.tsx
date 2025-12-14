"use client";

import Link from "next/link";
import { items } from "../data/navigation";

export default function Navbar() {
  return (
    <>
      {/* === DESKTOP SIDEBAR (xl+) === */}
      <aside className="hidden xl:flex flex-col justify-between 
                        w-56 min-h-screen p-6 border-r border-gray-200">

        {/* Logo + Nav */}
        <div className="flex flex-col gap-8">
          <Link href="/" className="text-xl font-light tracking-wide">
            virtus
          </Link>

          <nav className="flex flex-col gap-4 text-sm">
            {items.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* === MOBILE/TABLET TOP NAV (< xl) === */}
      <header className="xl:hidden w-full border-b border-gray-200 px-6 py-4 
                         flex items-center justify-between bg-white">

        <Link href="/" className="text-xl font-light tracking-wide">
          virtus
        </Link>

        <nav className="flex items-center gap-8 text-sm">
          {items.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
