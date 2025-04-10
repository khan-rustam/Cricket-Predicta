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
          {/* Team Member 1 */}
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
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="inline-block px-2 py-1 bg-primary/80 text-white text-xs font-medium rounded-md mb-2">
                          INDIA
                        </span>
                        <h4 className="text-xl font-bold text-white mb-1 drop-shadow-sm">
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
              </div>

              <div className="md:col-span-7 p-6 md:p-8 relative">
                {/* <div className="absolute top-0 right-0 -mt-10 mr-6 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg border border-slate-200 dark:border-slate-700/60">
                  <div className="flex gap-1">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                  </div>
                </div> */}

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
                  (Penguin India). Also, the co-author for ICC’s history of
                  womens cricket, he is currently devising a sports app,that
                  will revolutionize sports viewing in India.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-slate-100 dark:bg-slate-700/50 text-primary text-xs px-3 py-1 rounded-full">
                    Author
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-700/50 text-primary text-xs px-3 py-1 rounded-full">
                    Sports Expert
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-700/50 text-primary text-xs px-3 py-1 rounded-full">
                    Entrepreneur
                  </span>
                </div>

                <div className="relative">
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

          {/* Team Member 2 */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] group border border-slate-200/60 dark:border-slate-700/40 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative">
                <div className="relative md:h-full h-64 overflow-hidden">
                  <Image
                    src="https://www.mxmindia.com/wp-content/uploads/2011/09/AYAZ111.jpg"
                    alt="Ayaz Memon"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="inline-block px-2 py-1 bg-primary/80 text-white text-xs font-medium rounded-md mb-2">
                          INDIA
                        </span>
                        <h4 className="text-xl font-bold text-white mb-1 drop-shadow-sm">
                          Ayaz Memon
                        </h4>
                        <p className="text-sm text-white/80 italic">
                          cricketwallah
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-lg border border-white/30">
                        <span className="text-xs font-bold text-white">
                          1955-Present
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 p-6 md:p-8 relative">
                {/* <div className="absolute top-0 right-0 -mt-10 mr-6 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg border border-slate-200 dark:border-slate-700/60">
                  <div className="flex gap-1">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                      >
                        <path d="M9 18v-6"></path>
                        <path d="M15 18v-6"></path>
                        <path d="M12 22v-4"></path>
                        <path d="M10 10l-2 2 2 2"></path>
                        <path d="M14 14l2-2-2-2"></path>
                        <path d="M5 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                  </div>
                </div> */}

                <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                  The Co Host of the Show Mr. Ayaz Memon is a renowned Indian
                  sports journalist, author, and former lawyer. Starting his
                  career with Sportsweek in 1978, he went on to edit prominent
                  publications like Mid-Day, Bombay Times, DNA, and served as
                  sports editor for The Times of India. Currently, He also
                  contributes columns to Hindustan Times, Mint, Deccan
                  Chronicle, and more. In his extensive career, Ayaz has covered
                  over 300 Test matches, 400 ODIs, and numerous global events,
                  including nine Cricket World Cups, the Olympics, and FIFA
                  World Cup. Known on Twitter as{" "}
                  <a
                    href="https://twitter.com/cricketwallah"
                    target="_blank"
                    className="text-primary hover:text-primary/80"
                  >
                    @cricketwallah
                  </a>
                  , he reviews IPL matches on Firstpost Gameplan and is working
                  on an illustrated history of Indian cricket.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-slate-100 dark:bg-slate-700/50 text-primary text-xs px-3 py-1 rounded-full">
                    Journalist
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-700/50 text-primary text-xs px-3 py-1 rounded-full">
                    Author
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-700/50 text-primary text-xs px-3 py-1 rounded-full">
                    Legal Expert
                  </span>
                </div>

                <div className="relative">
                  <div className="h-px w-full bg-gradient-to-r from-primary/30 via-slate-300/30 dark:via-slate-600/30 to-transparent absolute left-0 top-0"></div>
                  <a
                    href="https://twitter.com/cricketwallah"
                    target="_blank"
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                  >
                    <span>Read more about Andy</span>
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
