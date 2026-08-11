import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl tracking-wider mb-4">
              PT. LOUIS PANDAME<span className="text-primary"> SIREGAR</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Perusahaan kontraktor profesional dan terpercaya yang berkomitmen memberikan hasil terbaik untuk setiap proyek konstruksi Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="#hero" className="hover:text-primary transition-colors text-sm">Beranda</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors text-sm">Tentang Kami</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors text-sm">Layanan</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors text-sm">Portofolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">0857-7999-1402</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">louispandame@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PT. Louis Pandame Siregar. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
