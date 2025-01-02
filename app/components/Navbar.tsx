"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBackground = isScrolled
    ? "bg-gray-900/90 backdrop-blur-md" // Dark and opaque when scrolled
    : "bg-gray-800/50 backdrop-blur-sm"; // Semi-transparent when at the top

  const navHeight = isScrolled ? "h-20" : "h-24";

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-10 ${navHeight} ${navBackground} transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image
          src="/landing/logo_white_trans.png"
          alt="FrameWise Logo"
          width={isScrolled ? 140 : 180}
          height={isScrolled ? 140 : 180}
          priority
          className="object-contain transition-all duration-300"
        />
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex space-x-8">
        <a href="#how-it-works" className="text-white text-lg font-semibold hover:text-yellow-400">
          How It Works
        </a>
        <a href="#why-this-matters" className="text-white text-lg font-semibold hover:text-yellow-400">
          Why This Matters
        </a>
        <a href="#features" className="text-white text-lg font-semibold hover:text-yellow-400">
          Features
        </a>
        <a href="#blog" className="text-white text-lg font-semibold hover:text-yellow-400">
          Blog
        </a>
        <a href="#faq" className="text-white text-lg font-semibold hover:text-yellow-400">
          FAQ
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white cursor-pointer text-lg">
            ☰
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 text-white p-2 rounded-md shadow-lg">
            <DropdownMenuItem asChild>
              <a href="#how-it-works" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                How It Works
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#why-this-matters" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                Why This Matters
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#features" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                Features
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#blog" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                Blog
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#faq" className="block px-4 py-2 hover:bg-gray-700 rounded-md">
                FAQ
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}