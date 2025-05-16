"use client";

import { BarChart3, Users, MessageCircle, Star } from "lucide-react";
import Image from "next/image";

export function OutcomeDeliveredSection() {
  return (
    <section id="outcome" className="py-24 relative bg-slate-50 dark:bg-slate-900">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              OUTCOME DELIVERED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Impact & Results <span className="text-primary">Achieved</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See how Cricket Predicta is making a difference in the world of cricket analytics and broadcasting.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10">
            <Users className="h-8 w-8 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-1">250M+</p>
            <p className="text-sm text-muted-foreground text-center">Audience Reach</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10">
            <BarChart3 className="h-8 w-8 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-1">98%</p>
            <p className="text-sm text-muted-foreground text-center">Prediction Accuracy</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10">
            <MessageCircle className="h-8 w-8 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-1">1.2M+</p>
            <p className="text-sm text-muted-foreground text-center">Engagements</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg border border-primary/10">
            <Star className="h-8 w-8 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-1">4.8/5</p>
            <p className="text-sm text-muted-foreground text-center">User Rating</p>
          </div>
        </div>

        {/* Testimonials & Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-primary/10 flex flex-col justify-between">
            <div className="mb-4">
              <p className="text-lg italic mb-2 text-primary">
                "Cricket Predicta's insights have been a game-changer for our team strategy. Their accuracy and depth are unmatched."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">RC</div>
                <div>
                  <p className="font-medium">Rahul Chaudhary</p>
                  <p className="text-sm text-muted-foreground">Cricket Team Analyst</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-primary/10 flex flex-col justify-between">
            <div className="mb-4">
              <p className="text-lg italic mb-2 text-primary">
                "The engagement and reach we've seen since partnering with Cricket Predicta is phenomenal."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">SK</div>
                <div>
                  <p className="font-medium">S. Kumar</p>
                  <p className="text-sm text-muted-foreground">Broadcast Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Highlights / Success Stories */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Case Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-primary/10 flex flex-col">
              <h4 className="text-lg font-semibold mb-2 text-primary">Record-Breaking Viewership</h4>
              <p className="text-muted-foreground mb-2">Cricket Predicta's special World Cup episode reached over 50 million viewers in a single week, setting a new benchmark for sports analytics shows in India.</p>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">World Cup 2023</span>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-primary/10 flex flex-col">
              <h4 className="text-lg font-semibold mb-2 text-primary">Partner Success</h4>
              <p className="text-muted-foreground mb-2">A leading broadcaster saw a 3x increase in audience engagement after integrating Cricket Predicta's analytics into their live coverage.</p>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">Broadcast Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 