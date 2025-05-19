"use client";

import Image from "next/image";
import React, { useState } from "react";

const IMAGES_PER_PAGE = 8;
const images = [
  "1.png",
  "2.png",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
];

const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

  const openModal = (idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, images.length));
  };

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                GALLERY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cricket Predicta <span className="text-primary">Gallery</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore moments from our journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.slice(0, visibleCount).map((img, idx) => (
              <div
                key={img}
                className="relative group overflow-hidden rounded-xl shadow-sm transition-all duration-500 bg-white dark:bg-slate-800 cursor-pointer"
                onClick={() => openModal(idx)}
              >
                <Image
                  src={`/Gallery/${img}`}
                  alt={`Gallery image ${idx + 1}`}
                  width={400}
                  height={250}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                  {...(idx === 0 ? { priority: true } : { loading: "lazy" })}
                />
              </div>
            ))}
          </div>
          {visibleCount < images.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-primary text-white rounded-full shadow hover:bg-primary/80 transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-primary focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={`/Gallery/${images[currentIdx]}`}
              alt={`Gallery image ${currentIdx + 1}`}
              width={1200}
              height={800}
              className="object-contain w-full max-h-[80vh] rounded-xl bg-black"
              loading="lazy"
            />
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-primary focus:outline-none"
              onClick={showPrev}
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-primary focus:outline-none"
              onClick={showNext}
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
