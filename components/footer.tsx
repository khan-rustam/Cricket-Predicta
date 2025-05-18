"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpCircle,
  Linkedin,
  Youtube,
} from "lucide-react";

/**
 * Footer component with responsive layout
 * Includes links, contact info, social media icons and logo
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-primary/30 pb-2 inline-block">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#home"
                className="hover:text-primary transition-colors hover:translate-x-1 duration-200 flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block"></span>
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-primary transition-colors hover:translate-x-1 duration-200 flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block"></span>
                About Us
              </Link>
              <Link
                href="#team"
                className="hover:text-primary transition-colors hover:translate-x-1 duration-200 flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block"></span>
                Team
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition-colors hover:translate-x-1 duration-200 flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block"></span>
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition-colors hover:translate-x-1 duration-200 flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block"></span>
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-primary/30 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3 text-slate-300">
              <p className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary/80 mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary/80 mt-0.5 shrink-0" />
                <span>info@cricketpredicta.com</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary/80 mt-0.5 shrink-0" />
                <span>
                  123 Cricket Stadium Road, Mumbai, Maharashtra, India - 400001
                </span>
              </p>
            </div>
          </div>

          {/* Broadcast Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-primary/30 pb-2 inline-block">
              Where to Watch
            </h3>
            <div className="space-y-3 text-slate-300">
              <p>Broadcasting in 10 states across India</p>
              <p>Available in 7 regional languages</p>
              <div className="pt-2">
                <h4 className="font-medium text-white">Broadcast Partners:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                    Star Sports
                  </span>
                  <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                    DD Sports
                  </span>
                  <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                    Sony Ten
                  </span>
                  <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                    Regional Networks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-primary/30 pb-2 inline-block">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/18fPALuu7u/"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/cricpredicta"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/cricketpredicta"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@cricketpredicta"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-3">
              <p className="mb-3">Subscribe to our newsletter:</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-slate-800 rounded-l-md border-r-0 border border-slate-700 flex-grow focus:outline-none focus:ring-1 focus:ring-primary text-white"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-center">
        <button
          onClick={scrollToTop}
          className="bg-slate-800 hover:bg-slate-700 transition-colors rounded-full p-2 transform -translate-y-1/2 group"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950 py-6">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Cricket Predicta. All rights reserved.
            </p>

            <div className="flex flex-col items-center">
              <Image
                src="/images/logo.png"
                alt="Cricket Predicta Logo"
                width={60}
                height={60}
                className="object-contain mb-2"
              />
              <p className="text-primary font-bold">Cricket Predicta</p>
            </div>

            <div className="text-slate-400 text-sm text-center md:text-right">
              <p>Asia's #1 Cricket Analytics Platform</p>
              <p>Broadcasting across 10 states in 7 languages</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
