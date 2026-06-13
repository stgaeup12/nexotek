import { getProductById, productsData } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for Next.js to pre-render the pages at build time
export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

type Params = Promise<{ id: string }>;

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Pre-generate WhatsApp direct link with product name prefilled
  const whatsappText = encodeURIComponent(
    `Hello Nexotek, I would like to inquire about the "${product.name}" (${product.sub}). Please share pricing and site requirements.`
  );
  const whatsappUrl = `https://wa.me/919650331872?text=${whatsappText}`;

  // Determine site requirements or support card details based on category
  const isMachinery = product.category === "automatic" || product.category === "underbody";

  return (
    <main className="min-h-screen bg-white text-dark pt-32 pb-24 relative">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-100 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation Arrow */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-xs font-black uppercase text-grey-400 hover:text-electric transition-colors mb-8 group"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Equipment List
        </Link>

        {/* Minimal Premium Header */}
        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 bg-electric/10 border border-electric/20 text-electric text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
            {product.categoryLabel}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-dark tracking-tight uppercase leading-none">
            {product.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl font-bold text-grey-400 uppercase tracking-wide">
            {product.sub}
          </p>
        </div>

        {/* Full-Width Cinematic Product Image Banner */}
        <div className="relative aspect-[16/9] md:aspect-[16/7] w-full rounded-[32px] md:rounded-[48px] overflow-hidden border border-grey-200 shadow-2xl bg-zinc-950 mb-16">
          <Image
            src={product.banner || product.image}
            alt={product.name}
            fill
            sizes="100vw"
            className="object-cover object-center brightness-95"
            priority
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Two-Column Layout (Content Left, Sticky Actions Right) */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column (Details, Specs, Features) - takes 8 cols */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Operational Overview */}
            <div className="bg-grey-50 rounded-[32px] p-8 md:p-10 border border-grey-200 shadow-sm">
              <h2 className="text-[10px] font-black uppercase text-grey-400 tracking-[0.25em] mb-4">Operational Overview</h2>
              <h3 className="text-2xl font-black text-dark mb-6 uppercase tracking-tight">Capabilities & Design</h3>
              <p className="text-sm md:text-base text-grey-600 leading-relaxed font-medium whitespace-pre-line">
                {product.detailedExplanation}
              </p>
            </div>

            {/* Wash Cycle Stages (if applicable) */}
            {product.stages && (
              <div>
                <h2 className="text-[10px] font-black uppercase text-electric tracking-[0.25em] mb-4">Five-Stage Wash Cycle</h2>
                <h3 className="text-2xl md:text-3xl font-black text-dark tracking-tight uppercase mb-8">System Operation Flow</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                  {product.stages.map((stage, idx) => {
                    const [title, desc] = stage.split(":");
                    return (
                      <div key={idx} className="bg-white border border-grey-200 p-6 rounded-3xl relative hover:border-electric transition-colors shadow-sm pt-8">
                        <span className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-electric text-white text-[10px] font-black flex items-center justify-center shadow-lg shadow-electric/25">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-black text-dark uppercase tracking-tight mb-2">
                          {title}
                        </h4>
                        <p className="text-[11px] text-grey-500 leading-relaxed font-medium">
                          {desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Main Features Grid */}
            <div>
              <h2 className="text-[10px] font-black uppercase text-grey-400 tracking-[0.25em] mb-4">Key System Advantages</h2>
              <h3 className="text-2xl md:text-3xl font-black text-dark tracking-tight uppercase mb-8">Machine Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-white border border-grey-100 rounded-3xl hover:shadow-md transition-shadow shadow-sm"
                  >
                    <div className="text-electric bg-electric/10 w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-dark uppercase tracking-wide mb-1">{feature}</h4>
                      <p className="text-[11px] text-grey-500 font-medium">Engineered for durability, optimal performance, and commercial longevity.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Sheets */}
            {product.specifications && (
              <div>
                <h2 className="text-[10px] font-black uppercase text-grey-400 tracking-[0.25em] mb-4">Detailed Specifications</h2>
                <h3 className="text-2xl md:text-3xl font-black text-dark tracking-tight uppercase mb-8">Technical Parameters</h3>
                
                <div className="bg-white border border-grey-200 rounded-[32px] overflow-hidden shadow-sm">
                  <div className="px-6 py-4.5 bg-grey-50 border-b border-grey-200 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-dark tracking-wider">Parameter</span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-grey-400">Value</span>
                  </div>
                  <div className="divide-y divide-grey-150">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center px-6 py-4.5 text-xs hover:bg-grey-50/50 transition-colors">
                        <span className="font-bold text-grey-400 uppercase tracking-wide pr-4">{spec.label}</span>
                        <span className="font-black text-dark text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Selector Matrix (Pumps, Vacuums) */}
            {product.comparisonTable && (
              <div>
                <h2 className="text-[10px] font-black uppercase text-grey-400 tracking-[0.25em] mb-4">Selection Matrix</h2>
                <h3 className="text-2xl md:text-3xl font-black text-dark tracking-tight uppercase mb-8">Model Comparisons</h3>
                
                <div className="bg-white border border-grey-200 rounded-[32px] overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-grey-100 text-grey-500 font-bold uppercase border-b border-grey-200">
                          {product.comparisonTable.headers.map((header, idx) => (
                            <th key={idx} className="px-5 py-4 font-bold tracking-wider">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-grey-150 font-medium">
                        {product.comparisonTable.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-grey-50/50 transition-colors">
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className={`px-5 py-4 ${cellIdx === 0 ? "font-black text-dark" : "text-grey-600"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column (takes 4 cols, stretches to full height of grid) */}
          <div className="lg:col-span-4 h-full">
            {/* Sticky Container Wrapper */}
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Sticky Action / WhatsApp inquiry Box */}
              <div className="bg-dark text-white p-8 rounded-[32px] border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/15 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-[8px] font-black uppercase tracking-[0.2em] bg-electric/20 border border-electric/30 text-white px-3 py-1 rounded-full inline-block mb-4">
                Direct Inquiry
              </span>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight mb-4">
                Inquire About <br /> {product.name}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed mb-8 font-medium">
                Request custom drawings, electrical diagrams, water requirements, and a formal commercial quotation.
              </p>

              {/* Direct WhatsApp Call to Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-black text-center text-xs uppercase tracking-widest hover:scale-102 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer duration-300"
              >
                {/* WhatsApp SVG */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006 0-3.973-.504-5.735-1.464L0 24zm6.082-3.568l.354.21c1.554.92 3.464 1.406 5.42 1.408 5.405 0 9.803-4.381 9.805-9.761.002-2.607-1.012-5.059-2.859-6.908-1.847-1.847-4.3-2.865-6.91-2.867-5.41 0-9.807 4.383-9.809 9.764-.001 2.014.526 3.984 1.528 5.72l.23.399-1.002 3.658 3.743-.977zm11.233-5.602c-.29-.146-1.72-.85-1.986-.948-.266-.098-.46-.146-.654.146-.193.291-.747.948-.916 1.14-.168.193-.337.218-.627.073-.29-.146-1.226-.452-2.335-1.442-.864-.772-1.448-1.725-1.618-2.016-.168-.291-.018-.448.127-.592.131-.13.29-.337.436-.506.145-.168.193-.289.29-.481.096-.193.048-.362-.024-.508-.073-.146-.654-1.579-.896-2.161-.235-.567-.474-.49-.654-.499-.168-.008-.362-.01-.555-.01-.193 0-.508.073-.773.362-.266.291-1.013.991-1.013 2.418 0 1.428 1.038 2.809 1.183 3.002.145.193 2.042 3.12 4.949 4.377.691.299 1.231.478 1.652.612.704.223 1.345.191 1.851.115.564-.084 1.72-.702 1.962-1.378.243-.677.243-1.258.17-1.378-.073-.121-.266-.193-.556-.339z" />
                </svg>
                Inquire on WhatsApp
              </a>

              {/* Submit Web Inquiry */}
              <Link
                href={`/#contact?interest=${product.id}`}
                className="w-full py-4.5 mt-3.5 bg-white text-dark rounded-2xl font-black text-center text-xs uppercase tracking-widest hover:bg-grey-100 transition-colors flex items-center justify-center border border-white/10"
              >
                Submit Site Inquiry
              </Link>
            </div>

            {/* Accessories Sidebar (if exists in data) */}
            {product.accessories && (
              <div className="bg-grey-50 p-8 rounded-[32px] border border-grey-200 shadow-sm relative overflow-hidden">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-grey-400 mb-6">Available Accessories</h3>
                <ul className="space-y-4">
                  {product.accessories.map((acc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs font-bold text-grey-700">{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Category-Specific Support/Requirements widget (when no accessories exist) */}
            {!product.accessories && (
              <div className="bg-grey-50 p-8 rounded-[32px] border border-grey-200 shadow-sm relative overflow-hidden">
                {isMachinery ? (
                  <>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-electric mb-5">Site Planning Guide</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-electric/10 text-electric flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">✔</div>
                        <div>
                          <h4 className="text-xs font-black text-dark uppercase tracking-tight">Power Connection</h4>
                          <p className="text-[10px] text-grey-500 mt-0.5">3-Phase industrial electricity standard connection required.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-electric/10 text-electric flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">✔</div>
                        <div>
                          <h4 className="text-xs font-black text-dark uppercase tracking-tight">Water Setup</h4>
                          <p className="text-[10px] text-grey-500 mt-0.5">Requires standard buffer storage tanks for stable pressure.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-electric/10 text-electric flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">✔</div>
                        <div>
                          <h4 className="text-xs font-black text-dark uppercase tracking-tight">Civil Layout help</h4>
                          <p className="text-[10px] text-grey-500 mt-0.5">Nexotek engineers provide custom layout drawing templates.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-electric/10 text-electric flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">✔</div>
                        <div>
                          <h4 className="text-xs font-black text-dark uppercase tracking-tight">Commissioning</h4>
                          <p className="text-[10px] text-grey-500 mt-0.5">Free assembly, testing, and operator certification training.</p>
                        </div>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-dark mb-5">Quality & Warranty</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-dark/10 text-dark flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">✔</div>
                        <div>
                          <h4 className="text-xs font-black text-dark uppercase tracking-tight">3-Year Warranty</h4>
                          <p className="text-[10px] text-grey-500 mt-0.5">Comprehensive warranty coverage for key mechanical components.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-dark/10 text-dark flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">✔</div>
                        <div>
                          <h4 className="text-xs font-black text-dark uppercase tracking-tight">Heavy-Duty build</h4>
                          <p className="text-[10px] text-grey-500 mt-0.5">Solid structural steel framework designed for extreme environments.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-dark/10 text-dark flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">✔</div>
                        <div>
                          <h4 className="text-xs font-black text-dark uppercase tracking-tight">Spare Parts Network</h4>
                          <p className="text-[10px] text-grey-500 mt-0.5">Local parts hub for swift replacements and minimal downtime.</p>
                        </div>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            )}
            </div>

          </div>
          
        </div>
      </div>
    </main>
  );
}
