"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

/**
 * Header component with responsive navigation
 * Includes logo, navigation links, theme toggle, and scroll animation
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "py-2 bg-background/85 backdrop-blur-md border-b border-border/40 shadow-lg" 
          : "py-5 bg-gradient-to-r from-background/80 via-background/90 to-background/80 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <div className={`flex items-center gap-3 transition-all duration-300 ${scrolled ? "scale-90" : ""}`}>
          <div className="relative overflow-hidden rounded-full transition-all duration-500 hover:shadow-primary/30 hover:shadow-lg">
            <Image 
              src="/images/logo.png" 
              alt="Cricket Predicta Logo" 
              width={scrolled ? 55 : 70} 
              height={scrolled ? 55 : 70} 
              className="object-contain transition-all duration-300"
              priority
            />
            <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative">
            <span className={`font-black tracking-tight transition-all duration-300 inline-block ${
              scrolled 
                ? "text-2xl md:text-3xl" 
                : "text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-purple-600 dark:from-blue-400 dark:via-primary dark:to-purple-400"
            }`}>
              Cricket 
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-500 dark:from-primary dark:to-yellow-400 font-black">
                Predicta
              </span>
            </span>
            {!scrolled && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
            )}
            <div className={`absolute -inset-1 bg-primary/5 blur-lg rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 ${scrolled ? 'hidden' : ''}`}></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link 
            href="#home" 
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link 
            href="#about" 
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden"
          >
            About 
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link 
            href="#broadcast" 
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden"
          >
            Past Projects 
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link 
            href="#gallery" 
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link 
            href="#team" 
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden"
          >
            Our Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
          <Link 
            href="#contact" 
            className="text-sm lg:text-base font-medium tracking-wide hover:text-primary transition-colors relative group overflow-hidden"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute top-0 right-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full delay-75"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Contact Us Button - Desktop */}
          <Button
            size={scrolled ? "sm" : "default"}
            className={`hidden md:inline-flex relative overflow-hidden group ${
              scrolled 
                ? "bg-primary hover:bg-primary/90 text-white scale-90" 
                : "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-sm hover:shadow"
            } transition-all duration-300 font-medium tracking-wide`}
            onClick={() => window.location.href = "#contact"}
          >
            <span className="relative z-10">CONTACT US</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Button>

          <div className={`transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}`}>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-primary/10 transition-colors relative overflow-hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 relative z-10" /> : <Menu className="h-5 w-5 relative z-10" />}
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
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              ABOUT US
            </Link>
            <Link 
              href="#projects" 
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              PAST PROJECTS
            </Link>
            <Link 
              href="#gallery" 
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              GALLERY
            </Link>
            <Link 
              href="#team" 
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              OUR TEAM
            </Link>
            <Link 
              href="#press" 
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              PRESS RELEASE
            </Link>
            <Link 
              href="#broadcast" 
              className="text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 bg-primary/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Broadcast
            </Link>
            {/* Mobile Contact Button (alternative placement) */}
            <Button 
              className="mt-2 w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white relative overflow-hidden group font-medium tracking-wide"
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
  )
}
