import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CarouselItem = ({ item, isActive, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div 
      ref={ref}
      className={`flex-shrink-0 w-80 transition-all duration-700 ease-out ${
        isActive 
          ? 'scale-110 z-10 h-96 transform-gpu' 
          : 'scale-95 opacity-80 h-88 transform-gpu'
      }`}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 100}ms`
      }}
    >
      <div className={`bg-[#252525] rounded-3xl overflow-hidden shadow-2xl h-full transition-all duration-700 ease-out ${
        isActive ? 'border-2 border-[#e8e8e8]/20' : ''
      }`}>
        <div className="relative overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
            <div className="absolute bottom-4 left-4 right-4">
              <button className="w-full bg-[#252525]/90 backdrop-blur-md text-[#e8e8e8] py-3 rounded-lg hover:bg-[#353535] transition-all duration-300 ease-out flex items-center justify-center text-sm transform-gpu hover:scale-105">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#e8e8e8] mb-2">{item.title}</h3>
          <p className="text-[#cccccc] text-sm mb-4 leading-relaxed">{item.description}</p>
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
  
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern online store with advanced features and seamless user experience."
    },
    {
      id: 2,
      title: "Restaurant Website",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant dining experience showcase with reservation system."
    },
    {
      id: 3,
      title: "Corporate Portfolio",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional business presentation with modern design elements."
    },
    {
      id: 4,
      title: "Creative Agency",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Bold and innovative design approach for creative professionals."
    },
    {
      id: 5,
      title: "Tech Startup",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cutting-edge technology showcase with responsive design."
    }
  ];

  // Auto-moving carousel dengan transisi yang lebih halus
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Tunggu sebentar untuk memulai transisi
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
        
        // Setelah transisi selesai, reset status transitioning
        setTimeout(() => setIsTransitioning(false), 700);
      }, 100);
      
    }, 15000); // Durasi lebih panjang untuk transisi yang lebih halus

    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  // Hitung item yang akan ditampilkan
  const getVisibleItems = () => {
    if (isTransitioning) return [];
    
    const items = [];
    const totalItems = portfolioItems.length;
    
    // Item sebelumnya
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    items.push({ ...portfolioItems[prevIndex], position: 'left' });
    
    // Item saat ini (tengah)
    items.push({ ...portfolioItems[currentIndex], position: 'center' });
    
    // Item berikutnya
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
            YOU MIGHT LIKE IT
          </h2>
          <p 
            className="text-xl text-[#cccccc] mb-8"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
            }}
          >
            PICK AND CHOOSE WHAT YOU WANT
          </p>
        </div>

        {/* Carousel Container */}
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

        {/* Dots Indicator */}
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
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                index === currentIndex 
                  ? 'bg-[#e8e8e8] scale-125' 
                  : 'bg-[#e8e8e8]/40 hover:bg-[#e8e8e8]/60'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#353535] to-[#252525] text-[#e8e8e8] font-semibold rounded-full hover:from-[#454545] hover:to-[#353535] transition-all duration-500 ease-out hover:scale-105 shadow-lg transform-gpu">
            view more
            <ExternalLink className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};