"use client";

import { User } from "lucide-react";

// Define guest type interface
interface GuestData {
  name: string;
  title: string;
  description: string;
}

// Define guest data array
const legendaryGuests: GuestData[] = [
  {
    name: "Andy Roberts",
    title: "Former West Indies Cricketer",
    description:
      "Pioneering fast bowler; spearheaded the fearsome 1970s Windies pace attack.",
  },
  {
    name: "David Gower",
    title: "Former England Cricketer",
    description:
      "Elegant left-handed batsman; captained England in 32 Tests during the 1980s.",
  },
  {
    name: "Henry Olonga",
    title: "Former Zimbabwean Cricketer",
    description:
      "First black Zimbabwean Test player; famed for 2003 World Cup black-armband protest.",
  },
  {
    name: "Makhaya Ntini",
    title: "Former South African Cricketer",
    description:
      "First black African Proteas star; took 390 wickets in 101 Tests.",
  },
  {
    name: "Saeed Ajmal",
    title: "Legendary Off-Spinner, Pakistan",
    description:
      'Master of the "doosra"; took 447 international wickets across formats.',
  },
  {
    name: "Sarfaraz Nawaz",
    title: "Former Pakistan Cricketer",
    description:
      "Inventor of reverse swing; claimed 177 Test wickets for Pakistan.",
  },
  {
    name: "Zaheer Abbas",
    title: "Former Pakistan Captain",
    description:
      'Renowned as the "Asian Bradman"; scored 5,062 Test runs with 12 centuries.',
  },
];

// Define former cricketers & skippers data
const formerCricketers: GuestData[] = [
  // {
  //   name: "Aryan Chaudhary",
  //   title: "U-23 Delhi State Player",
  //   description:
  //     "Promising leg-spinner; named in India's U-19 probables for 2024.",
  // },
  // {
  //   name: "Atul Wassan",
  //   title: "Former Indian Cricketer",
  //   description:
  //     "Played 4 Tests in the 1990s; now a prominent cricket analyst and commentator.",
  // },
  // {
  //   name: "Baltej Singh",
  //   title: "Ranji Bowler, Punjab; Punjab Kings, IPL 2023",
  //   description: "Sikh trailblazer; first turbaned player in IPL history.",
  // },
  // {
  //   name: "Bhargav Merai",
  //   title: "First-Class Cricketer, Indian Railways",
  //   description:
  //     "Consistent run-scorer; 3,000+ Ranji Trophy runs at 45+ average.",
  // },
  // {
  //   name: "CM Gautam",
  //   title: "Former IPL Player",
  //   description:
  //     "Karnataka wicketkeeper; played for RCB and Mumbai Indians in IPL.",
  // },
  // {
  //   name: "Charvi Bhatt",
  //   title: "Former UAE Skipper",
  //   description: "Captain during UAE's 2018 T20 World Cup Qualifier campaign.",
  // },
  // {
  //   name: "Chaya Mughal",
  //   title: "Former UAE Skipper",
  //   description:
  //     "All-rounder; UAE's leading wicket-taker in WT20Is until 2021.",
  // },
  // {
  //   name: "Chioza",
  //   title: "Former Zimbabwean Cricketer",
  //   description:
  //     "All-rounder who represented Zimbabwe in 23 ODIs during the 1990s.",
  // },
  // {
  //   name: "Christopher Mfopo",
  //   title: "Former Zimbabwean Cricketer",
  //   description: "Bowler who featured in Zimbabwe's 1999 World Cup squad.",
  // },
  // {
  //   name: "David",
  //   title: "Former International Cricketer, India",
  //   description:
  //     "Off-spinner who played 4 ODIs in 1997; father of current star Washington Sundar.",
  // },
  {
    name: "Dean Elgar",
    title: "Former South African Skipper",
    description: "Gritty opener; led SA in 17 Tests before retiring in 2023.",
  },
  {
    name: "Dirk Viljoen",
    title: "Former Zimbabwean Cricketer",
    description: "Left-arm spinner; played 80 ODIs between 1996-2004.",
  },
  {
    name: "Fahad Nawaz",
    title: "Current Opener, UAE Cricket Team",
    description:
      "Aggressive top-order batsman; UAE's T20I vice-captain since 2022.",
  },
  {
    name: "Gursharan Singh",
    title: "Former Test Cricketer",
    description:
      "Scored 298 in Ranji Trophy; played 1 Test against South Africa in 1990.",
  },
  {
    name: "John Nyumbu",
    title: "Former Zimbabwean Cricketer",
    description:
      "Off-spinner; took a five-wicket haul on Test debut vs South Africa (2014).",
  },
  // {
  //   name: "Morten Kriek",
  //   title: "Former Dutch Cricketer & Founder Wisselbanck",
  //   description:
  //     "Played 40 T20Is for Netherlands; runs a cricket talent agency.",
  // },
  {
    name: "Raju Pathak",
    title: "Cricket Coach",
    description:
      "Specializes in biomechanics; mentored IPL talents like Shivam Mavi.",
  },
  {
    name: "Regis Chakabva",
    title: "Former Zimbabwean Cricketer",
    description:
      "Wicketkeeper-batter; scored 1,800+ ODI runs before retiring in 2023.",
  },
  {
    name: "Sadanand Viswanath",
    title: "Former Indian Cricketer",
    description:
      "Wicketkeeper-batsman; part of India's 1985 World Championship-winning squad.",
  },
  // {
  //   name: "Shahzad Altaf",
  //   title: "Former UAE Cricketer",
  //   description: "Pace bowler; represented UAE in 1996 World Cup qualifiers.",
  // },
  {
    name: "Sidra Nawaz Bhatti",
    title: "Former Pakistan Skipper",
    description: "Wicketkeeper-batter; led Pakistan in 15 ODIs and 23 T20Is.",
  },
  // {
  //   name: "TP Singh",
  //   title: "Club Cricketer, UK",
  //   description:
  //     "All-rounder for Surrey clubs; runs cricket academies in London.",
  // },
  {
    name: "Tanmay Mishra",
    title: "Former Kenya Cricketer",
    description:
      "Middle-order stalwart; featured in 2007 and 2011 World Cups for Kenya.",
  },
  {
    name: "Tasmeen Granger",
    title: "Zimbabwean Cricketer",
    description:
      "Emerging pace bowler; part of Zimbabwe's U-19 World Cup 2024 squad.",
  },
  {
    name: "Tatenda Taibu",
    title: "Former Zimbabwean Skipper",
    description:
      "Youngest Test captain at 21; retired in 2012 to pursue ministry work.",
  },
  // {
  //   name: "V Cheluvaraj",
  //   title: "Former Indian Railways Ranji Cricketer",
  //   description: "Opening batsman; scored 10 centuries in domestic cricket.",
  // },
  // {
  //   name: "Vineet Jain",
  //   title: "Former A-Class Cricketer",
  //   description:
  //     "Delhi batsman; played 43 first-class matches between 1988-1996.",
  // },
];

// Define coaches data
const coaches: GuestData[] = [
  {
    name: "Dav Whatmore",
    title: "World Cup-Winning Coach",
    description:
      "Masterminded Sri Lanka's 1996 WC win; coached Bangladesh and Zimbabwe.",
  },
  {
    name: "Mudassar Nazar",
    title: "Former Pakistan Coach",
    description:
      "Opened with Javed Miandad in 1980s; later coached UAE and Kenya.",
  },
  {
    name: "Rajkumar Sharma",
    title: "Coach of Virat Kohli",
    description:
      "Mentored Kohli from childhood; founded West End Cricket Academy in Delhi.",
  },
];

// Define cricket experts, analysts & umpires data
const cricketExperts: GuestData[] = [
  {
    name: "Anil Chaudhary",
    title: "Indian Cricket Umpire",
    description:
      "Officiated 60+ international matches; part of 2023 World Cup panel.",
  },
  {
    name: "Georgina Hault",
    title: "Cricket Analyst",
    description:
      'Tactics specialist for Sky Sports; co-developed the "Powerplay Impact Index".',
  },
  {
    name: "Kamran Muzaffar",
    title: "International Data Analyst",
    description:
      "Head analyst for PSL franchises; created real-time bowling heatmaps.",
  },
  {
    name: "Roland Butcher",
    title: "West Indies Selector",
    description:
      "First black England Test cricketer (1980); current Windies selector since 2019.",
  },
  {
    name: "Sanjay Rawal",
    title: "ECB Development Manager",
    description:
      "Drives grassroots programs; key figure in ECB's South Asian Action Plan.",
  },
  {
    name: "Snehal Phadke",
    title: "International Women Umpire",
    description:
      "First Indian woman to officiate in a WT20I (2019); promotes gender equity.",
  },
  {
    name: "Terry Blake",
    title: "Ex-ECB Director",
    description:
      "Oversaw England's 2019 WC logistics; former CEO of Kent County Cricket Club.",
  },
];

// Define commentators and broadcasters data
const commentators: GuestData[] = [
  {
    name: "Andrew Leonard",
    title: "International Cricket Commentator",
    description: "Voice of ICC TV since 2015; covered 200+ matches globally.",
  },
  {
    name: "Annie Chave",
    title: "Freelance Broadcaster at BBC, Editor of County Cricket Matters",
    description:
      'Hosts "The County Cricket Podcast"; authored "Spin Bowling Revolution".',
  },
  {
    name: "Nono Pongolo",
    title: "Former South African League Cricketer & Commentator",
    description: "Analyst for SABC Sport; played 98 first-class matches.",
  },
  {
    name: "Philasande Sixaba",
    title: "Cricket Commentator, South Africa",
    description:
      "Lead voice on SuperSport; former Western Province wicketkeeper.",
  },
];

// Guest card component for reuse
const GuestCard = ({ guest, index }: { guest: GuestData; index: number }) => (
  <div
    key={index}
    className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200/30 dark:border-slate-700/20 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 h-20 w-20 bg-primary/5 rounded-bl-full"></div>

    <div className="flex items-center gap-4 mb-3">
      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <User className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <h4 className="text-base sm:text-lg font-semibold line-clamp-1">
        {guest.name}
      </h4>
    </div>

    <div className="pl-14 sm:pl-16 -mt-2">
      <p className="text-xs sm:text-sm text-primary/80 font-medium mb-2">
        {guest.title}
      </p>
      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
        {guest.description}
      </p>
    </div>
  </div>
);

// Former cricketer card without user icon, matching the image style
const FormerCricketerCard = ({
  guest,
  index,
}: {
  guest: GuestData;
  index: number;
}) => (
  <div
    key={index}
    className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200/30 dark:border-slate-700/20 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 h-20 w-20 bg-primary/5 rounded-bl-full"></div>
    <h4 className="text-lg font-semibold mb-1">{guest.name}</h4>

    <p className="text-sm text-primary font-medium mb-2">{guest.title}</p>

    <p className="text-slate-600 dark:text-slate-300 text-sm">
      {guest.description}
    </p>
  </div>
);

/**
 * Guest section showing cricket legends who appeared on Cricket Predicta
 */
export function GuestSection() {
  return (
    <section
      id="guest"
      className="py-0 relative bg-slate-50 dark:bg-slate-900/50 min-h-screen flex flex-col"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-30 py-8 sm:py-10 md:py-12 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/20 dark:border-slate-700/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-3 sm:mb-4">
                <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                  OUR GUESTS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                Who Appeared on{" "}
                <span className="text-primary">Cricket Predicta</span> in 2024?
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-4 sm:mb-6"></div>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-sm sm:text-base">
                Cricket Legends, Former Cricketers, Skippers, Coaches, Experts,
                Analysts, Umpires, Commentators, Broadcasters & Journalists Who
                Appeared on Our Show till date
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content with Custom Scrollbar */}
      <div className="flex-1 overflow-auto py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Former Cricketers & Skippers section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30 mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-primary relative">
                Former Cricketers & Skippers
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-40 bg-primary/40 rounded-full"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {formerCricketers.map((guest, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={`/Former Cricketer/${guest.name}.png`}
                        alt={guest.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          (e.target as HTMLImageElement).src =
                            "/assets/placeholder.png";
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-white">
                        {guest.name}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {guest.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coaches section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30 mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent relative">
                Coaches
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 bg-primary/20 rounded-full"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {coaches.map((guest, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={`/Coaches/${guest.name}.png`}
                        alt={guest.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-white">
                        {guest.name}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {guest.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cricket Experts, Analysts & Umpires section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30 mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent relative">
                Cricket Experts, Analysts & Umpires
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 bg-primary/20 rounded-full"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {cricketExperts.map((guest, index) => (
                  <GuestCard guest={guest} index={index} key={index} />
                ))}
              </div>
            </div>

            {/* Commentators and Broadcasters section */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent relative">
                Commentators and Broadcasters
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 bg-primary/20 rounded-full"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {commentators.map((guest, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={`/Commentator/${guest.name}.png`}
                        alt={guest.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-white">
                        {guest.name}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {guest.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
