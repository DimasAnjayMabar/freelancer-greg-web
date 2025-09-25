import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Download } from "lucide-react";
import { websiteTypes, PortfolioItem } from "./PortfolioData";

const TypeCard = ({ type, index }: { type: PortfolioItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      key={type.id}
      className="group bg-[#252525] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 200}ms`,
      }}
    >
      {type.image && (
        <div className="relative overflow-hidden">
          <img
            src={type.image}
            alt={type.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#e8e8e8] mb-4">{type.title}</h3>
        <p className="text-[#cccccc] mb-6 leading-relaxed">{type.description}</p>

       <div className="flex flex-col space-y-3">
            {type.link && (
              <a
                href={type.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 
                           bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                           font-semibold rounded-full 
                           hover:from-blue-700 hover:to-blue-800 
                           transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Website
              </a>
            )}

            {type.github && (
              <a
                href={type.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 
                           bg-gradient-to-r from-gray-700 to-gray-800 text-white 
                           font-semibold rounded-full 
                           hover:from-gray-800 hover:to-gray-900 
                           transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            )}

            {type.apk && (
              <a
                href={type.apk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 
                           bg-gradient-to-r from-green-600 to-green-700 text-white 
                           font-semibold rounded-full 
                           hover:from-green-700 hover:to-green-800 
                           transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download APK
              </a>
            )}
          </div>
      </div>
    </div>
  );
};

export const TypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#252525] to-[#1a1a1a]">
      <div className="w-full min-h-screen mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-[#e8e8e8] mb-8"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}
          >
            LET'S PICK AND CHOOSE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {websiteTypes.map((type, index) => (
            <TypeCard key={type.id} type={type} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
