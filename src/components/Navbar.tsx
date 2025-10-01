"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">FashionPro</Link>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Shop</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
          <li><Link href="/">Cart</Link></li>
        </ul>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-white text-gray-700 px-4 py-4 space-y-4 font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Shop</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
          <li><Link href="/">Cart</Link></li>
        </ul>
      )}
    </nav>
  );
}
