import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle bubble decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-ocean-light/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-aqua/5 blur-3xl" />

      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 gradient-ocean rounded-3xl blur-3xl opacity-20" />
              
              {/* Main container */}
              <div className="relative bg-gradient-to-br from-ocean-deep to-ocean-mid rounded-3xl p-8 h-full flex items-center justify-center">
                {/* Decorative circles */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-white/10" />
                <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full border border-aqua/20" />
                
                {/* Text content */}
                <div className="text-center text-white">
                  <div className="text-7xl md:text-8xl font-serif font-bold mb-2 text-aqua">
                    1872
                  </div>
                  <p className="text-white/80 text-sm tracking-widest uppercase">
                    Since
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
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

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-ocean-deep">
                  150+
                </div>
                <p className="text-sm text-muted-foreground">Years of Heritage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-ocean-mid">
                  7
                </div>
                <p className="text-sm text-muted-foreground">Unique Flavours</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-ocean-light">
                  100%
                </div>
                <p className="text-sm text-muted-foreground">Natural Ingredients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
