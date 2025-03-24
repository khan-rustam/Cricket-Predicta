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
          : "py-5 bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <div className={`flex items-center gap-3 transition-all duration-300 ${scrolled ? "scale-90" : ""}`}>
          <div className="relative overflow-hidden rounded-full transition-all duration-500 hover:shadow-primary/30 hover:shadow-lg">
            <Image 
              src="/images/logo.png" 
              alt="Cricket Predicta Logo" 
              width={scrolled ? 40 : 50} 
              height={scrolled ? 40 : 50} 
              className="object-contain transition-all duration-300"
            />
          </div>
          <span className={`font-bold transition-all duration-300 ${
            scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          }`}>Cricket Predicta</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link 
            href="#home" 
            className="text-base lg:text-lg font-medium hover:text-primary transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#about" 
            className="text-base lg:text-lg font-medium hover:text-primary transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#team" 
            className="text-base lg:text-lg font-medium hover:text-primary transition-colors relative group"
          >
            Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#broadcast" 
            className="text-base lg:text-lg font-medium hover:text-primary transition-colors relative group"
          >
            Broadcast
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="#requirements" 
            className="text-base lg:text-lg font-medium hover:text-primary transition-colors relative group"
          >
            Requirements
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className={`transition-all duration-300 ${scrolled ? "scale-90" : ""}`}>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-background/90 backdrop-blur-md border-t border-border/20 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#home" 
              className="text-lg hover:text-primary transition-all duration-300 hover:translate-x-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-lg hover:text-primary transition-all duration-300 hover:translate-x-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#team" 
              className="text-lg hover:text-primary transition-all duration-300 hover:translate-x-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              href="#broadcast" 
              className="text-lg hover:text-primary transition-all duration-300 hover:translate-x-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Broadcast
            </Link>
            <Link 
              href="#requirements" 
              className="text-lg hover:text-primary transition-all duration-300 hover:translate-x-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Requirements
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

