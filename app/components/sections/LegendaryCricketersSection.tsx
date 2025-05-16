"use client";

import Image from "next/image";
import { Award } from "lucide-react";

const cricketers = [
  { name: "Zahir Abbasi", img: "/Lengadary-Crickters/Zahir.png" },
  { name: "Sarfaraz Nawaz", img: "/Lengadary-Crickters/Sarfaraz.png" },
  { name: "Saeed Ajmal", img: "/Lengadary-Crickters/Saeed.png" },
  { name: "Makhaya Ntini", img: "/Lengadary-Crickters/Makhaya.png" },
  { name: "Henry Olong", img: "/Lengadary-Crickters/Henry.png" },
  { name: "David Gower", img: "/Lengadary-Crickters/David.png" },
  { name: "Andy Robert", img: "/Lengadary-Crickters/Andy.png" },
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
              className="flex flex-col items-center justify-between p-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl shadow-xl border border-slate-700/60 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400/80 group relative overflow-hidden"
              style={{ minHeight: "26rem" }}
            >
              <div className="relative w-44 h-60 flex items-center justify-center mb-6 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-300">
                <Image
                  src={cricketer.img}
                  alt={cricketer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-500"
                  sizes="176px"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent z-10" />
              </div>
              <div className="flex flex-col items-center z-20">
                <Award className="h-7 w-7 text-yellow-400 mb-2 drop-shadow-lg" />
                <span className="text-2xl font-extrabold text-yellow-300 drop-shadow-md text-center tracking-wide">
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
