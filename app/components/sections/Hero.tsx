"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Check,
  ChevronRight,
  TrendingUp,
  Shield,
  Zap,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import logo from "@/public/images/logo.png";
import { useState, useRef, useEffect } from "react";

/**
 * Hero section of the landing page
 * Features an auto-playing promotional video and content sections
 */
export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set video playback speed when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Set speed to 0.75x (75% of normal speed)
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Full-width video hero section */}
      <section id="home" className="relative w-full h-[50vh] sm:h-[90vh] md:h-[100vh] overflow-hidden">
        {/* Video container with fixed aspect ratio to ensure full visibility */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
          <div className="relative w-full h-full">
            {/* Show video on md+ screens, image on mobile */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster={logo.src}
              preload="metadata"
              className="hidden md:block absolute inset-0 w-full h-full object-cover md:object-cover lg:object-cover xl:object-cover"
            >
              <source src="/Home.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Static image for mobile */}
            <img
              src={logo.src}
              alt="Cricket Predicta Promo"
              className="block md:hidden absolute inset-0 w-full h-full object-contain bg-black"
              style={{ aspectRatio: '16/9', objectFit: 'contain' }}
            />
          </div>
          
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Content overlay */}
        {/* <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-full md:max-w-4xl"> */}
            {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold animate-fade-in mb-4 sm:mb-6 md:mb-8 text-white">
              Cricket{" "}
              <span className="text-primary animate-text-glow">Predicta</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 animate-slide-up max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-6 sm:mb-8 md:mb-10">
              Your ultimate destination for cricket predictions, analysis, and
              insights powered by advanced statistics.
            </p> */}

            {/* Stats Display - smaller and more transparent */}
            {/* <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
              <div className="bg-black/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-white/10 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0 md:mb-1">100+</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">Matches Analyzed</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-white/10 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0 md:mb-1">10k+</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">Data Points</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-white/10 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0 md:mb-1">4.8</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">User Rating</p>
              </div>
            </div> */}

            {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 animate-fade-in-delay-2">
              <Button
                size="default"
                className="rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg group bg-primary hover:bg-primary/90 w-full sm:w-auto"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="default"
                className="rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto mt-2 sm:mt-0"
              >
                Learn More
              </Button>
            </div>
          </div> */}
        {/* </div> */}

        {/* Video controls */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-30 p-3 md:p-4 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-primary/80 transition-all duration-300"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={20} className="md:h-6 md:w-6" /> : <Volume2 size={20} className="md:h-6 md:w-6" />}
        </button>

        {/* Trusted by - moved to bottom of screen */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-4 md:py-6 bg-black/30 backdrop-blur-sm z-20">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs md:text-sm text-gray-400 mb-2 sm:mb-0 text-center sm:text-left">
                TRUSTED BY CRICKET ENTHUSIASTS WORLDWIDE
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 md:gap-8 items-center">
                <div className="font-bold text-sm md:text-base lg:text-lg text-white/80">ICC</div>
                <div className="font-bold text-sm md:text-base lg:text-lg text-white/80">
                  ESPN
                </div>
                <div className="font-bold text-sm md:text-base lg:text-lg text-white/80">
                  CA
                </div>
                <div className="font-bold text-sm md:text-base lg:text-lg text-white/80">BCCI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section - now a separate section for better content separation */}
      <section className="container mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Advanced Cricket <span className="text-primary">Analytics</span>
          </h2>
          <div className="h-1 w-16 sm:w-20 md:w-24 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Powered by sophisticated algorithms and deep cricket expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-background/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-primary/10 p-3 md:p-4 rounded-full">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Real-time Analytics</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Get advanced match predictions and insights as events unfold, with
              our AI-powered analytics platform.
            </p>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-primary/10 p-3 md:p-4 rounded-full">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Expert Analysis</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Professional insights from cricket veterans and analysts, helping
              you understand the game better.
            </p>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-primary/10 p-3 md:p-4 rounded-full">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Live Updates</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Stay updated with real-time scores and match developments from
              cricket matches worldwide.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
