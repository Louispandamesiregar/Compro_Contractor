import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Tentang Kami</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">Profil Perusahaan</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              PT. Louis Pandame Siregar adalah perusahaan kontraktor yang berdedikasi tinggi dalam menyediakan layanan konstruksi berkualitas prima. Dengan pengalaman dan tim profesional yang handal, kami terus berinovasi untuk memenuhi dan melampaui harapan klien.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Integritas, profesionalisme, dan komitmen terhadap keselamatan kerja adalah nilai-nilai inti yang kami pegang teguh dalam setiap proyek yang kami tangani, dari skala kecil hingga mega proyek.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/portfolio/2.webp" 
              alt="Tentang PT Louis Pandame Siregar" 
              className="rounded-xl shadow-2xl object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl">
              <p className="text-secondary font-bold text-xl">10+ Tahun</p>
              <p className="text-secondary/80 text-sm font-medium">Pengalaman</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <Target className="h-12 w-12 text-primary mb-6" />
            <h4 className="text-xl font-bold text-secondary mb-3">Visi</h4>
            <p className="text-gray-600">
              Menjadi perusahaan kontraktor terkemuka dan terpercaya di Indonesia yang selalu mengedepankan kualitas dan kepuasan pelanggan.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <Lightbulb className="h-12 w-12 text-primary mb-6" />
            <h4 className="text-xl font-bold text-secondary mb-3">Misi</h4>
            <p className="text-gray-600">
              Memberikan pelayanan konstruksi terbaik dengan ketepatan waktu, efisiensi biaya, dan inovasi desain berkelanjutan.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <ShieldCheck className="h-12 w-12 text-primary mb-6" />
            <h4 className="text-xl font-bold text-secondary mb-3">Nilai Profesional</h4>
            <p className="text-gray-600">
              Integritas tinggi, fokus pada keselamatan kerja (K3), dan kolaborasi transparan dengan semua pemangku kepentingan proyek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
