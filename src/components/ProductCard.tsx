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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-row md:flex-col glass-card rounded-3xl overflow-hidden w-full shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white h-36 md:h-auto"
    >
      {/* 1. Image Area */}
      <div className="relative w-28 shrink-0 md:w-full md:aspect-[3/4] bg-gray-50 flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div 
            className="absolute w-full h-full opacity-10"
            style={{ backgroundColor: product.color }}
        />
        {/* Image */}
        <div className="relative z-10 w-full h-full p-2">
           <img 
             src={product.image} 
             alt={product.name}
             className="w-full h-full object-contain"
             onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
             }}
           />
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="flex-1 flex flex-col justify-between p-3 md:p-5 min-w-0">
        
        {/* Header info */}
        <div>
            <h3 className="font-serif text-lg md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-[hsl(var(--soda-primary))] transition-colors line-clamp-2">
                {product.name}
            </h3>
            <p className="text-sm text-gray-500 font-medium mt-1 truncate">{product.flavor}</p>
        </div>

        {/* Footer actions */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-xl md:text-2xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          {quantity === 0 ? (
            // --- MAIN ADD BUTTON (Ocean Deep Style) ---
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1 px-4 py-2 rounded-full font-bold text-sm shadow-md transition-all 
                bg-gradient-to-r from-ocean-deep to-ocean-mid text-white 
                hover:scale-105 hover:shadow-lg shadow-ocean-deep/20"
            >
              <Plus className="w-4 h-4 text-white" />
              <span>Add</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1 border border-gray-200">
              
              {/* Minus Button (White background, Dark Icon) */}
              <button 
                onClick={handleDecrement} 
                className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                  <Minus className="w-3 h-3" />
              </button>
              
              <span className="font-bold text-sm min-w-[1rem] text-center text-gray-900">{quantity}</span>
              
              {/* --- PLUS INCREMENT BUTTON (Ocean Deep Style) --- */}
              <button 
                onClick={handleIncrement} 
                className="w-7 h-7 rounded-full shadow-sm flex items-center justify-center transition-all 
                  bg-gradient-to-r from-ocean-deep to-ocean-mid text-white 
                  hover:shadow-md shadow-ocean-deep/20"
              >
                  <Plus className="w-3 h-3 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;