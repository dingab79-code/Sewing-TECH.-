import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PRODUCTS, Product } from "../data/products";
import { MessageCircle, ArrowLeft, Check, ShoppingBag, ShieldCheck, Truck, Cog, Plus } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { motion } from "motion/react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Small delay then redirect
      const timer = setTimeout(() => navigate("/products"), 50);
      return () => clearTimeout(timer);
    }
  }, [id, navigate]);

  if (!product) return null;

  const whatsappMessage = `Hi Sewing TECH, I'm interested in the ${product.name}. Could you please send me the current price and availability?`;
  const whatsappUrl = `https://wa.me/263719622313?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white">
      {/* Navigation & Actions Overlay (Mobile) */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur px-4 py-3 border-b border-gray-100 flex items-center justify-between lg:hidden">
        <Link to="/products" className="text-primary-900">
           <ArrowLeft size={24} />
        </Link>
        <span className="font-bold text-sm truncate px-4">{product.name}</span>
        <a href={whatsappUrl} className="text-whatsapp-green">
           <MessageCircle size={24} />
        </a>
      </div>

      <div className="section-container !pt-8 lg:!pt-24">
        {/* Breadcrumbs (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-primary-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary-900 transition-colors">Machines</Link>
          <span>/</span>
          <span className="text-primary-900 font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Image Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100"
            >
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="w-full h-full object-cover"
               />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
               {[1,2,3].map(i => (
                 <div key={i} className="aspect-square rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden cursor-pointer hover:border-accent-blue transition-colors">
                    <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100" alt={`View ${i}`} />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {product.category}
              </div>
              <h1 className="text-4xl md:text-5xl">{product.name}</h1>
              {product.price && (
                <div className="text-4xl font-display font-bold text-accent-blue">{product.price}</div>
              )}
              <p className="text-gray-500 text-lg leading-relaxed pt-2">
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
               <h3 className="text-lg font-bold">Key Performance Indicators</h3>
               <div className="grid grid-cols-1 gap-4">
                 {product.features.map((feature, i) => (
                   <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-transparent hover:border-accent-blue/20 transition-colors">
                     <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-blue shrink-0">
                       <Check size={20} />
                     </div>
                     <span className="text-primary-800 font-medium text-sm">{feature}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-5 text-lg justify-center shadow-xl shadow-whatsapp-green/20">
                <MessageCircle size={28} />
                Inquire on WhatsApp
              </a>
              <button className="btn-primary py-5 text-lg justify-center">
                Request Formal Quote
              </button>
            </div>

            {/* Micro Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
               <div className="text-center space-y-2">
                  <ShieldCheck className="mx-auto text-primary-700" size={24} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">1YR Warranty</p>
               </div>
               <div className="text-center space-y-2">
                  <Truck className="mx-auto text-primary-700" size={24} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Zim Delivery</p>
               </div>
               <div className="text-center space-y-2">
                  <Cog className="mx-auto text-primary-700" size={24} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Expert Setup</p>
               </div>
            </div>
          </div>
        </div>

        {/* Technical Specs & Details */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
           <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl">Technical Specifications</h2>
                <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
                   {Object.entries(product.specs).map(([key, value], i) => (
                     <div key={key} className={`flex p-6 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b last:border-0 border-gray-100`}>
                        <span className="w-1/3 font-bold text-sm text-primary-900 border-r border-gray-200">{key}</span>
                        <span className="w-2/3 pl-12 text-sm text-gray-500 font-medium">{value}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="space-y-8 bg-primary-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
                 <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       <h3 className="text-3xl text-white">Why buy this machine from us?</h3>
                       <p className="text-gray-400">At Sewing TECH, we don't just ship boxes. We ensure every {product.name} is configured for Zimbabwe's specific textile needs.</p>
                       <ul className="space-y-4">
                          <li className="flex items-center gap-3 text-sm font-medium">
                            <Plus size={18} className="text-accent-blue" />
                            Pre-delivery testing & calibration
                          </li>
                          <li className="flex items-center gap-3 text-sm font-medium">
                            <Plus size={18} className="text-accent-blue" />
                            Comprehensive operator training
                          </li>
                          <li className="flex items-center gap-3 text-sm font-medium">
                            <Plus size={18} className="text-accent-blue" />
                            Genuine spare parts availability
                          </li>
                       </ul>
                    </div>
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
                       <h4 className="text-xl font-bold font-display">Showroom Visit</h4>
                       <p className="text-sm text-gray-400 leading-relaxed">Book a demo to see the {product.name} in action at our Harare showroom.</p>
                       <a href={CONTACT_INFO.whatsappUrl} className="btn-accent px-6 mt-6 justify-center">Book Demo</a>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-8">
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                 <h3 className="font-display font-bold text-xl mb-6">Similar Machines</h3>
                 <div className="space-y-6">
                    {PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map(p => (
                       <Link key={p.id} to={`/products/${p.id}`} className="flex gap-4 group">
                          <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                             <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={p.name} />
                          </div>
                          <div className="flex flex-col justify-center">
                             <h4 className="font-bold text-sm leading-tight text-primary-900 group-hover:text-accent-blue transition-colors">{p.name}</h4>
                             <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-widest">{p.category}</p>
                          </div>
                       </Link>
                    ))}
                 </div>
                 <div className="mt-8 pt-8 border-t border-gray-200">
                    <Link to="/products" className="text-sm font-bold text-accent-blue hover:underline">View All {product.category} →</Link>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Cross-Sell Catalog */}
      <section className="section-container !py-24">
         <div className="bg-accent-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden flex flex-col items-center">
            <ShoppingBag size={48} className="mb-8" />
            <h2 className="text-4xl text-white mb-6">See More Industrial Options</h2>
            <p className="text-blue-100 max-w-xl text-lg mb-12">
               Our WhatsApp catalog is updated daily with new arrivals, pre-owned deals, and specialized attachments.
            </p>
            <a href={CONTACT_INFO.catalogUrl} target="_blank" rel="noopener noreferrer" className="btn-primary bg-primary-900 text-white min-w-[240px]">
               Open WhatsApp Catalog
            </a>
            
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="grid grid-cols-12 gap-8 h-full blur-[1px]">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-white/40 h-20 rounded-full" />
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
