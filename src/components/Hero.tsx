import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-dark">
      {/* Background Image - Updated to new filename to bypass cache */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/360° Automatic Single Arm Jet Wash Plant_banner.png"
          alt="Nexotek High-Performance Machine"
          fill
          sizes="100vw"
          className="object-cover object-right brightness-100"
          priority
        />
        {/* Gradient Overlay: Fades from Dark Navy (Left) to Transparent (Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-electric/20 backdrop-blur-md border border-electric/30 text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6">
            Industrial Automation Excellence
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tight">
            PRECISION <br /> <span className="text-electric">CLEANING</span> <br /> REIMAGINED.
          </h1>
          <p className="mt-8 text-xl text-white/60 max-w-lg leading-relaxed font-medium">
            High-performance industrial washing systems engineered for durability and maximum ROI.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="px-10 py-4 bg-electric text-white rounded-full font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-electric/20">
              Request Quote
            </button>
            
            {/* Social Proof Stack */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-dark overflow-hidden bg-grey-800 ring-2 ring-white/10">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="customer avatar" 
                      width={48} 
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <svg key={s} className="w-3 h-3 text-electric fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">Trusted by 500+ Owners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-[0.4em]">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-electric to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
