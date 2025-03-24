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
    name: "Zaheer Abbas",
    title: "Former Pakistan Captain",
    description: "Renowned as the \"Asian Bradman\"; scored 5,062 Test runs with 12 centuries."
  },
  {
    name: "Andy Roberts",
    title: "Former West Indies Cricketer",
    description: "Pioneering fast bowler; spearheaded the fearsome 1970s Windies pace attack."
  },
  {
    name: "Makhaya Ntini",
    title: "Former South African Cricketer",
    description: "First black African Proteas star; took 390 wickets in 101 Tests."
  },
  {
    name: "David Gower",
    title: "Former England Cricketer",
    description: "Elegant left-handed batsman; captained England in 32 Tests during the 1980s."
  },
  {
    name: "Henry Olonga",
    title: "Former Zimbabwean Cricketer",
    description: "First black Zimbabwean Test player; famed for 2003 World Cup black-armband protest."
  },
  {
    name: "Sarfaraz Nawaz",
    title: "Former Pakistan Cricketer",
    description: "Inventor of reverse swing; claimed 177 Test wickets for Pakistan."
  },
  {
    name: "Saeed Ajmal",
    title: "Legendary Off-Spinner, Pakistan",
    description: "Master of the \"doosra\"; took 447 international wickets across formats."
  }
];

// Define former cricketers & skippers data
const formerCricketers: GuestData[] = [
  {
    name: "Atul Wassan",
    title: "Former Indian Cricketer",
    description: "Played 4 Tests in the 1990s; now a prominent cricket analyst and commentator."
  },
  {
    name: "Dean Elgar",
    title: "Former South African Skipper",
    description: "Gritty opener; led SA in 17 Tests before retiring in 2023."
  },
  {
    name: "Stanley Chioza",
    title: "Former Zimbabwean Cricketer",
    description: "All-rounder who represented Zimbabwe in 23 ODIs during the 1990s."
  },
  {
    name: "Tatenda Taibu",
    title: "Former Zimbabwean Skipper",
    description: "Youngest Test captain at 21; retired in 2012 to pursue ministry work."
  },
  {
    name: "Noel David",
    title: "Former International Cricketer, India",
    description: "Off-spinner who played 4 ODIs in 1997; father of current star Washington Sundar."
  },
  {
    name: "Gursharan Singh",
    title: "Former Test Cricketer",
    description: "Scored 298 in Ranji Trophy; played 1 Test against South Africa in 1990."
  },
  {
    name: "Tanmay Mishra",
    title: "Former Kenya Cricketer",
    description: "Middle-order stalwart; featured in 2007 and 2011 World Cups for Kenya."
  },
  {
    name: "Vineet Jain",
    title: "Former A-Class Cricketer",
    description: "Delhi batsman; played 43 first-class matches between 1988-1996."
  }
];

// Guest card component for reuse
const GuestCard = ({ guest, index }: { guest: GuestData; index: number }) => (
  <div 
    key={index} 
    className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5 border border-slate-200/70 dark:border-slate-600/30 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 h-20 w-20 bg-primary/5 rounded-bl-full"></div>
    
    <div className="flex items-center gap-4 mb-3">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <User className="h-6 w-6" />
      </div>
      <h4 className="text-lg font-semibold line-clamp-1">
        {guest.name}
      </h4>
    </div>
    
    <div className="pl-16 -mt-2">
      <p className="text-sm text-primary/80 font-medium mb-2">
        {guest.title}
      </p>
      <p className="text-slate-600 dark:text-slate-300 text-sm">
        {guest.description}
      </p>
    </div>
  </div>
);

/**
 * Guest section showing cricket legends who appeared on Cricket Predicta
 */
export function GuestSection() {
  return (
    <section
      id="guest"
      className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900/50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                OUR GUESTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who Appeared on{" "}
              <span className="text-primary">Cricket Predicta</span> in 2024?
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Cricket Legends, Former Cricketers, Skippers, Coaches, Experts,
              Analysts, Umpires, Commentators, Broadcasters & Journalists Who
              Appeared on Our Show till date
            </p>
          </div>

          {/* Legendary Cricketers section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent relative">
              Legendary Cricketers
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-primary/20 rounded-full"></div>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legendaryGuests.map((guest, index) => (
                <GuestCard guest={guest} index={index} key={index} />
              ))}
            </div>
          </div>
          
          {/* Former Cricketers & Skippers section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200/50 dark:border-slate-700/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent relative">
              Former Cricketers & Skippers
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-primary/20 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formerCricketers.map((guest, index) => (
                <GuestCard guest={guest} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
