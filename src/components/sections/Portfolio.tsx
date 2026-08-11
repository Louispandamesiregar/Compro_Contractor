import portfolioData from "@/data/portfolio.json";
import { Project } from "@/types";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects: Project[] = portfolioData;

  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 text-center">
          <div className="inline-block bg-primary px-4 py-1 mb-6">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase">Karya Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 uppercase tracking-tight">Galeri Proyek</h2>
          <div className="w-24 h-2 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                />
              </div>
              
              {/* Sharp Diagonal Overlay */}
              <div className="absolute inset-0 bg-primary/95 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-8" style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)" }}>
                <span className="text-secondary font-black text-xs mb-3 uppercase tracking-widest border-b border-secondary/30 pb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-black text-secondary mb-3 leading-tight uppercase">{project.title}</h3>
                <p className="text-secondary/80 text-sm mb-6 font-medium">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-black text-secondary bg-white px-3 py-1">{project.year}</span>
                  <div className="bg-secondary p-2 group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
