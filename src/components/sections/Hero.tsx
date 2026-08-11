import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pb-40 pt-48 md:pt-64 md:pb-56 flex items-center justify-center bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/70 z-10" />
        <img
          src="/images/portfolio/1.webp"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Membangun Masa Depan <br className="hidden md:block"/>
          <span className="text-primary">Dengan Kualitas</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          PT. Louis Pandame Siregar hadir sebagai mitra kontraktor profesional untuk mewujudkan proyek konstruksi impian Anda dengan standar tertinggi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-yellow-400 transition-all flex items-center shadow-xl shadow-primary/20 hover:-translate-y-1"
          >
            Lihat Portofolio <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white transition-all hover:-translate-y-1"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
