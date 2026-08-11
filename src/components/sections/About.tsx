import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative z-30 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Floating Tumpang Tindih Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 -mt-32 border border-gray-100">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Tentang Kami</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Profil Perusahaan</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                PT. Louis Pandame Siregar adalah perusahaan kontraktor yang berdedikasi tinggi dalam menyediakan layanan konstruksi berkualitas prima. Dengan pengalaman dan tim profesional yang handal, kami terus berinovasi untuk memenuhi dan melampaui harapan klien.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Integritas, profesionalisme, dan komitmen terhadap keselamatan kerja adalah nilai-nilai inti yang kami pegang teguh dalam setiap proyek yang kami tangani, dari skala kecil hingga mega proyek.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
              <img 
                src="/images/portfolio/2.webp" 
                alt="Tentang PT Louis Pandame Siregar" 
                className="relative z-10 rounded-2xl shadow-lg object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-primary p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-white">
                <span className="text-secondary font-black text-3xl">10+</span>
                <span className="text-secondary/90 text-sm font-bold uppercase tracking-wider mt-1">Tahun Pengalaman</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="bg-white p-4 rounded-xl inline-block shadow-sm mb-6 group-hover:bg-primary/10 group-hover:shadow-md transition-all">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Visi</h4>
              <p className="text-gray-600">
                Menjadi perusahaan kontraktor terkemuka dan terpercaya di Indonesia yang selalu mengedepankan kualitas dan kepuasan pelanggan.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="bg-white p-4 rounded-xl inline-block shadow-sm mb-6 group-hover:bg-primary/10 group-hover:shadow-md transition-all">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Misi</h4>
              <p className="text-gray-600">
                Memberikan pelayanan konstruksi terbaik dengan ketepatan waktu, efisiensi biaya, dan inovasi desain berkelanjutan.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="bg-white p-4 rounded-xl inline-block shadow-sm mb-6 group-hover:bg-primary/10 group-hover:shadow-md transition-all">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Nilai Profesional</h4>
              <p className="text-gray-600">
                Integritas tinggi, fokus pada keselamatan kerja (K3), dan kolaborasi transparan dengan semua pemangku kepentingan proyek.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
