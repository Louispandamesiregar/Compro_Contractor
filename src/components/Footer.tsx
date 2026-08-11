import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 pt-20 pb-10 border-t-8 border-primary relative overflow-hidden">
      {/* Geometric background accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5" style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-black text-2xl tracking-tighter uppercase mb-6 flex items-center">
              LOUIS PANDAME<span className="text-primary ml-2">SIREGAR</span>
            </h3>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-sm leading-relaxed mb-6 font-medium">
              Perusahaan kontraktor profesional dan terpercaya yang berkomitmen memberikan hasil terbaik untuk setiap proyek konstruksi Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6">Tautan Cepat</h4>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <ul className="space-y-3">
              <li><Link href="#hero" className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide flex items-center"><span className="w-2 h-2 bg-primary mr-2"></span>Beranda</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide flex items-center"><span className="w-2 h-2 bg-primary mr-2"></span>Tentang Kami</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide flex items-center"><span className="w-2 h-2 bg-primary mr-2"></span>Layanan</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-wide flex items-center"><span className="w-2 h-2 bg-primary mr-2"></span>Portofolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6">Kontak Kami</h4>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 mr-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold mt-2">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 mr-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold">0857-7999-1402</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 mr-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold">louispandame@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} PT. Louis Pandame Siregar.</p>
          <p className="mt-2 md:mt-0 text-primary">Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
