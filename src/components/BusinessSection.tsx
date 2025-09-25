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
              src="/png/profile.jpg" 
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
              CRAFTING DIGITAL EXPERIENCE
            </h2>
            <p 
              className="text-lg md:text-xl text-[#e8e8e8] leading-relaxed mb-8"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}
            >
              I’m an IT engineer specializing in designing and developing websites and mobile applications. My primary focus is backend development, but I am also comfortable working across the full stack when needed.
            </p>

            <h6 
              className="text-4l md:text-5l lg:text-6l font-bold text-[#e8e8e8] mb-8"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
              }}
            >
              SKILLS & COMPETENCIES
            </h6>
            
            {/* Additional Info */}
           <div className="space-y-6">  
            {/* Backend Development */}
            <FeatureItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Server stack */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              }
              title="Backend Development"
              description="Node-JS, PHP, Supabase functions"
              delay={300}
            />

            {/* Database Development */}
            <FeatureItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Database cylinder */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 4c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7" />
                </svg>
              }
              title="Database Development"
              description="SQL, Prisma ORM, and Eloquent ORM (Laravel)"
              delay={400}
            />

            {/* Frontend Development */}
            <FeatureItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Code brackets */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              }
              title="Frontend Development"
              description="React-JS, Laravel, Flutter"
              delay={400}
            />

            {/* Basic Computer Hardware */}
            <FeatureItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Chip */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 3h6M9 21h6M3 9v6M21 9v6M7 7h10v10H7V7z" />
                </svg>
              }
              title="Basic Computer Hardware"
              description="Knowledge of basic computer hardware for daily life usage"
              delay={400}
            />

            {/* Basic Computer Networking */}
            <FeatureItem 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-[#e8e8e8] group-hover:scale-110 transition-transform duration-300" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Network nodes */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 6V4m0 16v-2m8-6h-2M6 12H4m13.656-5.657l-1.414 1.414M7.757 16.243l-1.414 1.414m12.02 0l-1.414-1.414M7.757 7.757L6.343 6.343" />
                </svg>
              }
              title="Basic Computer Networking"
              description="Knowledge of basic computer network for local network purposes such as Cisco and Mikrotik routers and switches"
              delay={400}
            />
          </div>
            
            {/* CTA Button */}
            {/* <div
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              <button className="mt-8 bg-gradient-to-r from-[#353535] to-[#252525] hover:from-[#454545] hover:to-[#353535] text-[#e8e8e8] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};