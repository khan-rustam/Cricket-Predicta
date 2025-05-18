"use client";

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
      logo: "/Channel/News X Logo .png",
      hasLogo: true,
    },
    {
      name: "India News",
      logo: "/Channel/India News Logo.png",
      hasLogo: true,
    },
    {
      name: "Saam TV",
      logo: "/Channel/SaamTV Logo.png",
      hasLogo: true,
    },
    {
      name: "APN News",
      logo: "/Channel/APN News Logo.png",
      hasLogo: true,
    },
    {
      name: "News Time Bangla",
      logo: "/Channel/News Time Bangla Logo.png",
      hasLogo: true,
    },
    {
      name: "Kolkata TV",
      logo: "/Channel/Kolkata TV Logo.png",
      hasLogo: true,
    },
    {
      name: "Protidin Times",
      logo: "/Channel/Pratidin Time Logo.png",
      hasLogo: true,
    },
    {
      name: "Living India News",
      logo: "/Channel/Living India News Logo.jpeg",
      hasLogo: true,
    },
    {
      name: "MH one news",
      logo: "/Channel/MH One News Logo.jpg",
      hasLogo: true,
    },
    {
      name: "Bharat 24",
      logo: "/Channel/Bharat News Logo.png",
      hasLogo: true,
    },
    {
      name: "ANB News",
      logo: "/Channel/ANB News Logo.png",
      hasLogo: true,
    },
    {
      name: "TV 27 News",
      logo: "/Channel/TV27 News Logo.png",
      hasLogo: true,
    },
    {
      name: "India News Rajasthan",
      logo: "/Channel/India News Rajasthan Logo.png",
      hasLogo: true,
    },
    {
      name: "India News Gujarat",
      logo: "/Channel/India News Gujarat Logo.png",
      hasLogo: true,
    },
    {
      name: "India News Haryana",
      logo: "/Channel/India News Harayana Logo.png",
      hasLogo: true,
    },
    {
      name: "India News Punjab",
      logo: "/Channel/India News Punjab Logo.png",
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
                className={`relative group overflow-hidden rounded-xl shadow-sm transition-all duration-500 ${
                  visibleChannels[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-white dark:bg-slate-800 p-5 h-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col items-center justify-center">
                  {/* Logo area */}
                  {channel.hasLogo ? (
                    <div className="relative w-full h-[100px] flex items-center justify-center mb-3">
                      <Image
                        src={channel.logo}
                        alt={`${channel.name} logo`}
                        width={180}
                        height={100}
                        className="object-contain max-h-[100px]"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-[100px] flex flex-col items-center justify-center mb-3">
                      <Tv className="h-12 w-12 text-primary/40 mb-2" />
                      <span className="text-xs text-muted-foreground">
                        Logo coming soon
                      </span>
                    </div>
                  )}

                  {/* Channel name */}
                  <h3 className="text-lg font-medium text-center">
                    {channel.name}
                  </h3>
                </div>
                {/* Decorative effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-primary to-primary/30 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
