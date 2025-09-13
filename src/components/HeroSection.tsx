import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const words = ["LET'S", "DIVE", "THROUGH"];
const fullText = "LET'S DIVE THROUGH";

export const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    if (showFullText) return;

    const timeouts = [900, 1200, 900];

    const timeout = setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prev) => prev + 1);
      } else {
        // Semua kata selesai, lalu full text muncul
        setTimeout(() => setShowFullText(true), 500);
      }
    }, timeouts[currentWordIndex]);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, showFullText]);

  // Trigger CTA setelah fullText selesai fade in
  useEffect(() => {
    if (showFullText) {
      const ctaTimeout = setTimeout(() => setShowCTA(true), 1200); 
      return () => clearTimeout(ctaTimeout);
    }
  }, [showFullText]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#252525] to-[#1a1a1a] overflow-hidden flex items-center justify-center px-6">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        
        {/* Teks kiri */}
        <div className="flex-1 flex justify-center md:justify-start mb-12 md:mb-0">
          <div className="text-left leading-tight">
            <AnimatePresence mode="wait">
              {!showFullText ? (
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 0.77, 0.47, 0.97],
                  }}
                  className="block text-6xl md:text-8xl font-extrabold text-[#e8e8e8]"
                >
                  {words[currentWordIndex]}
                </motion.span>
              ) : (
                <motion.span
                  key="full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="block text-6xl md:text-8xl font-extrabold text-[#e8e8e8]"
                >
                  {fullText}
                </motion.span>
              )}
            </AnimatePresence>

            {/* CTA Button fade-in setelah animasi selesai */}
            <AnimatePresence>
              {showCTA && (
                <motion.div
                  key="cta-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8 }}
                  className="mt-8"
                >
                  <Link
                    to="/services"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-[#353535] to-[#252525] hover:from-[#454545] hover:to-[#353535] text-[#e8e8e8] text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    Check our services
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Gambar kanan super besar */}
        <div className="flex-1 flex justify-center md:justify-end h-[60vh] md:h-[80vh] group">
          <div className="w-full h-full rounded-3xl overflow-hidden bg-[#252525] shadow-2xl flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Professional business team"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#353535] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-[#353535] rounded-full opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#353535] rounded-full opacity-7 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};