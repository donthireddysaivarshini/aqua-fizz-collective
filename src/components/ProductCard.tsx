import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { items, addItem, updateQuantity } = useCart();

  const cartItem = items.find((i) => i.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => addItem(product);
  const handleIncrement = () => updateQuantity(product.id, quantity + 1);
  const handleDecrement = () => updateQuantity(product.id, quantity - 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-ocean-light/50 hover:shadow-xl hover:shadow-ocean-light/10 transition-all duration-300"
    >
      {/* Product Image Container */}
      <div
        className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
        }}
      >
        {/* Bubble decoration on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white/30"
              style={{
                left: `${20 + i * 15}%`,
                bottom: `${10 + i * 10}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Bottle Image */}
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Goli Soda Bottle Shape */}
          <div className="relative w-20 h-44 md:w-24 md:h-52">
            {/* Bottle Neck */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-8 rounded-t-lg"
              style={{ background: `linear-gradient(180deg, ${product.color}70, ${product.color}90)` }}
            />
            
            {/* Marble Cap */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-5 bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-full shadow-md border border-gray-300" />
            
            {/* Bottle Body - Bulbous shape */}
            <div 
              className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-36 md:w-20 md:h-44 rounded-[2rem] shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, ${product.color}95 0%, ${product.color} 50%, ${product.color}dd 100%)`,
                boxShadow: `0 25px 50px ${product.color}50, inset 3px 3px 20px rgba(255,255,255,0.3)`,
              }}
            >
              {/* Label */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-12 md:w-14 h-10 md:h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-md flex flex-col items-center justify-center shadow-sm border border-blue-500">
                <span className="text-[8px] md:text-[9px] font-bold text-orange-400 tracking-wide">GOLI</span>
                <span className="text-[7px] md:text-[8px] font-bold text-white">SODA</span>
              </div>
              
              {/* Shine effect */}
              <div className="absolute top-3 left-2 w-2 h-20 bg-white/30 rounded-full blur-sm" />
              <div className="absolute top-6 left-4 w-1 h-12 bg-white/20 rounded-full" />
              
              {/* Bubbles inside */}
              <div className="absolute bottom-4 left-3 w-2 h-2 rounded-full bg-white/40" />
              <div className="absolute bottom-8 right-4 w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="absolute bottom-6 left-5 w-1 h-1 rounded-full bg-white/35" />
            </div>
          </div>
        </motion.div>

        {/* Splash effect on hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div 
            className="w-full h-full rounded-full blur-xl"
            style={{ background: `radial-gradient(ellipse, ${product.color}40, transparent)` }}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-ocean-deep transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">{product.flavor}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-ocean-mid">
            £{product.price.toFixed(2)}
          </span>

          {quantity === 0 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-ocean-deep to-ocean-mid text-white rounded-full font-semibold text-sm shadow-lg shadow-ocean-deep/20 hover:shadow-ocean-deep/40 transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              Add
            </motion.button>
          ) : (
            <div className="flex items-center gap-3 bg-secondary rounded-full px-2 py-1">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleDecrement}
                className="w-8 h-8 rounded-full bg-ocean-mid flex items-center justify-center text-white hover:bg-ocean-deep transition-colors"
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <span className="font-bold text-foreground w-6 text-center">
                {quantity}
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleIncrement}
                className="w-8 h-8 rounded-full bg-ocean-mid flex items-center justify-center text-white hover:bg-ocean-deep transition-colors"
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
