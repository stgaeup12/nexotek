import Image from "next/image";

export default function About() {
  const pillars = [
    {
      title: "Technical Operations",
      description: "Direct support for machine configuration, PLC programming, and diagnostic assistance.",
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Installation Support",
      description: "Comprehensive layout configuration, civil guidance, and on-site assembly.",
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Product Development",
      description: "Continuous engineering refinements, water conservation systems, and heavy-duty frame design.",
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Design & Customer Experience",
      description: "Tailored site configurations, detailed survey checklists, and operator training.",
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
          
          {/* About Text Column - takes 7 cols */}
          <div className="lg:col-span-7">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-electric mb-6">About NexoTek</h2>
            <h3 className="text-3xl md:text-4xl font-black text-dark tracking-tight uppercase leading-tight mb-8">
              Reliable Vehicle Cleaning Solutions
            </h3>
            <div className="space-y-6 text-grey-600 font-medium text-sm md:text-base leading-relaxed">
              <p>
                NexoTek was founded with a vision to bring modern, reliable, and business-focused vehicle cleaning solutions to the Indian market.
              </p>
              <p>
                Our team combines expertise across technical operations, installation support, product development, design, and customer experience to deliver complete car wash solutions for entrepreneurs, detailing studios, service centers, fleet operators, and commercial vehicle cleaning businesses.
              </p>
              <p>
                From automatic car wash systems and manual wash setups to underbody cleaning solutions and professional detailing equipment, NexoTek focuses on helping businesses build efficient and scalable cleaning operations.
              </p>
              <p>
                Backed by experienced professionals and industry specialists, we are committed to delivering quality equipment, dependable support, and long-term customer success.
              </p>
            </div>
          </div>
          
          {/* Pillars Column - takes 5 cols */}
          <div className="lg:col-span-5 mt-16 lg:mt-0">
            <div className="bg-grey-50 rounded-[40px] p-8 md:p-10 border border-grey-200/80 shadow-sm">
              <h4 className="text-xs font-black text-dark uppercase tracking-widest mb-8 text-center lg:text-left">
                Our Professional Pillars
              </h4>
              <div className="space-y-6">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-white border border-grey-200 text-dark flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-electric group-hover:text-white transition-all duration-300">
                      {pillar.icon}
                    </div>
                    <div>
                      <h5 className="font-black text-dark text-xs uppercase tracking-tight mb-1">
                        {pillar.title}
                      </h5>
                      <p className="text-[11px] text-grey-500 font-medium leading-relaxed">
                        {pillar.description}
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
