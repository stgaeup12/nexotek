import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Logo showScrolledState={false} className="h-6 md:h-7" />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Industrial-grade vehicle washing systems and lifts. Advanced engineering, expert support.
            </p>
            {/* Social media icons */}
            <div className="flex gap-4 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919650331872"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006 0-3.973-.504-5.735-1.464L0 24zm6.082-3.568l.354.21c1.554.92 3.464 1.406 5.42 1.408 5.405 0 9.803-4.381 9.805-9.761.002-2.607-1.012-5.059-2.859-6.908-1.847-1.847-4.3-2.865-6.91-2.867-5.41 0-9.807 4.383-9.809 9.764-.001 2.014.526 3.984 1.528 5.72l.23.399-1.002 3.658 3.743-.977zm11.233-5.602c-.29-.146-1.72-.85-1.986-.948-.266-.098-.46-.146-.654.146-.193.291-.747.948-.916 1.14-.168.193-.337.218-.627.073-.29-.146-1.226-.452-2.335-1.442-.864-.772-1.448-1.725-1.618-2.016-.168-.291-.018-.448.127-.592.131-.13.29-.337.436-.506.145-.168.193-.289.29-.481.096-.193.048-.362-.024-.508-.073-.146-.654-1.579-.896-2.161-.235-.567-.474-.49-.654-.499-.168-.008-.362-.01-.555-.01-.193 0-.508.073-.773.362-.266.291-1.013.991-1.013 2.418 0 1.428 1.038 2.809 1.183 3.002.145.193 2.042 3.12 4.949 4.377.691.299 1.231.478 1.652.612.704.223 1.345.191 1.851.115.564-.084 1.72-.702 1.962-1.378.243-.677.243-1.258.17-1.378-.073-.121-.266-.193-.556-.339z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@NexoTekClean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-500 transition-colors"
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
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-white">Sitemap</h5>
            <ul className="space-y-4">
              <li><Link href="/" className="text-zinc-400 hover:text-electric text-sm transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-zinc-400 hover:text-electric text-sm transition-colors">About Us</Link></li>
              <li><Link href="/#products" className="text-zinc-400 hover:text-electric text-sm transition-colors">Wash Systems</Link></li>
              <li><Link href="/#contact" className="text-zinc-400 hover:text-electric text-sm transition-colors">Get a Quote</Link></li>
              <li><a href="/portfolio.pdf" download="Nexotek_Portfolio.pdf" className="text-zinc-400 hover:text-electric text-sm transition-colors">Download Portfolio</a></li>
            </ul>
          </div>

          {/* Solutions Category */}
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-white">Categories</h5>
            <ul className="space-y-4">
              <li><Link href="/#products" className="text-zinc-400 hover:text-electric text-sm transition-colors">Automatic Wash Plants</Link></li>
              <li><Link href="/#products" className="text-zinc-400 hover:text-electric text-sm transition-colors">Underbody Washers</Link></li>
              <li><Link href="/#products" className="text-zinc-400 hover:text-electric text-sm transition-colors">Lifts & Car Pumps</Link></li>
              <li><Link href="/#products" className="text-zinc-400 hover:text-electric text-sm transition-colors">Vacuum & Detailing</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h5>
            <ul className="space-y-4">
              <li className="text-zinc-400 text-sm font-medium">+91 96503 31872</li>
              <li className="text-zinc-400 text-sm font-medium">nexotekclean@gmail.com</li>
              <li className="text-zinc-400 text-sm leading-relaxed">
                Noida & Ghaziabad,<br />Uttar Pradesh, India
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">
            © 2026 Nexotek Advanced Cleaning Systems. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-zinc-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-zinc-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
