"use client";

import { Button } from "@/components/ui/button";
import { Globe, Tv, BarChart3 } from "lucide-react";
import { useCountUp } from "@/app/hooks/use-count-up";
import { useState, useEffect, useRef } from "react";

/**
 * About section describing the Cricket Predicta platform
 * Includes descriptive content and statistics
 */
export function AboutSection() {
  // Count up hooks for statistics
  const viewersCount = useCountUp({
    end: 250,
    duration: 2500,
    suffix: "M+",
  });

  const accuracyCount = useCountUp({
    end: 98,
    duration: 2000,
    suffix: "%",
    delay: 300,
  });

  // Animation for stats container
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsStatsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = statsContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 -z-10"></div>
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(247,128,0,0.08),transparent_75%)]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden -z-10 opacity-10">
        <div className="absolute -bottom-8 -left-8 w-64 h-64 border-4 border-dashed border-primary/30 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border-2 border-primary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-8 relative">
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl opacity-5 font-bold">
            CRICKET PREDICTA
          </span>
          <div className="inline-block mb-3">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              ABOUT US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            What is Cricket <span className="text-primary">Predicta</span>?
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how we're revolutionizing cricket analytics across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 relative">
            {/* Decorative quote mark */}
            <span className="absolute -top-10 -left-8 text-8xl text-primary/10 font-serif hidden md:block">
              "
            </span>

            <div className="transition-all duration-500 hover:translate-y-[-4px]">
              <p className="text-lg leading-relaxed">
                Cricket Predicta is{" "}
                <span className="font-medium text-primary">
                  Asia's most widely distributed TV show
                </span>{" "}
                on Satellite Channels redefining sports analytics on television.
                Broadcast across ten states of India in seven different
                languages—including Punjabi, Gujarati, Rajasthani, Marathi, and
                Haryanvi—it ensures that viewers nationwide can access
                data-driven cricket insights, no matter their language or
                location.
              </p>
            </div>

            <div className="transition-all duration-500 hover:translate-y-[-4px] bg-background/30 px-6 py-3 rounded-xl border-l-4 border-primary">
              <p className="text-lg leading-relaxed">
                The show offers real-time statistics, predictive modeling, and
                player performance analytics, all powered by advanced data
                science and machine learning.
              </p>
            </div>

            <div className="transition-all duration-500 hover:translate-y-[-4px]">
              <p className="text-lg leading-relaxed">
                Catering to team managers, coaches, analysts, and passionate
                fans, Cricket Predicta reveals game trends, player potential,
                and strategic insights, helping teams make informed decisions on
                and off the field. Beyond its satellite distribution, the show
                also airs on a premium Indian English news channel, reaching an
                elite viewership and adding a layer of credibility.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-transparent px-6 py-2 rounded-xl transition-all duration-500 hover:shadow-lg">
              <p className="text-lg leading-relaxed font-medium text-foreground">
                Cricket Predicta stands as an unmatched analytics-driven
                platform, revolutionizing cricket viewing with insights for
                every fan across India.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary hover:-translate-y-2 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2.5 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
                    <Globe className="h-5 w-5 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold transition-all duration-300 group-hover:text-primary">10 States</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Broadcast across India, reaching millions of viewers daily
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full mt-3 transform origin-left transition-all duration-500 scale-x-75 group-hover:scale-x-100"></div>
              </div>

              <div className="bg-background/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary hover:-translate-y-2 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2.5 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
                    <Tv className="h-5 w-5 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold transition-all duration-300 group-hover:text-primary">7 Languages</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Content available in multiple regional languages
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full mt-3 transform origin-left transition-all duration-500 scale-x-75 group-hover:scale-x-100"></div>
              </div>

              <div className="bg-background/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary hover:-translate-y-2 md:col-span-2 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2.5 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
                    <BarChart3 className="h-5 w-5 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold transition-all duration-300 group-hover:text-primary">Advanced Analytics</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Powered by data science and machine learning to provide
                  unmatched cricket insights
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full mt-3 transform origin-left transition-all duration-500 scale-x-75 group-hover:scale-x-100"></div>
              </div>
            </div>

            {/* Stats counter */}
            <div
              ref={statsContainerRef}
              className={`bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg mt-6 relative overflow-hidden transition-all duration-700 ${
                isStatsVisible
                  ? "transform-none opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full filter blur-xl"></div>
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div
                  className={`transition-all duration-500 delay-100 ${
                    isStatsVisible
                      ? "transform-none opacity-100"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  <p
                    ref={
                      viewersCount.ref as React.RefObject<HTMLParagraphElement>
                    }
                    className="text-3xl font-bold text-primary"
                  >
                    {viewersCount.displayValue}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monthly Viewers
                  </p>
                </div>
                <div
                  className={`transition-all duration-500 delay-300 ${
                    isStatsVisible
                      ? "transform-none opacity-100"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  <p
                    ref={
                      accuracyCount.ref as React.RefObject<HTMLParagraphElement>
                    }
                    className="text-3xl font-bold text-primary"
                  >
                    {accuracyCount.displayValue}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Prediction Accuracy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
