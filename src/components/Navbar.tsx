"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#products" },
    { name: "Contact us", href: "#contact" },
  ];

  // Adapt style for subpages where transparent background with white text would be invisible
  const showScrolledState = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showScrolledState
          ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-zinc-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo showScrolledState={showScrolledState} />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div 
              className={`px-8 py-2.5 rounded-full transition-all duration-300 ${
                showScrolledState 
                  ? "bg-zinc-100/80 backdrop-blur-sm" 
                  : "bg-white/10 backdrop-blur-md border border-white/20"
              }`}
            >
              <div className="flex items-baseline space-x-10">
                {navLinks.map((link) => {
                  // If on a subpage, relative anchors like "#about" need to link to "/#about"
                  const targetHref = isHome 
                    ? link.href 
                    : (link.href.startsWith("#") ? `/${link.href}` : link.href);

                  return (
                    <Link
                      key={link.name}
                      href={targetHref}
                      className={`text-sm font-bold transition-colors duration-300 ${
                        showScrolledState 
                          ? "text-zinc-700 hover:text-electric" 
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Request Button */}
          <div>
            <Link
              href={isHome ? "#contact" : "/#contact"}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                showScrolledState
                  ? "bg-electric text-white hover:brightness-110 shadow-lg shadow-electric/20"
                  : "bg-white text-dark hover:bg-zinc-50 shadow-sm"
              }`}
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
