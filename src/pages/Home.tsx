import { ArrowRight, MessageCircle, ShoppingBag, ShieldCheck, Zap, TrendingUp, Users, Settings, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CONTACT_INFO } from "../constants";
import { PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const popularProducts = PRODUCTS.filter(p => p.isPopular).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Sewing Machine" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/80 to-transparent" />
        </div>

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-accent-blue/20 border border-accent-blue/30 px-3 py-1.5 rounded-full text-accent-blue text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
              </span>
              Zimbabwe's #1 Machinery Supplier
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Scale Your <span className="text-accent-blue underline decoration-4 underline-offset-8">Textile</span> Business Today
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Premium industrial sewing machines, embroidery systems, and DTF printers. Professional equipment designed for boutiques, startups, and garment factories in Zimbabwe.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp w-full sm:w-auto px-8 py-4 text-lg">
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
              <Link to="/products" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/10 text-white font-medium backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Browse Machines
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <p className="text-3xl font-display font-bold text-white">500+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">24h</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Support</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">100%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Reliable</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-accent-blue/10 rounded-[2rem] blur-2xl radial-gradient" />
            <img 
              src="https://images.unsplash.com/photo-1605634543202-601614e040f7?auto=format&fit=crop&q=80&w=1000" 
              alt="Sewing TECH Machine" 
              className="relative rounded-[2rem] shadow-2xl border border-white/10 object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="section-container !py-4 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          <p className="text-sm font-bold text-primary-700 uppercase tracking-widest">Trusted By:</p>
          <div className="flex flex-wrap justify-center gap-12 gap-y-6 text-2xl font-display font-black italic text-primary-900/20">
            <span>TAILORPRO</span>
            <span>GAREMENTCO</span>
            <span>UNIFORM_ZIM</span>
            <span>STITCHFLOW</span>
            <span>WEAVE_STYLE</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
             <div className="text-accent-blue font-bold uppercase tracking-widest text-xs">Professional Grade</div>
             <h2 className="text-4xl md:text-5xl">Our Best-Selling Machines</h2>
             <p className="text-gray-500 leading-relaxed">
               The preferred choice for Zimbabwean fashion businesses and clothing manufacturers. Reliability meets performance.
             </p>
          </div>
          <Link to="/products" className="text-accent-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
            See All Machines
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES (HORIZONTAL SCROLL ON MOBILE) */}
      <section className="bg-primary-900 py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <div className="text-accent-blue font-bold uppercase tracking-widest text-xs">The Catalog</div>
             <h2 className="text-4xl md:text-5xl text-white">Find Exactly What You Need</h2>
             <p className="text-gray-400">
               From single-needle lockstitches to high-volume industrial printer systems.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.slice(0, 5).map((cat, idx) => (
              <motion.div 
                key={cat}
                whileHover={{ y: -5 }}
                className="bg-primary-800 rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <Settings size={32} />
                </div>
                <h3 className="text-white text-sm font-bold uppercase tracking-tight leading-tight">{cat}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="btn-accent px-12">
              Browse Full Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (BENTO GRID STYLE) */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-gray-50 rounded-[2.5rem] p-12 flex flex-col justify-between border border-gray-100">
             <div className="space-y-6">
                <div className="bg-accent-blue text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="text-4xl md:text-5xl max-w-md">Why Zimbabwe Trusts Sewing TECH</h2>
                <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                   We don't just sell machines; we provide business solutions. Our equipment is tested for the local market and backed by round-the-clock technical support.
                </p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200">
                <div className="space-y-2">
                   <h4 className="text-accent-blue font-bold">Training</h4>
                   <p className="text-xs text-gray-500">Free operator training with every machine.</p>
                </div>
                <div className="space-y-2">
                   <h4 className="text-accent-blue font-bold">Delivery</h4>
                   <p className="text-xs text-gray-500">Fast delivery to any city in Zimbabwe.</p>
                </div>
                <div className="space-y-2">
                   <h4 className="text-accent-blue font-bold">Servicing</h4>
                   <p className="text-xs text-gray-500">Expert on-site repair and maintenance.</p>
                </div>
                <div className="space-y-2">
                   <h4 className="text-accent-blue font-bold">Warranty</h4>
                   <p className="text-xs text-gray-500">Industry-leading genuine local warranty.</p>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-primary-900 rounded-[2.5rem] p-8 text-white h-full relative overflow-hidden group">
               <div className="relative z-10 space-y-4">
                  <Zap className="text-accent-blue" size={32} />
                  <h3 className="text-2xl">Startup Packages</h3>
                  <p className="text-gray-400 text-sm">Everything you need to start your clothing brand today.</p>
                  <Link to="/start-business" className="inline-flex items-center gap-2 text-accent-blue font-bold text-sm underline pt-4">
                    Learn More
                  </Link>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <ShoppingBag size={120} />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. WHATSAPP CTA BANNER (LARGE CONVERSION BOX) */}
      <section className="section-container !py-12">
        <div className="bg-whatsapp-green/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-whatsapp-green/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="grid grid-cols-12 gap-8 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <MessageCircle key={i} size={40} />
                ))}
             </div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-whatsapp-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mx-auto">
              Live Inquiry
            </div>
            <h2 className="text-4xl md:text-6xl text-primary-900">Need a Quick Quote? <br className="hidden md:block" /> WhatsApp Our Experts</h2>
            <p className="text-lg text-primary-700 leading-relaxed">
              Instantly check availability, get pricing, and book your showroom visit. We are online and ready to help you choose the right equipment for your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp px-12 py-5 text-xl w-full sm:w-auto shadow-xl shadow-whatsapp-green/30">
                <MessageCircle size={28} />
                Start Chat Now
              </a>
              <a href={CONTACT_INFO.catalogUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-lg w-full sm:w-auto">
                View Mobile Catalog
              </a>
            </div>
            <p className="text-sm text-primary-700/60 font-medium">+263 71 962 2313 • Daily response within 15 minutes</p>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS STARTER SOLUTIONS */}
      <section className="bg-gray-50 py-24">
         <div className="section-container">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                 <div className="text-accent-blue font-bold uppercase tracking-widest text-xs">Entrepreneur's Hub</div>
                 <h2 className="text-4xl md:text-5xl">Thinking of Starting <br /> a Fashion Brand?</h2>
                 <p className="text-gray-500 text-lg leading-relaxed">
                    Over 200 clothing brands in Harare started with Sewing TECH machinery. We provide more than just the machine—we provide the blueprint for your growth.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-blue shrink-0">
                          <TrendingUp size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg">Scalable Packages</h4>
                          <p className="text-gray-500 text-sm">Start small with a lockstitch and overlocker, grow into DTF and Embroidery.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-blue shrink-0">
                          <Users size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg">Expert Guidance</h4>
                          <p className="text-gray-500 text-sm">Our team helps you match equipment to your production volume targets.</p>
                       </div>
                    </div>
                 </div>

                 <Link to="/start-business" className="btn-primary inline-flex">
                   Starter Packages Guide
                 </Link>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1598971861713-54ad16a7e718?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl mt-12" alt="Embroidery" />
                <img src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl" alt="Printing" />
              </div>
           </div>
         </div>
      </section>

      {/* 8. TESTIMONIALS */}
       <section className="section-container !pb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Chenai M.", role: "Fashion Designer", text: "Sewing TECH helped me set up my studio from scratch. Their machines are solid and the after-sales support is unmatched." },
            { name: "Tinashe G.", role: "Clothing Brand Owner", text: "The DTF printer we got is a game changer. High quality prints and the team even taught us how to use it properly." },
            { name: "Sarah K.", role: "School Administrator", text: "We upgraded our home economics lab with 10 high-speed machines. Reliable service and prompt delivery to Bulawayo." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow italic text-gray-600">
               <div className="flex gap-1 text-accent-blue mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Award key={j} size={16} fill="currentColor" />)}
               </div>
               <p className="mb-6 leading-relaxed">"{t.text}"</p>
               <div>
                  <p className="font-bold text-primary-900 not-italic">{t.name}</p>
                  <p className="text-xs text-primary-700 not-italic uppercase tracking-widest">{t.role}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. LOCATION PREVIEW */}
      <section className="bg-primary-900 overflow-hidden">
         <div className="section-container flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 text-white space-y-6">
                <h2 className="text-4xl text-white">Visit Our Showroom</h2>
                <p className="text-gray-400">Located in the heart of Harare, our showroom allows you to test any machine before you buy.</p>
                <div className="space-y-4 pt-4">
                  <div className="flex gap-4">
                     <span className="text-accent-blue font-bold">ADDRESS</span>
                     <span className="text-gray-400">{CONTACT_INFO.address}</span>
                  </div>
                  <div className="flex gap-4">
                     <span className="text-accent-blue font-bold">HOURS</span>
                     <span className="text-gray-400">Mon - Fri: 8AM - 5PM</span>
                  </div>
                </div>
                <div className="pt-8">
                  <Link to="/contact" className="btn-accent inline-flex">Get Directions</Link>
                </div>
            </div>
            <div className="md:w-1/2 w-full h-[400px] bg-gray-800 rounded-[2.5rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
               {/* Map Placeholder */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
               <div className="relative text-center space-y-4 p-8">
                  <MapPin size={48} className="text-accent-blue mx-auto" />
                  <p className="text-white font-bold text-xl font-display">Interactive Map Loading...</p>
                  <p className="text-gray-500 text-sm">48 Kenneth Kaunda Ave, Harare</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

const MapPin = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
