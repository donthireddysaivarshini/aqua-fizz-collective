import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

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
            className="fill-ocean-deep"
          />
        </svg>
      </div>

      <div className="gradient-ocean-vertical pt-20 pb-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                Andhra Goli Soda
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Tradition, bottled fresh. Experience the authentic taste of India's
                beloved heritage beverage, crafted with love since 1872.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
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
                {["Our Story", "Flavours", "Wholesale", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-aqua transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-serif text-xl font-bold text-white mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-aqua mt-0.5" />
                  <span className="text-white/70">
                    Manchester, United Kingdom
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-aqua" />
                  <a
                    href="tel:+447940392567"
                    className="text-white/70 hover:text-aqua transition-colors"
                  >
                    +44 794 039 2567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-aqua" />
                  <a
                    href="mailto:hello@andhragolisoda.co.uk"
                    className="text-white/70 hover:text-aqua transition-colors"
                  >
                    hello@andhragolisoda.co.uk
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
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
