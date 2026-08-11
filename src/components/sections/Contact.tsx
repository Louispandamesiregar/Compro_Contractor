import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const waNumber = "6285779991402";
  const waMessage = "Halo tim PT. Louis Pandame Siregar, saya ingin berdiskusi mengenai kebutuhan proyek konstruksi saya.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const emailUrl = "mailto:louispandame@gmail.com";

  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information */}
            <div className="bg-secondary p-12 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-4">Mari Berdiskusi</h2>
              <p className="text-gray-300 mb-12 leading-relaxed">
                Punya rencana proyek konstruksi? Hubungi kami hari ini untuk konsultasi gratis dan penawaran terbaik.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-6">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Kantor Pusat</h4>
                    <p className="text-gray-300">Jakarta, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-6">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Telepon & WhatsApp</h4>
                    <p className="text-gray-300">0857-7999-1402</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-6">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-300">louispandame@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">Hubungi Langsung</h3>
              
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-green-50 rounded-xl border border-green-100 hover:border-green-300 hover:shadow-md transition-all group"
              >
                <div className="bg-green-500 p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Chat via WhatsApp</h4>
                  <p className="text-gray-600">Respon cepat dari tim kami</p>
                </div>
              </a>

              <a 
                href={emailUrl}
                className="flex items-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="bg-blue-600 p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Kirim Email</h4>
                  <p className="text-gray-600">Untuk proposal dan penawaran resmi</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
