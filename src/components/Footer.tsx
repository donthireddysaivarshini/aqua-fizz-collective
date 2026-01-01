import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C480,0 960,120 1440,64 L1440,120 L0,120 Z"
            className="fill-[hsl(var(--soda-primary))] opacity-90"
            style={{ fill: "#0A4D68" }}
          />
        </svg>
      </div>

      {/* Main Footer Background */}
      <div className="bg-gradient-to-b from-[#0A4D68] to-[#052e3e] pt-20 pb-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 mb-12">

            {/* BRAND SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* LOGO + TITLE */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                  <img
                    src="/images/logo.png"
                    alt="Andhra Goli Soda Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Andhra Goli Soda
                </h3>
              </div>

              <p className="text-white/70 leading-relaxed max-w-sm">
                Tradition, bottled fresh. Experience the authentic taste of
                Andhra’s beloved heritage beverage.
              </p>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-serif text-xl font-bold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home","Our Story", "Flavours"].map((link) => (
                  <li key={link}>
                    <a
                      href={link === "Flavours" ? "#products" : "#story"}
                      className="text-white/70 hover:text-[hsl(var(--soda-primary))] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-serif text-xl font-bold text-white mb-6">
                Contact
              </h4>

              <ul className="space-y-4">
                {/* Address */}
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[hsl(var(--soda-primary))] mt-0.5" />
                  <span className="text-white/70 leading-relaxed">
                    Kanavaram Village, <br />
                    Rajanagara Mandal
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[hsl(var(--soda-primary))]" />
                  <a
                    href="tel:9505055055"
                    className="text-white/70 hover:text-[hsl(var(--soda-primary))] transition-colors"
                  >
                    95050 55055
                  </a>
                </li>

                
              </ul>
            </motion.div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <p className="text-white/50 text-sm">
                © 2024 Andhra Goli Soda. All rights reserved.
              </p>
              <p className="text-white/70 font-serif italic">
                Made with tradition, served with love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
