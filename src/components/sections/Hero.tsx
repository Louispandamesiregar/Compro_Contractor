"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pb-48 pt-48 md:pt-64 md:pb-64 flex items-center justify-center bg-secondary" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary/80 z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5IDU5TDEgMVY1OUg1OVoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] z-20 mix-blend-overlay animate-pulse"></div>
        <Image
          src="/Compro_Contractor/images/portfolio/1.webp"
          alt="Hero Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 text-center px-4 max-w-6xl mx-auto"
      >
        <div className="inline-block bg-primary px-4 py-1 mb-8">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase">Kualitas & Presisi</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">
          Membangun Masa Depan <br className="hidden md:block"/>
          <span className="text-primary">Struktur Kokoh</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed border-l-4 border-primary pl-4 text-left inline-block">
          PT. Louis Pandame Siregar hadir sebagai mitra kontraktor profesional untuk mewujudkan proyek konstruksi impian Anda dengan standar tertinggi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-primary text-secondary font-black hover:bg-yellow-400 active:scale-95 transition-all flex items-center group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Lihat Portofolio <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-black hover:bg-white hover:text-secondary active:scale-95 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Hubungi Kami</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
