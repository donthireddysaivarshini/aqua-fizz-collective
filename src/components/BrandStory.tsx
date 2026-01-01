import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// Using the 3 images you provided
const images = [
  "/images/ourstory1.png", 
  "/images/ourstory3.png", 
  "/images/ourstory5.png",
];

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // FIXED: Added 'as const' to ease and defined return type as Variants
  const floatAnim = (delay = 0): Variants => ({
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut" as const, // <--- THE FIX
        delay: delay,
      },
    },
  });

  return (
    <section
      id="story"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Subtle bubble decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-ocean-light/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-aqua/5 blur-3xl" />

      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- COLLAGE LAYOUT (Mobile Optimized) --- */}
          {/* Adjusted height: h-[400px] for mobile, h-[500px] for desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] w-full max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0"
          >
            {/* Glow Effect behind the collage */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-ocean-light/20 blur-[60px] rounded-full" />

            {/* IMAGE 1: Main Backdrop (Large Vertical) */}
            <motion.div 
               variants={floatAnim(0)}
               animate="animate"
               // Mobile: w-[65%] for better visibility. Desktop: w-[60%]
               className="absolute top-0 left-2 lg:left-4 w-[65%] lg:w-[60%] h-[80%] z-10"
            >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-[-3deg]">
                    <img 
                        src={images[0]} 
                        alt="Heritage Bottle" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* IMAGE 2: Bottom Right Overlap (Square) */}
            <motion.div 
               variants={floatAnim(1)} 
               animate="animate"
               // Mobile: Slightly larger w-[55%]
               className="absolute bottom-4 lg:bottom-8 right-2 lg:right-4 w-[55%] lg:w-[50%] aspect-square z-20"
            >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white/20 rotate-[3deg]">
                    <img 
                        src={images[1]} 
                        alt="Goli Soda Tradition" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* IMAGE 3: Top Right Accent (Small) */}
            <motion.div 
               variants={floatAnim(2)} 
               animate="animate"
               // Removed 'grayscale' class here
               className="absolute top-6 lg:top-10 right-0 w-[35%] lg:w-[33%] aspect-[4/5] z-0"
            >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 transition-all duration-500 rotate-[6deg]">
                    <img 
                        src={images[2]} 
                        alt="Vintage Vibes" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
          </motion.div>

          {/* TEXT SIDE (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="h-px w-12 bg-ocean-mid" />
              <span className="text-ocean-mid text-sm tracking-[0.2em] uppercase font-semibold">
                Our Heritage
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              The Story of{" "}
              <span className="text-gradient-ocean">Goli Soda</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                For generations, the iconic marble-topped bottle has quenched
                thirsts across India. The satisfying pop of the marble, the rush
                of effervescent bubbles — it's more than a drink, it's a memory.
              </p>
              <p>
                We honor this heritage with premium ingredients, authentic
                flavors, and the same traditional glass bottles that have
                brought joy to millions.
              </p>
              <p className="font-serif text-xl text-ocean-deep italic">
                Every sip is a journey back to simpler times.
              </p>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-ocean-deep">
                  50+
                </div>
                <p className="text-sm text-muted-foreground">
                  Years of Heritage
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-ocean-mid">
                  6
                </div>
                <p className="text-sm text-muted-foreground">
                  Unique Flavours
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-ocean-light">
                  100%
                </div>
                <p className="text-sm text-muted-foreground">
                  Natural Ingredients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;