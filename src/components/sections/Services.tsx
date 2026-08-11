import servicesData from "@/data/services.json";
import { Building2, Briefcase, Hammer, Shield } from "lucide-react";
import { Service } from "@/types";

// Helper to map string icon names to actual Lucide components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Building2":
      return <Building2 className="w-12 h-12 text-primary" />;
    case "Briefcase":
      return <Briefcase className="w-12 h-12 text-primary" />;
    case "Hammer":
      return <Hammer className="w-12 h-12 text-primary" />;
    default:
      return <Shield className="w-12 h-12 text-primary" />;
  }
};

export default function Services() {
  const services: Service[] = servicesData;

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Layanan Kami</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menawarkan berbagai solusi konstruksi terpadu yang dirancang khusus untuk memenuhi standar industri dan spesifikasi unik proyek Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-gray-50 w-20 h-20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {getIcon(service.iconName)}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
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
