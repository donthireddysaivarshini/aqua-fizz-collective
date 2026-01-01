import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Story", href: "#story" },
    { name: "Flavours", href: "#products" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrderNow = () => {
    scrollToSection("#products");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo Section */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#");
              }}
              className="flex items-center gap-2"
            >
              <img 
                src="/images/logo.png" 
                alt="Andhra Goli Soda" 
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  // UPDATED: Hover effect uses the Gradient Text (Aqua Frost)
                  className={`text-sm font-bold tracking-wide uppercase transition-all duration-300
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-200
                    ${isScrolled ? "text-[hsl(var(--soda-depth))]" : "text-white"}
                  `}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Desktop Order Now Button - UPDATED to Aqua Frost */}
              <button
                onClick={handleOrderNow}
                className={`px-8 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all hover:scale-105 
                  bg-gradient-to-r from-cyan-300 to-blue-200 text-[hsl(var(--soda-depth))] 
                  shadow-lg hover:shadow-[0_0_20px_rgba(103,232,249,0.5)]
                `}
              >
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors z-50 relative ${
                isMobileMenuOpen || isScrolled
                  ? "text-[hsl(var(--soda-depth))]" 
                  : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white shadow-2xl border-b border-gray-100 md:hidden pt-24 pb-10"
          >
            <div className="container-custom space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block py-4 text-[hsl(var(--soda-depth))] text-lg font-serif font-medium border-b border-gray-100 hover:text-[hsl(var(--soda-primary))] hover:pl-2 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile Order Now Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={handleOrderNow}
                className="w-full mt-8 py-4 bg-gradient-to-r from-cyan-300 to-blue-200 text-[hsl(var(--soda-depth))] rounded-xl font-bold uppercase tracking-widest shadow-xl hover:shadow-[0_0_20px_rgba(103,232,249,0.5)] transition-all"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;