import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, X } from "lucide-react";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filteredProducts = (() => {
    let items = getProductsByCategory(activeCategory);
    if (searchQuery.trim()) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.flavor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return items;
  })();

  return (
    <section id="products" className="section-padding bg-background relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-ocean-light/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-aqua/5 blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-ocean-mid" />
            <span className="text-ocean-mid text-sm tracking-[0.2em] uppercase font-semibold">
              Our Collection
            </span>
            <span className="h-px w-12 bg-ocean-mid" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Refreshing <span className="text-gradient-ocean">Flavours</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seven unique flavours crafted with tradition and bottled fresh for you
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search flavours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ocean-light/50 focus:border-ocean-light transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-ocean-deep to-ocean-mid text-white shadow-lg shadow-ocean-deep/20"
                  : "bg-card border border-border text-muted-foreground hover:border-ocean-light hover:text-ocean-mid"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              No flavours found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
//detail
