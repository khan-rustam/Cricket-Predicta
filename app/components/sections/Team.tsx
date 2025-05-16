import Image from "next/image";
import { ExternalLink } from "lucide-react";

/**
 * Team section showing profiles of key team members
 * Displays images, credentials, and social links
 */
export function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      {/* Background effects with cricket field and map */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 to-slate-100/95 dark:from-[#0f172a]/90 dark:to-[#0f172a]/95"></div>
        <Image
          src="https://img.freepik.com/free-photo/aerial-view-cricket-stadium_53876-94011.jpg"
          alt="Cricket Stadium Background"
          fill
          className="object-cover opacity-10 mix-blend-multiply dark:mix-blend-lighten"
          priority={false}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {/* Cricket ball decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-full bg-red-500/10 dark:bg-red-500/30 blur-sm shadow-lg animate-spin-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-red-500/5 dark:bg-red-500/20 blur-sm shadow-lg animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        ></div>

        {/* Cricket bat silhouette */}
        <div className="absolute bottom-0 right-10 w-8 h-32 bg-primary/5 dark:bg-primary/10 rounded-b-3xl blur-sm rotate-45"></div>

        {/* Cricket stumps silhouette */}
        <div className="absolute top-10 left-10 flex space-x-1 opacity-10 dark:opacity-20">
          <div className="w-1 h-16 bg-primary rounded-t-full"></div>
          <div className="w-1 h-16 bg-primary rounded-t-full"></div>
          <div className="w-1 h-16 bg-primary rounded-t-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              THE CRICKET VISIONARIES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mt-2 mb-2 text-slate-800 dark:text-white leading-tight">
            Team <span className="text-primary">Behind</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-gray-400 max-w-md mx-auto mt-4">
            Meet the experts who bring cricket analytics to life
          </p>
        </div>

        {/* Team Cards Row */}
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {/* Only Sunil Yash Kalra is highlighted for now */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] group border border-slate-200/60 dark:border-slate-700/40 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative">
                <div className="relative md:h-full h-64 overflow-hidden">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/C4D03AQEkwH7tnAtYGw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516547202960?e=1748476800&v=beta&t=6x3QlwTccqMmLuoDcC1VAnaphK98rV3Na3uTfX-HQ1U"
                    alt="Sunil Yash Kalra"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-2 py-1 bg-primary/80 text-white text-xs font-medium rounded-md mb-2">
                        INDIA
                      </span>
                      <h4 className="text-xl font-bold text-white mb-1 drop-shadow-sm px-4 sm:px-6 md:px-8">
                        Sunil Yash Kalra
                      </h4>
                      <p className="text-sm text-white/80 italic">
                        The Visionary
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-lg border border-white/30">
                      <span className="text-xs font-bold text-white">
                        1969-Present
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between">
                <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                  The visionary behind Cricket Predicta is{" "}
                  <a
                    href="https://www.linkedin.com/in/sunil-yash-kalra-4a6a7214/?originalSubdomain=in"
                    target="_blank"
                    className="text-primary hover:text-primary/80 "
                  >
                    Sunil Yash Kalra
                  </a>
                  , a dynamic entrepreneur and scholar. Driven by his passion
                  for both sports and innovation, Sunil is steadily positioning
                  Cricket Predicta as a global leader in cricket data and
                  analytics.
                  <br />
                  An international sports expert from India who has been helping
                  Indian Sports Advertisers & Sports League owners to maximize
                  reach via content curation and social media marketing &
                  communications strategies. Renowned expert on Commonwealth
                  Games for India with two bestsellers on CWG in 2006 & 2010
                  (Penguin India). Also, the co-author for ICC's history of
                  womens cricket, he is currently devising a sports app,that
                  will revolutionize sports viewing in India.
                </p>
                <div className="flex flex-wrap gap-3 mb-6 mt-2">
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full shadow-sm border border-primary/20 transition-all duration-200 hover:bg-primary/20">
                    Author
                  </span>
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full shadow-sm border border-primary/20 transition-all duration-200 hover:bg-primary/20">
                    Sports Expert
                  </span>
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full shadow-sm border border-primary/20 transition-all duration-200 hover:bg-primary/20">
                    Entrepreneur
                  </span>
                </div>
                <div className="relative mt-2">
                  <div className="h-px w-full bg-gradient-to-r from-primary/30 via-slate-300/30 dark:via-slate-600/30 to-transparent absolute left-0 top-0"></div>
                  <a
                    href="https://www.linkedin.com/in/sunil-yash-kalra-4a6a7214/?originalSubdomain=in"
                    target="_blank"
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                  >
                    <span>Read more about Sunil</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
