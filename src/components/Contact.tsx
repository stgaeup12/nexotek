"use client";

import { useState, useEffect } from "react";
import { productsData } from "@/data/products";

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const interest = params.get("interest");
      if (interest) {
        setSelectedInterest(interest);
        // Scroll to form smoothly after visual rendering stabilizes
        const timer = setTimeout(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          interest: selectedInterest,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setError(data.error || "Failed to send email inquiry. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the email server. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      title: "WhatsApp Direct",
      value: "+91 96503 31872",
      subValue: "Tap to chat directly",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      bg: "bg-dark",
      text: "text-white",
      iconColor: "text-electric",
      link: "https://wa.me/919650331872"
    },
    {
      title: "Head Office / Call Us",
      value: "+91 96503 31872",
      subValue: "Tap to call directly",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      bg: "bg-white",
      text: "text-dark",
      iconColor: "text-electric",
      border: "border border-grey-200",
      link: "tel:+919650331872"
    },
    {
      title: "Email Support",
      value: "nexotekclean@gmail.com",
      subValue: "Response in 24 hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bg: "bg-electric",
      text: "text-white",
      iconColor: "text-white",
      link: "mailto:nexotekclean@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-electric mb-4">Connect With Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-tight">
            Ready to Build Your <br /> Profitable Car Wash?
          </h3>
          <p className="mt-4 text-grey-500 font-medium text-sm">
            Based in Noida & Ghaziabad, India. We deliver, install, and support automatic cleaning systems nationwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Inquiry Form / Success State */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-grey-50 p-10 md:p-12 rounded-[40px] border border-grey-200 shadow-sm text-center flex flex-col items-center justify-center min-h-[460px] animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-electric/10 text-electric rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-dark uppercase tracking-tight mb-4">Inquiry Received!</h4>
                <p className="text-sm text-grey-500 font-medium leading-relaxed max-w-md mb-8">
                  Thank you for reaching out to NexoTek. We have received your request regarding our equipment. One of our industrial system specialists will contact you at your phone number/email within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 bg-dark text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-electric transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-grey-50 p-10 md:p-12 rounded-[40px] border border-grey-200 shadow-sm">
                <div className="space-y-3">
                  <label className="text-xs font-black text-dark uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-6 py-5 bg-white border border-grey-200/50 rounded-2xl focus:ring-2 focus:ring-electric shadow-sm outline-none text-sm text-dark font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-dark uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 99999 99999"
                    className="w-full px-6 py-5 bg-white border border-grey-200/50 rounded-2xl focus:ring-2 focus:ring-electric shadow-sm outline-none text-sm text-dark font-medium"
                  />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="text-xs font-black text-dark uppercase tracking-widest ml-1">Service or Machine Interest</label>
                  <div className="relative">
                    <select
                      value={selectedInterest}
                      onChange={(e) => setSelectedInterest(e.target.value)}
                      className="w-full px-6 py-5 bg-white border border-grey-200/50 rounded-2xl focus:ring-2 focus:ring-electric shadow-sm outline-none text-sm text-dark font-medium appearance-none"
                    >
                      <option value="">Select a Machine / Product</option>
                      {productsData.map((prod) => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name} ({prod.sub})
                        </option>
                      ))}
                      <option value="maintenance">After-Sales Maintenance & Support</option>
                      <option value="detailing-chemical">Bulk Chemical & Consumable Orders</option>
                    </select>
                    {/* Select custom arrow */}
                    <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-grey-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="text-xs font-black text-dark uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your car wash site size, location, and requirements..."
                    className="w-full px-6 py-5 bg-white border border-grey-200/50 rounded-2xl focus:ring-2 focus:ring-electric shadow-sm outline-none text-sm text-dark font-medium"
                  ></textarea>
                </div>
                {error && (
                  <div className="md:col-span-2 text-xs font-bold text-red-600 bg-red-50 border border-red-200/50 px-6 py-4 rounded-xl">
                    {error}
                  </div>
                )}
                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-dark text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-electric disabled:bg-grey-300 disabled:cursor-not-allowed transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Contact Cards */}
          <div className="flex flex-col gap-6">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.link}
                className={`block p-8 rounded-[32px] hover:scale-103 hover:shadow-xl transition-all duration-300 ${card.bg} ${card.text} ${card.border || ""}`}
              >
                <div className={`mb-5 ${card.iconColor}`}>{card.icon}</div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{card.title}</h4>
                <p className="mt-2 text-lg md:text-xl font-black tracking-tight">{card.value}</p>
                <p className="text-xs opacity-80 mt-0.5 font-medium">{card.subValue}</p>
              </a>
            ))}

            {/* Premium Social Media Icons block */}
            <div className="p-8 rounded-[32px] border border-grey-200 bg-grey-50 flex items-center justify-between">
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-grey-400">Social Channels</h5>
                <p className="text-xs font-bold text-dark mt-1">Watch operations & news</p>
              </div>
              <div className="flex gap-3">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@NexoTekClean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-grey-200 text-red-600 flex items-center justify-center hover:bg-red-50 transition-colors"
                  aria-label="YouTube Channel"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/nexotek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-grey-200 text-blue-700 flex items-center justify-center hover:bg-blue-50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
