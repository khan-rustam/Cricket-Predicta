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
  Users,
  Star,
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
  const [activeTab, setActiveTab] = useState<number>(0);
  const [loadVideo, setLoadVideo] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Cricket experts/analysts
  const analysts = [
    { id: 1, image: "/Guest/Guest-1.png" },
    { id: 2, image: "/Guest/Guest-2.png" },
    { id: 3, image: "/Guest/Guest-3.png" },
    { id: 4, image: "/Guest/Guest-4.png" },
    { id: 5, image: "/Guest/Guest-5.png" },
    { id: 6, image: "/Guest/Guest-6.png" },
  ];

  // Set video playback speed when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Set speed to 0.75x (75% of normal speed)
    }
  }, []);

  // Auto-rotate through analysts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % analysts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [analysts.length]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }
    return () => observer.disconnect();
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
      <section
        id="home"
        className="relative w-full h-[50vh] sm:h-[91vh] overflow-hidden"
        ref={videoContainerRef}
      >
        {/* Video container with fixed aspect ratio to ensure full visibility */}
        <div className="pt- absolute inset-0 w-full h-full flex items-center justify-center bg-black">
          <div className="relative w-full h-full">
            {/* Show video on md+ screens, image on mobile */}
            {loadVideo ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster={logo.src}
                preload="none"
                className="block absolute inset-0 w-full h-full object-cover max-h-[320px] md:max-h-full mx-auto my-auto"
              >
                <source src="/Home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={logo.src}
                alt="Cricket Predicta Logo"
                fill
                className="object-cover"
                loading="lazy"
              />
            )}
          </div>

          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Video controls */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-30 p-3 md:p-4 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-primary/80 transition-all duration-300"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX size={20} className="md:h-6 md:w-6" />
          ) : (
            <Volume2 size={20} className="md:h-6 md:w-6" />
          )}
        </button>

        {/* Trusted by - moved to bottom of screen */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-4 md:py-6 bg-black/30 backdrop-blur-sm z-20">
          <div className="container mx-auto">
            {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between"> */}
            <p className="text-xs md:text-sm text-gray-400 mb-2 sm:mb-0 text-center sm:text-left">
              TRUSTED BY CRICKET ENTHUSIASTS WORLDWIDE
            </p>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Advanced Cricket Analytics section */}
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
          <div className="bg-background/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-border/50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-primary/10 p-3 md:p-4 rounded-full transition-all duration-300 group-hover:bg-primary">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary transition-all duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-all duration-300">
                Real-time Analytics
              </h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Get advanced match predictions and insights as events unfold, with
              our AI-powered analytics platform.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-border/50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-primary/10 p-3 md:p-4 rounded-full transition-all duration-300 group-hover:bg-primary">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary transition-all duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-all duration-300">
                Expert Analysis
              </h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Professional insights from cricket veterans and analysts, helping
              you understand the game better.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-border/50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-primary/10 p-3 md:p-4 rounded-full transition-all duration-300 group-hover:bg-primary">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary transition-all duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-all duration-300">
                Live Updates
              </h3>
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
