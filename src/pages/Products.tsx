import { useState, useMemo } from "react";
import { Search, Filter, ShoppingBag, MessageCircle, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "../components/ProductCard";
import { CONTACT_INFO } from "../constants";
import { motion, AnimatePresence } from "motion/react";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100 py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl">Industrial Machinery Catalog</h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Explore Zimbabwe's largest inventory of professional textile production equipment. Quality guaranteed machines for every stage of your manufacturing process.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={CONTACT_INFO.catalogUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <ShoppingBag size={20} />
                View Full WhatsApp Catalog
              </a>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)} 
                className={`md:hidden flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-all ${isFilterOpen ? "bg-primary-900 text-white border-primary-900" : "bg-white text-primary-900 border-gray-200"}`}
              >
                <SlidersHorizontal size={20} />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container !py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-12">
            <div>
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <Filter size={18} className="text-accent-blue" />
                Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === null ? "bg-accent-blue text-white" : "hover:bg-gray-100 text-gray-600"}`}
                >
                  All Machines
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat ? "bg-accent-blue text-white" : "hover:bg-gray-100 text-gray-600"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-primary-900 p-8 rounded-[2rem] text-white">
               <h4 className="font-bold mb-4">Startup Expert?</h4>
               <p className="text-xs text-gray-400 leading-relaxed mb-6">Need help picking the right combination of machines for your new brand?</p>
               <a href={CONTACT_INFO.whatsappUrl} className="text-accent-blue font-bold text-sm block">Chat with an Expert →</a>
            </div>
          </aside>

          {/* Mobile Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-gray-50 p-6 rounded-2xl border border-gray-100 overflow-hidden"
              >
                <h3 className="font-bold mb-4">Select Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setSelectedCategory(null); setIsFilterOpen(false); }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${selectedCategory === null ? "bg-primary-900 text-white border-primary-900" : "bg-white text-gray-600 border-gray-200"}`}
                  >
                    All
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${selectedCategory === cat ? "bg-primary-900 text-white border-primary-900" : "bg-white text-gray-600 border-gray-200"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-grow space-y-8">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-accent-blue transition-colors">
                <Search size={22} />
              </div>
              <input
                type="text"
                placeholder="Search by machine name, function, or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 md:py-6 bg-white border-2 border-gray-100 rounded-2xl md:rounded-[2rem] outline-none focus:border-accent-blue transition-all md:text-lg shadow-sm"
              />
            </div>

            {/* Results */}
            <div className="space-y-12">
               <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <p>Showing {filteredProducts.length} machines</p>
                  {selectedCategory && (
                    <button onClick={() => setSelectedCategory(null)} className="text-accent-blue hover:underline">Clear category: {selectedCategory}</button>
                  )}
               </div>

               {filteredProducts.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                 </div>
               ) : (
                 <div className="text-center py-24 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                    <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
                    <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">No matching machines found</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mb-8">We might have what you need in our offline showroom. Ask us on WhatsApp!</p>
                    <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp px-8">
                       <MessageCircle size={20} />
                       Ask an Expert
                    </a>
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog CTA */}
      <section className="section-container !py-24">
        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
           <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl text-white">Browse Zimbabwe's Industrial <br className="hidden md:block" /> Machinery Catalog on WhatsApp</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Get instant access to real-time availability, detailed pricing, and video demonstrations of our machines directly in your WhatsApp app.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href={CONTACT_INFO.catalogUrl} target="_blank" rel="noopener noreferrer" className="btn-accent px-12 py-4 text-lg">
                  View Full Catalog
                </a>
                <a href={CONTACT_INFO.whatsappUrl} className="text-white font-bold flex items-center gap-2 hover:text-accent-blue transition-colors">
                  <MessageCircle size={24} />
                  Speak with a Specialist
                </a>
              </div>
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -mr-32 -mt-32" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -ml-32 -mb-32" />
        </div>
      </section>
    </div>
  );
}
