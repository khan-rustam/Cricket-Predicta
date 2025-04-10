"use client"

import { Tv } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Broadcast section showing where Cricket Predicta will be on air
 */
export function BroadcastSection() {
  const channels = [
    {
      name: "News X",
      logo: "/Brands/News X.png",
      hasLogo: true,
    },
    {
      name: "India News",
      logo: "/Brands/India News.png",
      hasLogo: true,
    },
    {
      name: "Saam TV",
      logo: "/Brands/Saam TV.png",
      hasLogo: true,
    },
    {
      name: "APN News",
      logo: "/Brands/APN News.png",
      hasLogo: true,
    },
    {
      name: "News Time Bangla",
      logo: "",
      hasLogo: false,
    },
    {
      name: "Kolkata TV",
      logo: "/Brands/Kolkata TV.jpg",
      hasLogo: true,
    },
    {
      name: "Protidin Times",
      logo: "",
      hasLogo: false,
    },
    {
      name: "Living India News",
      logo: "/Brands/Living India News.png",
      hasLogo: true,
    },
    {
      name: "MH one news",
      logo: "",
      hasLogo: false,
    },
    {
      name: "Bharat 24",
      logo: "",
      hasLogo: false,
    },
    {
      name: "ANB News",
      logo: "",
      hasLogo: false,
    },
    {
      name: "TV 27 News",
      logo: "",
      hasLogo: false,
    },
    {
      name: "India News Rajasthan",
      logo: "/Brands/India News Rajasthan.jpg",
      hasLogo: true,
    },
    {
      name: "India News Gujarat",
      logo: "/Brands/India News Gujarat.jpg",
      hasLogo: true,
    },
    {
      name: "India News J&K",
      logo: "/Brands/India News J&K.jpg",
      hasLogo: true,
    },
    {
      name: "India News Haryana",
      logo: "/Brands/India News Haryana.jpg",
      hasLogo: true,
    },
    {
      name: "India News Punjab",
      logo: "/Brands/India News Punjab.jpg",
      hasLogo: true,
    },
  ];

  // Animation for channel cards
  const [visibleChannels, setVisibleChannels] = useState<boolean[]>([]);

  useEffect(() => {
    // Staggered animation effect with a small delay between each card
    const showChannels = async () => {
      const newVisibleChannels = [...visibleChannels];
      for (let i = 0; i < channels.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        newVisibleChannels[i] = true;
        setVisibleChannels([...newVisibleChannels]);
      }
    };

    showChannels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="broadcast" className="py-16 md:py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#f78000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
              <Tv className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                BROADCAST CHANNELS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Where will it be On <span className="text-primary">Air</span>?
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Catch the action across our broadcast partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {channels.map((channel, index) => (
              <div 
                key={index} 
                className={`relative group overflow-hidden transition-all duration-500 ${
                  visibleChannels[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 hover:scale-105 flex flex-col h-full">
                  {/* Logo area */}
                  <div className="flex-1 flex items-center justify-center py-3 px-2 rounded-lg">
                    {channel.hasLogo ? (
                      <div className="relative w-full h-24 flex items-center justify-center">
                        <Image
                          src={channel.logo}
                          alt={`${channel.name} logo`}
                          width={180}
                          height={80}
                          className="object-contain max-h-24"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-24 flex flex-col items-center justify-center">
                        <Tv className="h-8 w-8 text-primary/40 mb-2" />
                        <span className="text-xs text-muted-foreground">Logo coming soon</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Channel name */}
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-medium">{channel.name}</h3>
                  </div>
                </div>
                {/* Decorative effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/30 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-5 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Want to partner with us?
              </h3>
              <p className="text-muted-foreground mb-4">
                Join our network of broadcast partners and reach millions of
                cricket enthusiasts
              </p>
              <a
                href="#requirements"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                View Our Requirements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
