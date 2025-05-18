"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * Header component with responsive navigation
 * Includes logo, navigation links, theme toggle, and scroll animation
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out py-2 bg-background/85 backdrop-blur-2xl border-b border-border/40 shadow-lg`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative overflow-hidden rounded-full transition-all duration-500 hover:shadow-primary/30 hover:shadow-lg">
            <Image
              src="/images/logo.png"
              alt="Cricket Predicta Logo"
              width={55}
              height={55}
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group">
            <span className="text-2xl md:text-3xl font-black tracking-tight flex items-center">
              <span
                className="relative z-10 tracking-tighter mr-0.5 uppercase text-shadow font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-blue-500 dark:from-primary-100 dark:via-primary-200 dark:to-primary-300"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.15)" }}
              >
                Cricket
              </span>
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b00] via-[#ff9500] to-[#3898FF] font-extrabold tracking-tight uppercase font- ml-[-2px]">
                Predicta
              </span>
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full animate-pulse"></span>
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500 to-primary"></div>
            {/* Tech lines decoration */}
            <div className="absolute -right-3 top-1/2 w-3 h-[1px] bg-blue-500/50"></div>
            <div className="absolute -left-3 top-1/2 w-3 h-[1px] bg-primary/50"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            href="#home"
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden uppercase font-['Rajdhani',_sans-serif]"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link
            href="#about"
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden uppercase font-['Rajdhani',_sans-serif]"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link
            href="#broadcast"
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden uppercase font-['Rajdhani',_sans-serif]"
          >
            Past Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link
            href="#gallery"
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden uppercase font-['Rajdhani',_sans-serif]"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link
            href="#team"
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden uppercase font-['Rajdhani',_sans-serif]"
          >
            Our Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden uppercase font-['Rajdhani',_sans-serif]"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Contact Us Button - Desktop */}
          <Button
            size="sm"
            className="hidden md:inline-flex relative overflow-hidden group bg-gradient-to-r from-blue-600 to-primary hover:from-blue-700 hover:to-primary/90 text-white transition-all duration-300 font-medium tracking-wide uppercase font-['Rajdhani',_sans-serif] border border-blue-400/20"
            onClick={() => (window.location.href = "#contact")}
          >
            <span className="relative z-10">CONTACT US</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Button>

          <div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 transition-colors relative overflow-hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 relative z-10" />
            ) : (
              <Menu className="h-5 w-5 relative z-10" />
            )}
            <span className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-background/95 backdrop-blur-md border-t border-border/20 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center uppercase font-['Rajdhani',_sans-serif]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Home
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center uppercase font-['Rajdhani',_sans-serif]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              ABOUT US
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center uppercase font-['Rajdhani',_sans-serif]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              PAST PROJECTS
            </Link>
            <Link
              href="#gallery"
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center uppercase font-['Rajdhani',_sans-serif]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              GALLERY
            </Link>
            <Link
              href="#team"
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center uppercase font-['Rajdhani',_sans-serif]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              OUR TEAM
            </Link>
            <Link
              href="#press"
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center uppercase font-['Rajdhani',_sans-serif]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              PRESS RELEASE
            </Link>
            <Link
              href="#broadcast"
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center uppercase font-['Rajdhani',_sans-serif]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Broadcast
            </Link>
            {/* Mobile Contact Button (alternative placement) */}
            <Button
              className="mt-2 w-full bg-gradient-to-r from-blue-600 to-primary hover:from-blue-700 hover:to-primary/90 text-white relative overflow-hidden group font-medium tracking-wide uppercase font-['Rajdhani',_sans-serif] border border-blue-400/20"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = "#contact";
              }}
            >
              <span className="relative z-10">CONTACT US</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
