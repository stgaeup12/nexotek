"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function VideoShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const youtubeVideoId = "zn000RWepTQ"; // Real high-quality car wash demo video ID

  return (
    <section id="showcase" className="py-24 bg-white text-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-electric/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-zinc-100 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-electric mb-4">Engineering in Motion</h2>
          <h3 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-tight">
            See Nexotek Systems <br /> <span className="text-grey-400">In Real Action.</span>
          </h3>
          <p className="mt-6 text-base md:text-lg text-grey-500 leading-relaxed max-w-2xl mx-auto">
            Witness how our automated touchless robotic arms and underbody wash systems operate with high-speed precision and minimal water waste.
          </p>
        </div>

        {/* Video Card Container */}
        <div className="max-w-5xl mx-auto">
          <div 
            onClick={() => setIsOpen(true)}
            className="relative aspect-[16/9] w-full rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl group border border-grey-100 bg-dark cursor-pointer"
          >
            {/* Thumbnail Image */}
            <Image
              src="/images/Jet Car Wash Plant_Banner.png"
              alt="Nexotek Automated Car Wash Demo"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-75 group-hover:brightness-50"
            />
            {/* Visual Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />

            {/* Glowing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-electric text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group-hover:bg-electric/90"
              >
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full bg-electric opacity-30 animate-ping group-hover:opacity-40" />
                
                {/* Glowing glow effect */}
                <div className="absolute -inset-1 rounded-full bg-electric/50 blur-md opacity-50 group-hover:opacity-80 transition-opacity" />

                {/* SVG Play Icon */}
                <svg className="w-6 h-6 md:w-8 md:h-8 relative z-10 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 text-white max-w-[280px] sm:max-w-md pointer-events-none select-none">
              <span className="hidden sm:inline-block text-[10px] font-black tracking-[0.2em] text-electric uppercase bg-electric/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-electric/20 mb-3">
                Featured Showroom Demo
              </span>
              <h4 className="text-sm sm:text-xl md:text-2xl font-black uppercase tracking-tight">360° Automatic Single Arm</h4>
              <p className="hidden sm:block text-xs text-white/60 mt-1 font-medium">Model: NT-360AJW - High Pressure Water Jet system in full speed cycle.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/95 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-5xl aspect-[16/9] bg-black rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-dark/70 text-white/80 hover:text-white hover:bg-dark border border-white/10 transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Embedded Iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&rel=0&playsinline=1&enablejsapi=1`}
              title="Nexotek Car Wash System Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
