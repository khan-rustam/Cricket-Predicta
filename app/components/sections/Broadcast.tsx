import { Tv } from "lucide-react";

/**
 * Broadcast section showing where Cricket Predicta will be on air
 */
export function BroadcastSection() {
  const channels = [
    "News X",
    "India News",
    "Saam TV",
    "APN News",
    "News Time Bangla",
    "Kolkata TV",
    "Protidin Times",
    "Living India News",
    "MH one news",
    "Bharat 24",
    "ANB News",
    "TV 27 News",
    "India News Rajasthan",
    "India News Gujarat",
    "India News J&K",
    "India News Haryana",
    "India News Punjab",
  ];

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
              22 mins of broadcast on the following channels
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {channels.map((channel, index) => (
              <div key={index} className="relative group overflow-hidden">
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/30 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium">{channel}</h3>
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
