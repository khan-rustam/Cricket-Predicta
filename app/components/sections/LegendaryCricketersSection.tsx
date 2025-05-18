"use client";

import Image from "next/image";
import { Award } from "lucide-react";

const cricketers = [
  { name: "Andy Robert", img: "/Lengadary-Crickters/Andy.png" },
  { name: "David Gower", img: "/Lengadary-Crickters/David.png" },
  { name: "Henry Olong", img: "/Lengadary-Crickters/Henry.png" },
  { name: "Makhaya Ntini", img: "/Lengadary-Crickters/Makhaya.png" },
  { name: "Saeed Ajmal", img: "/Lengadary-Crickters/Saeed.png" },
  { name: "Sarfaraz Nawaz", img: "/Lengadary-Crickters/Sarfaraz.png" },
  { name: "Zahir Abbasi", img: "/Lengadary-Crickters/Zahir.png" },
];

export function LegendaryCricketersSection() {
  return (
    <section id="legendary-cricketers" className="py-24 relative bg-slate-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              LEGENDARY CRICKETERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Legends of <span className="text-primary">Cricket</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Celebrating the icons who have shaped the game.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch justify-center">
          {cricketers.map((cricketer, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-between p-2 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl shadow-xl border border-slate-700/60 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/80 group relative overflow-hidden"
              style={{ minWidth: "18rem" }}
            >
              <div className="relative w-40  h-48 flex items-center justify-center mb-4 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Image
                  src={cricketer.img}
                  alt={cricketer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent z-10" />
              </div>

              <div className="flex flex-row items-center z-20">
                {/* <Award className="h-7 w-7 text-primary mb-2 drop-shadow-lg" /> */}
                <span className="text-2xl font-extrabold text-primary drop-shadow-md text-center tracking-wide group-hover:text-primary/90 group-hover:scale-110 group-hover:translate-y-[-2px] transition-all duration-300">
                  {cricketer.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
