import { useEffect, useCallback, useState } from "react";
import { motion, Transition } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { websiteTypes } from "./PortfolioData.js";

// ─── Spring transition ────────────────────────────────────────────────────────

const springTransition: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 24,
  mass: 1,
};

// ─── Hook: embla selected index ───────────────────────────────────────────────

const useEmblaSelectedIndex = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => { emblaApi.off("reInit", onSelect).off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return selectedIndex;
};

// ─── CarouselCard — hanya gambar + judul ─────────────────────────────────────

const CarouselCard = ({ item, isActive }: { item: (typeof websiteTypes)[0]; isActive: boolean }) => (
  <motion.div
    className="size-full"
    initial={false}
    animate={{ scale: isActive ? 1 : 0.88, opacity: isActive ? 1 : 0.5 }}
    transition={springTransition}
  >
    <div
      className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
        isActive ? "ring-1 ring-[#e8e8e8]/25" : ""
      }`}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-52 object-cover"
        />
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
          <h3 className="text-sm font-semibold text-white leading-tight">{item.title}</h3>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── CarouselSection ──────────────────────────────────────────────────────────

export const CarouselSection = () => {
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const selectedIndex = useEmblaSelectedIndex(emblaApi);

  // Auto-play every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) emblaApi?.scrollNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-16 bg-gradient-to-br from-[#252525] to-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#e8e8e8] mb-4">
            MY PREVIOUS PROJECT
          </h2>
          <p className="text-lg text-[#cccccc] max-w-3xl mx-auto">
            A glimpse of what I've built
          </p>
        </div>

        {/* Embla viewport */}
        <div
          className="overflow-hidden [--slide-spacing:1rem] [--slide-size:72%] sm:[--slide-size:50%] md:[--slide-size:38%] lg:[--slide-size:30%]"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y touch-pinch-zoom">
            {websiteTypes.map((item, index) => (
              <div
                key={item.id}
                className="mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none min-w-0"
              >
                <CarouselCard item={item} isActive={index === selectedIndex} />
              </div>
            ))}
          </div>
        </div>

        {/* View Portfolio button (menggantikan dots & nav) */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center gap-2 px-7 py-3
                       bg-[#e8e8e8] text-[#252525]
                       font-semibold rounded-full
                       hover:bg-white transition-all duration-300 hover:scale-105 shadow-md"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <p className="text-[#cccccc] mb-6">Need a custom solution?</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/0895340299650"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5
                       bg-gradient-to-r from-green-600 to-green-700 text-white
                       font-semibold rounded-full
                       hover:from-green-700 hover:to-green-800
                       transition-all duration-300 hover:scale-105 shadow-md"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/cariajagreg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5
                       bg-gradient-to-r from-pink-600 to-purple-600 text-white
                       font-semibold rounded-full
                       hover:from-pink-700 hover:to-purple-700
                       transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};