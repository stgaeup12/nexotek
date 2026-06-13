"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/products";

const categories = [
  { id: "all", name: "All Equipment" },
  { id: "automatic", name: "Automatic Wash Plants" },
  { id: "underbody", name: "Underbody Solutions" },
  { id: "lifts-pumps", name: "Lifts & Pumps" },
  { id: "vacuum-detailing", name: "Vacuum & Detailing" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all"
    ? productsData
    : productsData.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-28 bg-grey-50 text-dark relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,102,255,0.02)_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-electric mb-4">Product Lineup</h2>
          <h3 className="text-4xl md:text-5xl font-black text-dark leading-tight tracking-tight">
            NexoTek <br /> Industrial Solutions.
          </h3>
          <p className="mt-6 text-base md:text-lg text-grey-500 leading-relaxed">
            Engineered for high performance, water efficiency, and business profitability. Choose a category below to explore our complete industrial systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-3 border-b border-grey-200 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-electric text-white shadow-lg shadow-electric/25 scale-102"
                  : "bg-white text-grey-600 hover:text-dark hover:bg-grey-100 border border-grey-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col h-full bg-white rounded-[40px] p-5 hover:shadow-2xl hover:shadow-dark/5 border border-grey-100 transition-all duration-500"
            >
              {/* Product Cover Image */}
              <div className="relative h-64 rounded-[30px] overflow-hidden mb-6 shadow-md bg-zinc-950">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-104 transition-transform duration-700 brightness-95 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Product Info */}
              <div className="px-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-dark tracking-tight uppercase group-hover:text-electric transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[10px] font-black text-grey-400 uppercase tracking-widest mt-1.5 mb-6">
                    {product.sub}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="mt-auto">
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full py-4 bg-dark text-white font-bold text-center block rounded-2xl hover:bg-electric transition-all shadow-xl hover:shadow-electric/10 group-hover:scale-101 duration-300"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
