import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bottles.png";

const Bubbles = () => {
  const bubbles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 6,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 5 + 8,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white animate-bubble"
          style={{
            width: bubble.size,
            opacity: bubble.opacity,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-20px",
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-ocean">
      {/* Background bubbles */}
      <Bubbles />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="container-custom relative z-10 pt-20 pb-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase font-sans font-medium">
              Premium Heritage Beverage
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
            style={{ textShadow: "0 0 60px rgba(0, 255, 202, 0.3)" }}
          >
            ANDHRA
            <br />
            <span className="text-aqua">GOLI SODA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/90 text-lg md:text-2xl font-serif italic mb-8"
          >
            An Old Kind of Soda
          </motion.p>

          {/* Hero Image - Floating Bottles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full max-w-4xl mx-auto my-8"
          >
            <motion.img
              src={heroImage}
              alt="Andhra Goli Soda Collection"
              className="w-full h-auto drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4))",
              }}
            />
            
            {/* Glow effect under bottles */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-aqua/20 blur-3xl rounded-full" />
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToProducts}
            className="group relative px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-aqua/50 hover:shadow-[0_0_40px_rgba(0,255,202,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Flavours
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
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
