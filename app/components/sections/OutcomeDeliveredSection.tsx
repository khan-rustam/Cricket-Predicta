"use client";

import { BarChart3, Users, MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function OutcomeDeliveredSection() {
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
    <section
      id="outcome"
      className="py-24 relative bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-4 transform hover:scale-105 transition-transform duration-300">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              OUTCOME DELIVERED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Impact & Results{" "}
            <span className="text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary/50 after:rounded-full">
              Achieved
            </span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 transform transition-all duration-500 hover:w-32"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See how Cricket Predicta is making a difference in the world of
            cricket analytics and broadcasting.
          </p>
        </div>

        {/* Key Metrics */}
        <div
          ref={statsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div
            className={`bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10 transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-xl group ${
              isStatsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-primary/10 p-3 rounded-full mb-3 transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
              <Users className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-all duration-300">
              250M+
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Audience Reach
            </p>
          </div>

          <div
            className={`bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10 transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-xl group ${
              isStatsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-primary/10 p-3 rounded-full mb-3 transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
              <BarChart3 className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-all duration-300">
              98%
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Prediction Accuracy
            </p>
          </div>

          <div
            className={`bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10 transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-xl group ${
              isStatsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-primary/10 p-3 rounded-full mb-3 transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
              <MessageCircle className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-all duration-300">
              1.2M+
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Engagements
            </p>
          </div>

          <div
            className={`bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10 transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-xl group ${
              isStatsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-primary/10 p-3 rounded-full mb-3 transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
              <Star className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-all duration-300">
              4.8/5
            </p>
            <p className="text-sm text-muted-foreground text-center">
              User Rating
            </p>
          </div>
        </div>

        {/* Case Highlights / Success Stories */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary relative inline-block left-1/2 transform -translate-x-1/2 after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-primary/30 after:rounded-full">
            Case Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-primary/10 flex flex-col transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10"></div>
              <h4 className="text-lg font-semibold mb-2 text-primary transition-all duration-300 group-hover:translate-x-2">
                Record-Breaking Viewership
              </h4>
              <p className="text-muted-foreground mb-2 relative z-10">
                Cricket Predicta's special World Cup episode reached over 50
                million viewers in a single week, setting a new benchmark for
                sports analytics shows in India.
              </p>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                World Cup 2023
              </span>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-primary/10 flex flex-col transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10"></div>
              <h4 className="text-lg font-semibold mb-2 text-primary transition-all duration-300 group-hover:translate-x-2">
                Partner Success
              </h4>
              <p className="text-muted-foreground mb-2 relative z-10">
                A leading broadcaster saw a 3x increase in audience engagement
                after integrating Cricket Predicta's analytics into their live
                coverage.
              </p>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                Broadcast Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
