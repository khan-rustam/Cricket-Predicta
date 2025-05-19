"use client";

import Image from "next/image";

const clients = [
  { name: "ICC", logo: "/Brands/ICC.png" },
  { name: "ESPN", logo: "/Brands/ESPN.png" },
  { name: "BCCI", logo: "/Brands/BCCI.png" },
  { name: "CA", logo: "/Brands/CA.png" },
  // Add more as needed
];

export function ClientsPartnersSection() {
  return (
    <section
      id="clients-partners"
      className="py-24 relative bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              CLIENTS & PARTNERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Leaders</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our work is recognized and trusted by top organizations in cricket
            and media.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 h-48 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/60 group relative overflow-hidden"
              style={{ minHeight: "12rem" }}
            >
              <div className="relative w-44 h-24 flex items-center justify-center mb-3">
                <Image
                  src={client.logo}
                  alt={client.name + " logo"}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  sizes="176px"
                  loading="lazy"
                  priority={idx === 0}
                />
              </div>
              <span className="text-base font-semibold mt-1 text-center line-clamp-1 tracking-wide text-slate-700 dark:text-slate-200">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
