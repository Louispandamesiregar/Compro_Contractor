import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative z-30 pb-24 px-4 sm:px-6 lg:px-8 -mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Floating Geometric Card */}
        <div className="bg-white p-8 md:p-12 lg:p-16 border-t-8 border-primary shadow-2xl relative">
          
          <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-gray-100 pb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight">Tentang Kami</h2>
              <div className="w-24 h-2 bg-primary mt-4"></div>
            </div>
            <p className="text-gray-500 font-bold tracking-widest uppercase mt-4 md:mt-0">Profil Perusahaan</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              {/* Abstract Background Elements */}
              <div className="absolute -inset-4 bg-gray-100 transform skew-y-3 z-0"></div>
              <div className="absolute -inset-4 bg-primary transform -skew-y-3 z-0 translate-x-4 translate-y-4 opacity-20"></div>
              
              <img 
                src="/images/portfolio/2.webp" 
                alt="Tentang PT Louis Pandame Siregar" 
                className="relative z-10 object-cover h-[450px] w-full transition-all duration-700"
              />
              
              {/* Stat Box */}
              <div className="absolute -bottom-8 -right-8 z-20 bg-primary p-8 flex flex-col items-center justify-center border-8 border-white">
                <span className="text-secondary font-black text-5xl">10+</span>
                <span className="text-secondary font-bold uppercase tracking-widest mt-2 text-xs">Tahun</span>
              </div>
            </div>

            <div className="z-10 lg:pl-8">
              <h3 className="text-3xl font-black text-secondary mb-6 uppercase">Pondasi Kepercayaan</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg border-l-2 border-primary pl-4">
                PT. Louis Pandame Siregar adalah perusahaan kontraktor yang berdedikasi tinggi dalam menyediakan layanan konstruksi berkualitas prima. Dengan pengalaman dan tim profesional yang handal, kami terus berinovasi untuk memenuhi dan melampaui harapan klien.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg bg-gray-50 p-6 border border-gray-100">
                Integritas, profesionalisme, dan komitmen terhadap keselamatan kerja adalah nilai-nilai inti yang kami pegang teguh dalam setiap proyek yang kami tangani, dari skala kecil hingga mega proyek.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 bg-gray-50">
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-primary group transition-colors duration-300">
              <div className="bg-secondary p-4 inline-block mb-8 group-hover:bg-white transition-colors">
                <Target className="h-10 w-10 text-white group-hover:text-secondary" />
              </div>
              <h4 className="text-2xl font-black text-secondary mb-4 uppercase group-hover:text-secondary">Visi</h4>
              <p className="text-gray-600 group-hover:text-secondary/90">
                Menjadi perusahaan kontraktor terkemuka dan terpercaya di Indonesia yang selalu mengedepankan kualitas dan kepuasan pelanggan.
              </p>
            </div>
            
            <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-primary group transition-colors duration-300">
              <div className="bg-secondary p-4 inline-block mb-8 group-hover:bg-white transition-colors">
                <Lightbulb className="h-10 w-10 text-white group-hover:text-secondary" />
              </div>
              <h4 className="text-2xl font-black text-secondary mb-4 uppercase group-hover:text-secondary">Misi</h4>
              <p className="text-gray-600 group-hover:text-secondary/90">
                Memberikan pelayanan konstruksi terbaik dengan ketepatan waktu, efisiensi biaya, dan inovasi desain berkelanjutan.
              </p>
            </div>
            
            <div className="p-10 hover:bg-primary group transition-colors duration-300">
              <div className="bg-secondary p-4 inline-block mb-8 group-hover:bg-white transition-colors">
                <ShieldCheck className="h-10 w-10 text-white group-hover:text-secondary" />
              </div>
              <h4 className="text-2xl font-black text-secondary mb-4 uppercase group-hover:text-secondary">Nilai</h4>
              <p className="text-gray-600 group-hover:text-secondary/90">
                Integritas tinggi, fokus pada keselamatan kerja (K3), dan kolaborasi transparan dengan semua pemangku kepentingan proyek.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
