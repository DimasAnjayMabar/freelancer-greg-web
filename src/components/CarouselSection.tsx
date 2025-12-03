import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useInView } from "framer-motion";
import { Download, ExternalLink, Github, Instagram, MessageCircle } from "lucide-react";
import { websiteTypes } from "./PortfolioData.js";

const CarouselItem = ({ item, isActive, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Gunakan useMemo untuk menghindari rekomputasi style
  const itemStyle = useMemo(() => ({
    transform: isInView ? "none" : "translateY(30px)",
    opacity: isInView ? 1 : 0,
    transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms, opacity 0.6s ease ${index * 50}ms`,
  }), [isInView, index]);

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-full max-w-md sm:max-w-lg md:max-w-xl ${
        isActive
          ? "scale-95 z-10"
          : "scale-110 opacity-80"
      }`}
      style={itemStyle}
    >
      <div
        className={`bg-[#252525] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
          isActive ? "border-2 border-[#e8e8e8]/20" : ""
        }`}
      >
        {/* Preview */}
        <div className="relative h-48">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-48 object-cover rounded-t-3xl"
          />
        </div>

        {/* Konten bawah */}
        <div className="p-6 flex flex-col space-y-4">
          {/* Judul */}
          <h3 className="text-xl font-bold text-[#e8e8e8]">{item.title}</h3>

          {/* Deskripsi dengan scroll jika terlalu panjang */}
          <div className="max-h-32 overflow-y-auto pr-2 custom-scrollbar">
            <p className="text-[#cccccc] text-sm leading-relaxed whitespace-pre-line">
              {item.description}
            </p>
          </div>

          {/* Tombol-tombol */}
          <div className="flex flex-col space-y-3 mt-auto">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 
                           bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                           font-semibold rounded-full 
                           hover:from-blue-700 hover:to-blue-800 
                           transition-all duration-300 hover:scale-105 shadow-md"
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
                           transition-all duration-300 hover:scale-105 shadow-md"
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
                           transition-all duration-300 hover:scale-105 shadow-md"
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // pakai data dari TypesSection
  const portfolioItems = websiteTypes;

  // Gunakan useCallback untuk menghindari rekreasi fungsi pada setiap render
  const handleDotClick = useCallback((index) => {
    setIsTransitioning(true);
    requestAnimationFrame(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hidden) return; // Jangan jalankan saat tab tidak aktif
      
      setIsTransitioning(true);
      requestAnimationFrame(() => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
        setTimeout(() => setIsTransitioning(false), 500);
      });
    }, 10000); // Perpanjang interval menjadi 10 detik untuk mengurangi beban

    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  const getVisibleItems = useCallback(() => {
    if (isTransitioning) return [];
    
    const items = [];
    const totalItems = portfolioItems.length;
    
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    items.push({ ...portfolioItems[prevIndex], position: 'left' });
    
    items.push({ ...portfolioItems[currentIndex], position: 'center' });
    
    const nextIndex = (currentIndex + 1) % totalItems;
    items.push({ ...portfolioItems[nextIndex], position: 'right' });
    
    return items;
  }, [currentIndex, isTransitioning, portfolioItems]);

  const visibleItems = getVisibleItems();

  // Optimasi style dengan useMemo
  const titleStyle = useMemo(() => ({
    transform: isInView ? "none" : "translateY(30px)",
    opacity: isInView ? 1 : 0,
    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease"
  }), [isInView]);

  const subtitleStyle = useMemo(() => ({
    transform: isInView ? "none" : "translateY(30px)",
    opacity: isInView ? 1 : 0,
    transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, opacity 0.7s ease 0.1s"
  }), [isInView]);

  const ctaStyle = useMemo(() => ({
    transform: isInView ? "none" : "translateY(20px)",
    opacity: isInView ? 1 : 0,
    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 0.6s ease 0.2s"
  }), [isInView]);

  const buttonsStyle = useMemo(() => ({
    transform: isInView ? "none" : "translateY(20px)",
    opacity: isInView ? 1 : 0,
    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.6s ease 0.3s"
  }), [isInView]);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-[#252525] to-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-5xl font-bold text-[#e8e8e8] mb-4"
            style={titleStyle}
          >
            MY PREVIOUS PROJECT
          </h2>
          <p
            className="text-lg text-[#cccccc] max-w-3xl mx-auto"
            style={subtitleStyle}
          >
            Press dots below card to shift project
          </p>
        </div>

        {/* Container carousel */}
        <div className="flex justify-center items-start min-h-[480px] lg:min-h-[520px] py-4">
          <div className="flex items-center justify-center gap-4 lg:gap-6">
            {visibleItems.map((item, index) => (
              <CarouselItem 
                key={`${item.id}-${currentIndex}-${index}`} 
                item={item} 
                isActive={item.position === 'center'}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Dot navigasi */}
        <div className="flex justify-center mt-12 space-x-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#e8e8e8] text-[#252525] scale-110'
                  : 'bg-[#e8e8e8]/40 text-[#252525]/70 hover:bg-[#e8e8e8]/60'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p 
          className="text-[#cccccc] mb-6"
          style={ctaStyle}
        >
          Need a custom solution?
        </p>
        <div 
          className="flex justify-center gap-4"
          style={buttonsStyle}
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/0895340299650"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-md"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
          
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/cariajagreg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Instagram
          </a>
        </div>
      </div>

      {/* CSS untuk scrollbar kustom */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #666;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #888;
        }
      `}</style>
    </section>
  );
};