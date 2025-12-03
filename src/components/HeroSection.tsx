import React from "react";
import { motion } from "framer-motion";
import FloatingLines from './FloatingLines';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#252525] to-[#1a1a1a] overflow-hidden">
      {/* FloatingLines background */}
      <div className="absolute inset-0">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <FloatingLines 
            enabledWaves={['top', 'middle', 'bottom']}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={[10, 15, 20]}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pointer-events-none">
        
        {/* Judul dengan animasi fade-in */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-lg mb-10"
          style={{ textShadow: "3px 3px 10px rgba(0,0,0,0.8)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          LET&apos;S DIVE THROUGH
        </motion.h1>

        {/* Animated scroll arrow */}
        <motion.div
          className="absolute bottom-10 flex justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};