import { MessageCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";
import { CONTACT_INFO } from "../constants";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappProductMessage = `Hi Sewing TECH, I am interested in the ${product.name} (${product.id}). Can I get more details?`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappProductMessage)}`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isPopular && (
          <div className="absolute top-4 left-4 bg-accent-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Star size={10} fill="currentColor" />
            Bestseller
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
           {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-bold leading-tight group-hover:text-accent-blue transition-colors">
            {product.name}
          </h3>
          {product.price && (
            <span className="text-accent-blue font-bold text-lg">{product.price}</span>
          )}
        </div>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full justify-center py-2.5 text-sm"
          >
            <MessageCircle size={18} />
            Inquire Price
          </a>
          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center gap-2 text-primary-800 text-sm font-semibold hover:text-accent-blue transition-colors py-2"
          >
            Full Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
