"use client";

import { useState, useEffect } from "react";

export default function WhyUs() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on escape key and lock scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/919650331872?text=${encodeURIComponent(
    "Hello Nexotek, I am a Nexotek machine owner and I would like to get a custom quote for the 1-Year AMC Support Plan. My site location is: "
  )}`;

  const benefits = [
    {
      title: "Experienced Technical Team",
      description: "Supported by industry specialists and automation engineers who ensure proper machine configuration and diagnostic guidance.",
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Professional Installation Support",
      description: "Providing detailed site surveys, layout drawings, civil pit guidelines, and hands-on commissioning at your facility.",
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "Product & Design Specialists",
      description: "Systems customized for specific bay dimensions, optimizing workflows and integrating smart water management controls.",
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Business-Focused Solutions",
      description: "Engineered to maximize return on investment, optimize wash speeds, reduce water/power wastage, and lower chemical usage.",
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      title: "After-Sales Support",
      description: "Direct troubleshooting lines initiated within 24 hours of logs, including guided video call audits for minor faults.",
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Quality Equipment & Components",
      description: "Fabricated with hot-dip galvanized framing, IP65 waterproof boxes, and heavy-duty ceramic plunger pump arrays.",
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-28 bg-dark text-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-electric/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-electric mb-4">Why Choose NexoTek</h2>
          <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
            Designed for Reliability. <br /> <span className="text-white/20">Supported by Professionals.</span>
          </h3>
          <p className="mt-4 text-white/60 text-base md:text-lg font-medium max-w-xl">
            We deliver professional equipment backed by technical expertise, seamless installation support, and responsive maintenance plans.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="bg-white/5 border border-white/10 hover:border-electric/40 rounded-[32px] p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-electric/25 group-hover:scale-105 transition-all">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight uppercase mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Support Plans CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="px-10 py-5 bg-white text-dark rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 active:scale-98 transition-all shadow-xl cursor-pointer"
          >
            Explore Support Plans
          </button>
        </div>

      </div>

      {/* Support Plan Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-2xl bg-white text-dark rounded-[36px] overflow-hidden shadow-2xl border border-grey-200 animate-in fade-in zoom-in-95 duration-200 p-8 md:p-12">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-grey-100 text-grey-400 hover:text-dark transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-electric/10 text-electric text-[9px] font-black uppercase tracking-widest rounded-full mb-3">
                Exclusive Service Agreement
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-dark uppercase tracking-tight">
                1-Year Support & AMC Plan
              </h3>
              <p className="text-xs text-grey-400 font-bold mt-1 uppercase tracking-wide">
                Available exclusively to Nexotek Equipment Owners
              </p>
            </div>

            {/* Plan Details List */}
            <div className="space-y-6 mb-10">
              
              {/* Point 1: 24Hr SLA */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-electric/10 text-electric flex items-center justify-center flex-shrink-0 text-xs font-black">1</div>
                <div>
                  <h4 className="text-sm font-black text-dark uppercase tracking-wide">24-Hour SLA Support Initiation</h4>
                  <p className="text-xs text-grey-500 mt-1 leading-relaxed">
                    Whenever a complaint is raised, diagnostic help or technical support is initiated within 24 hours.
                  </p>
                </div>
              </div>

              {/* Point 2: Video Diagnostics */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-electric/10 text-electric flex items-center justify-center flex-shrink-0 text-xs font-black">2</div>
                <div>
                  <h4 className="text-sm font-black text-dark uppercase tracking-wide">Guided Video Call Assistance</h4>
                  <p className="text-xs text-grey-500 mt-1 leading-relaxed">
                    Light or minor faults that can be corrected on-site are diagnosed and resolved immediately over video calls with our senior engineers.
                  </p>
                </div>
              </div>

              {/* Point 3: Damaged Parts Billing */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center flex-shrink-0 text-xs font-black">3</div>
                <div>
                  <h4 className="text-sm font-black text-dark uppercase tracking-wide">Replacement Parts Billing</h4>
                  <p className="text-xs text-grey-500 mt-1 leading-relaxed font-medium">
                    The cost of any replacement parts or components damaged due to wear, tear, or operational faults is borne exclusively by the customer.
                  </p>
                </div>
              </div>

              {/* Point 4: Travel Expenses */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center flex-shrink-0 text-xs font-black">4</div>
                <div>
                  <h4 className="text-sm font-black text-dark uppercase tracking-wide">Technician Travel & Lodging Costs</h4>
                  <p className="text-xs text-grey-500 mt-1 leading-relaxed font-medium">
                    All logistics expenses, including traveling charges, local lodging, and food costs for deployed technicians, are to be covered by the customer.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-dark text-white rounded-2xl font-bold text-center text-xs uppercase tracking-widest hover:bg-electric transition-colors shadow-lg cursor-pointer"
              >
                Inquire For AMC Quote
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-4 bg-grey-100 text-dark border border-grey-200 rounded-2xl font-bold text-center text-xs uppercase tracking-widest hover:bg-grey-200 transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
