import servicesData from "@/data/services.json";
import { Building2, Briefcase, Hammer, Shield } from "lucide-react";
import { Service } from "@/types";

// Helper to map string icon names to actual Lucide components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Building2":
      return <Building2 className="w-12 h-12 text-white" />;
    case "Briefcase":
      return <Briefcase className="w-12 h-12 text-white" />;
    case "Hammer":
      return <Hammer className="w-12 h-12 text-white" />;
    default:
      return <Shield className="w-12 h-12 text-white" />;
  }
};

export default function Services() {
  const services: Service[] = servicesData;

  return (
    <section id="services" className="relative bg-white py-32 overflow-hidden">
      {/* Abstract Diagonal Background */}
      <div className="absolute inset-0 z-0 bg-secondary" style={{ clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 pt-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Layanan Konstruksi</h2>
            <div className="w-32 h-2 bg-primary"></div>
          </div>
          <p className="text-gray-300 mt-6 md:mt-0 max-w-md border-l-2 border-primary pl-4 text-lg">
            Solusi konstruksi terpadu yang dirancang khusus untuk memenuhi standar industri dan spesifikasi unik proyek Anda.
          </p>
        </div>

        {/* Sharp Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-8 border-white bg-white">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white p-12 hover:bg-gray-50 transition-all duration-300 group border-b md:border-b-0 ${index !== services.length - 1 ? 'md:border-r' : ''} border-gray-200 relative overflow-hidden`}
            >
              {/* Hover Abstract Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary transform translate-x-12 -translate-y-12 rotate-45 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="bg-secondary w-20 h-20 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-300 shadow-lg">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
