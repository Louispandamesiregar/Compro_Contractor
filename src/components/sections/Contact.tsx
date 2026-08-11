import { MessageSquare, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const waNumber = "6285779991402";
  const waMessage = "Halo tim PT. Louis Pandame Siregar, saya ingin berdiskusi mengenai kebutuhan proyek konstruksi saya.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const emailUrl = "mailto:louispandame@gmail.com";

  return (
    <section id="contact" className="relative bg-secondary py-32 overflow-hidden">
      {/* Geometric background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl border-l-8 border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information */}
            <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="inline-block bg-primary px-4 py-1 mb-8">
                <span className="text-secondary font-bold tracking-widest text-sm uppercase">Mari Berdiskusi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 uppercase tracking-tight">Mulai Proyek <br/>Anda Hari Ini</h2>
              <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                Punya rencana proyek konstruksi? Hubungi kami hari ini untuk konsultasi gratis dan penawaran terbaik.
              </p>

              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="bg-gray-100 p-4 mr-6 group-hover:bg-primary transition-colors">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary text-lg mb-1 uppercase tracking-wide">Kantor Pusat</h4>
                    <p className="text-gray-600">Jakarta, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-100 p-4 mr-6 group-hover:bg-primary transition-colors">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary text-lg mb-1 uppercase tracking-wide">Telepon & WhatsApp</h4>
                    <p className="text-gray-600">0857-7999-1402</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-100 p-4 mr-6 group-hover:bg-primary transition-colors">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary text-lg mb-1 uppercase tracking-wide">Email</h4>
                    <p className="text-gray-600">louispandame@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="p-12 lg:p-20 bg-gray-50 flex flex-col justify-center space-y-6 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-black text-secondary mb-8 uppercase tracking-wide">Hubungi Langsung</h3>
              
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white border-2 border-secondary/10 hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                <div className="relative z-10 flex items-center w-full">
                  <div className="bg-green-500 p-4 mr-6 group-hover:bg-white transition-colors">
                    <MessageSquare className="h-8 w-8 text-white group-hover:text-green-500" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-black text-secondary group-hover:text-white text-lg mb-1 uppercase tracking-wide transition-colors">WhatsApp</h4>
                    <p className="text-gray-500 group-hover:text-green-50 transition-colors text-sm font-medium uppercase tracking-wider">Chat Sekarang</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>

              <a 
                href={emailUrl}
                className="flex items-center p-6 bg-white border-2 border-secondary/10 hover:border-secondary hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                <div className="relative z-10 flex items-center w-full">
                  <div className="bg-secondary p-4 mr-6 group-hover:bg-primary transition-colors">
                    <Mail className="h-8 w-8 text-white group-hover:text-secondary" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-black text-secondary group-hover:text-white text-lg mb-1 uppercase tracking-wide transition-colors">Kirim Email</h4>
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm font-medium uppercase tracking-wider">Proposal Resmi</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
