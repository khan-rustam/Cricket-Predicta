import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check, ChevronRight, TrendingUp, Shield, Zap } from "lucide-react";
import logo from "@/public/images/logo.png";

/**
 * Hero section of the landing page
 * Contains the main headline, feature bullets, stats, and hero image
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="container mx-auto py-12 md:py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <div className="inline-block animate-slide-up">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              #1 Cricket Analytics Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            Cricket{" "}
            <span className="text-primary animate-text-glow">Predicta</span>
          </h1>

          <p className="text-xl text-muted-foreground animate-slide-up max-w-md">
            Your ultimate destination for cricket predictions, analysis, and
            insights powered by advanced statistics.
          </p>

          {/* Feature bullets */}
          <div className="animate-slide-up-delay space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm">AI-powered match predictions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm">Real-time match statistics</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm">
                Expert analysis from cricket professionals
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 pt-6 animate-fade-in-delay">
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 shadow-sm">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Matches Analyzed</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 shadow-sm">
              <p className="text-4xl font-bold text-primary">10k+</p>
              <p className="text-sm text-muted-foreground">Data Points</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 shadow-sm">
              <p className="text-4xl font-bold text-primary">4.8</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>

          <div className="flex gap-4 animate-fade-in-delay-2 pt-4">
            <Button size="lg" className="rounded-full px-8 group">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Learn More
            </Button>
          </div>

          {/* Trusted by */}
          <div className="pt-8 border-t border-border/50 animate-fade-in-delay-2">
            <p className="text-xs text-muted-foreground mb-3">
              TRUSTED BY CRICKET ENTHUSIASTS WORLDWIDE
            </p>
            <div className="flex flex-wrap gap-6 items-center opacity-70">
              <div className="font-bold text-base">ICC</div>
              <div className="font-bold text-base">ESPN Cricket</div>
              <div className="font-bold text-base">Cricket Australia</div>
              <div className="font-bold text-base">BCCI</div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 animate-fade-in">
          <div className="relative h-[400px] md:h-[500px] w-full max-w-md mx-auto hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl -z-10 transform rotate-3 scale-95"></div>
            <Image
              // src={logo}
              src="https://img.freepik.com/free-vector/red-ball-hitting-wicket-stumps-with-bat-black-abstract-splash-background-cricket-fever-concept_1302-5492.jpg?t=st=1742755490~exp=1742759090~hmac=50bf149b056f3f63b420afe3ee57fa627ead1372e7b355c0dc338ea7fbcbb4f3&w=1060"
              alt="Cricket Ball Hitting Wicket Illustration"
              fill
              className="object-contain z-10 rounded-xl drop-shadow-xl"
              priority
            />

            {/* Decorative elements - adjusted for the new image */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/10 rounded-full filter blur-xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full filter blur-xl -z-10"></div>

            {/* Red flare effect to complement the ball */}
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-500/30 rounded-full filter blur-xl animate-pulse-slow"></div>

            {/* Animation dots */}
            <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div
              className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Action lines */}
            <div className="absolute top-1/3 right-1/4 w-16 h-1 bg-primary/50 rounded-full rotate-45 animate-pulse-slow"></div>
            <div
              className="absolute top-1/2 right-1/3 w-12 h-1 bg-primary/50 rounded-full rotate-[30deg] animate-pulse-slow"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          {/* Feature cards - repositioned to work better with new image */}
          <div className="absolute -bottom-10 -right-5 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-lg animate-slide-up-delay max-w-xs hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Real-time Analytics</h4>
                <p className="text-xs text-muted-foreground">
                  Advanced match predictions
                </p>
              </div>
            </div>
          </div>

          {/* Additional feature cards - repositioned */}
          <div className="absolute -top-10 -left-10 bg-background/80 backdrop-blur-md p-3 rounded-xl border border-border/50 shadow-lg animate-slide-up max-w-[200px] hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Expert Analysis</h4>
                <p className="text-xs text-muted-foreground">
                  From professionals
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-1/4 -right-10 bg-background/80 backdrop-blur-md p-3 rounded-xl border border-border/50 shadow-lg animate-slide-up-delay max-w-[180px] hidden md:block"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Live Updates</h4>
                <p className="text-xs text-muted-foreground">
                  Real-time scores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
