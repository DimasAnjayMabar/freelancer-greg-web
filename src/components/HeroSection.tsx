import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

function CatModel() {
  const { scene, animations } = useGLTF("/glb/an_animated_cat.glb");
  const { actions } = useAnimations(animations, scene);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.12 : 0.2}
      position={isMobile ? [-0.4, -1, 0] : [0, -1, 0]}
    />
  );
}

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#252525] to-[#1a1a1a] overflow-hidden">
      {/* GLB background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 1, 6], fov: 50 }} className="w-full h-full">
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <Suspense fallback={null}>
            <CatModel />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center pt-[60vh] px-6">
        
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
          className="absolute bottom-10 flex justify-center"
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
