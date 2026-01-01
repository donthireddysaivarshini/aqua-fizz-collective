import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { smoothScrollTo } from "@/lib/scroll";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- IMAGE BACKGROUND SLIDER --- */}
      <div className="absolute inset-0 w-full h-full bg-black"> {/* Added bg-black to prevent any white flashes */}
        
        {/* REMOVED mode="wait" to allow overlap */}
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="Andhra Goli Soda Hero"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'blur(2px)' }} 
            
            // Seamless Fade Logic
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.05 }} // Slight slow zoom in
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // Slower blend duration
          />
        </AnimatePresence>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10" />
      </div>

      <div className="container-custom relative z-20 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-white/90 text-xs md:text-sm tracking-[0.3em] uppercase font-semibold border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Premium Heritage Beverage
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            ANDHRA
            <br />
            <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-300 pb-4 inline-block"
                style={{ 
                    filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))'
                }}
            >
              GOLI SODA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-100 text-lg md:text-2xl font-serif italic mb-12 max-w-2xl mx-auto"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            Experience the fizzy nostalgia of an old kind of soda, reimagined for today.
          </motion.p>

          <motion.a
            href="#products"
            onClick={(e) => smoothScrollTo(e, "#products")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative z-20 group inline-flex items-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Flavours
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z"
            fill="hsl(195, 60%, 99%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;