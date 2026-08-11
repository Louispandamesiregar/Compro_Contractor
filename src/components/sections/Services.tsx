import servicesData from "@/data/services.json";
import { Building2, Briefcase, Hammer, Shield } from "lucide-react";
import { Service } from "@/types";

// Helper to map string icon names to actual Lucide components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Building2":
      return <Building2 className="w-10 h-10 text-primary" />;
    case "Briefcase":
      return <Briefcase className="w-10 h-10 text-primary" />;
    case "Hammer":
      return <Hammer className="w-10 h-10 text-primary" />;
    default:
      return <Shield className="w-10 h-10 text-primary" />;
  }
};

export default function Services() {
  const services: Service[] = servicesData;

  return (
    <section id="services" className="relative">
      {/* Split Background (Top secondary, Bottom light gray) */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-[60%] bg-secondary"></div>
        <div className="h-[40%] bg-gray-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="text-center mb-16 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Layanan Kami</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Kami menawarkan berbagai solusi konstruksi terpadu yang dirancang khusus untuk memenuhi standar industri dan spesifikasi unik proyek Anda.
          </p>
        </div>

        {/* Overlapping Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-secondary transition-all shadow-sm">
                <div className="group-hover:brightness-0 transition-all">
                  {getIcon(service.iconName)}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
