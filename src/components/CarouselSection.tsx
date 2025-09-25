import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Download, ExternalLink, Github, Instagram, MessageCircle } from "lucide-react";
import { websiteTypes } from "./PortfolioData.js";

const CarouselItem = ({ item, isActive, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-80 transition-all duration-700 ease-out ${
        isActive
          ? "scale-95 z-10 h-auto transform-gpu" // card tengah lebih kecil
          : "scale-110 opacity-80 h-auto transform-gpu" // card kiri & kanan lebih besar
      }`}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 100}ms`,
      }}
    >
      <div
        className={`bg-[#252525] rounded-3xl overflow-hidden shadow-2xl h-full transition-all duration-700 ease-out ${
          isActive ? "border-2 border-[#e8e8e8]/20" : ""
        }`}
      >
        {/* Preview */}
        <div className="relative h-48">
          <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
        </div>

        {/* Konten bawah */}
        <div className="p-6 flex flex-col space-y-4">
          {/* Judul */}
          <h3 className="text-xl font-bold text-[#e8e8e8]">{item.title}</h3>

          {/* Deskripsi */}
          <p className="text-[#cccccc] text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Tombol-tombol */}
          <div className="flex flex-col space-y-3">
            {item.link && (
              <a
                href={item.link}
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

            {item.github && (
              <a
                href={item.github}
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

            {item.apk && (
              <a
                href={item.apk}
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
    </div>
  );
};

export const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // pakai data dari TypesSection
  const portfolioItems = websiteTypes;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
        setTimeout(() => setIsTransitioning(false), 700);
      }, 100);
    }, 15000);
    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  const getVisibleItems = () => {
    if (isTransitioning) return [];
    
    const items = [];
    const totalItems = portfolioItems.length;
    
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    items.push({ ...portfolioItems[prevIndex], position: 'left' });
    
    items.push({ ...portfolioItems[currentIndex], position: 'center' });
    
    const nextIndex = (currentIndex + 1) % totalItems;
    items.push({ ...portfolioItems[nextIndex], position: 'right' });
    
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#252525] to-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-6xl font-bold text-[#e8e8e8] mb-4"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
            }}
          >
            MY PREVIOUS PROJECT
          </h2>
           <p
              className="text-xl text-[#cccccc] max-w-3xl mx-auto"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}
            >
              Press dots below card to shift project
            </p>
        </div>

        <div className="flex justify-center items-center h-[500px]">
          <div className="flex items-center justify-center space-x-6 lg:space-x-8">
            {visibleItems.map((item, index) => (
              <CarouselItem 
                key={`${item.id}-${currentIndex}`} 
                item={item} 
                isActive={item.position === 'center'}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }, 100);
              }}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-500 ease-out ${
                index === currentIndex
                  ? 'bg-[#e8e8e8] text-[#252525] scale-125'
                  : 'bg-[#e8e8e8]/40 text-[#252525]/70 hover:bg-[#e8e8e8]/60'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
          <p 
            className="text-[#cccccc] mb-6"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
          >
            Need a custom solution?
          </p>
          <div 
            className="flex justify-center space-x-4"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/0895340299650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/cariajagreg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </a>
          </div>
        </div>
    </section>
  );
};
