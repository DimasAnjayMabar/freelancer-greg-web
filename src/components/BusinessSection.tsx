import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const FeatureItem = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div 
      ref={ref}
      className="flex items-start group"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`
      }}
    >
      <div className="bg-[#252525] p-3 rounded-xl mr-4 group-hover:bg-[#353535] transition-all duration-300 ease-out">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-[#e8e8e8] group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-[#cccccc] group-hover:text-[#e8e8e8] transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

export const BusinessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#252525] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Card Gambar Besar */}
          <div 
            className="w-full lg:w-1/2 h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl group"
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional business meeting" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          
          {/* Konten Teks */}
          <div className="w-full lg:w-1/2">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e8e8] mb-8"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
              }}
            >
              READY TO MAKE YOUR BUSINESS PROFESSIONAL
            </h2>
            <p 
              className="text-lg md:text-xl text-[#e8e8e8] leading-relaxed mb-8"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}
            >
              Ready to turn your business into a professional online presence that drives results? 
              Together, we'll create a website that's engaging, easy to use, and powerful enough 
              to boost your performance and attract new customers.
            </p>
            
            {/* Additional Info */}
            <div className="space-y-6">  
              <FeatureItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Lightning Fast"
                description="Optimized for speed and performance across all devices"
                delay={300}
              />
              
              <FeatureItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                title="Scalable Solutions"
                description="Grow your business without technical limitations"
                delay={400}
              />
            </div>
            
            {/* CTA Button */}
            <div
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              <button className="mt-8 bg-gradient-to-r from-[#353535] to-[#252525] hover:from-[#454545] hover:to-[#353535] text-[#e8e8e8] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};