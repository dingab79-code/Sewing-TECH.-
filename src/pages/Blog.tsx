import { Calendar, User, ArrowRight, ShoppingBag, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../constants";

const POSTS = [
  {
    id: "startup-guide",
    title: "How to Start a Clothing Brand in Zimbabwe: The Machinery Blueprint",
    excerpt: "Everything you need to know about selecting the right equipment for your first collection in Zimbabwe's fashion market.",
    date: "May 15, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
    category: "Business Basics"
  },
  {
    id: "dtf-printing",
    title: "The Ultimate DTF Printing Guide for Local Print Shops",
    excerpt: "Why DTF is replacing screen printing for small-to-medium runs in Harare and how to optimize your setup.",
    date: "May 10, 2024",
    author: "Technical Team",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
    category: "Printing Tech"
  },
  {
    id: "machine-maintenance",
    title: "5 Daily Maintenance Habits to Double Your Machine's Lifespan",
    excerpt: "Preventive maintenance tips that save thousands in repair costs for high-speed industrial locksticks.",
    date: "April 28, 2024",
    author: "Support Dept",
    image: "https://images.unsplash.com/photo-1605634543202-601614e040f7?auto=format&fit=crop&q=80&w=800",
    category: "Maintenance"
  }
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
       <section className="bg-primary-900 pt-24 pb-32">
          <div className="section-container text-center max-w-4xl space-y-6">
             <div className="text-accent-blue font-bold uppercase tracking-widest text-xs font-display">Knowledge Hub</div>
             <h1 className="text-5xl md:text-7xl text-white">Resources & Insights</h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
               Expert advice on textile machinery, business growth, and printing technology for the Zimbabwean market.
             </p>
          </div>
       </section>

       <section className="section-container !-mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {POSTS.map((post, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl flex flex-col group h-full">
                   <div className="aspect-[16/9] overflow-hidden">
                      <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                   </div>
                   <div className="p-10 flex flex-col flex-grow space-y-6">
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                         <span className="text-accent-blue bg-accent-blue/5 px-2 py-0.5 rounded">{post.category}</span>
                         <span>{post.date}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-primary-900 group-hover:text-accent-blue transition-colors line-clamp-2 leading-tight">
                         {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                         {post.excerpt}
                      </p>
                      <div className="mt-auto pt-6 border-t border-gray-50">
                         <Link to={`/blog/${post.id}`} className="text-accent-blue font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                            Read Full Article <ArrowRight size={16} />
                         </Link>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </section>

       {/* Newsletter Replacement: WhatsApp Group Invite Link (Hypothetical but high converting) */}
       <section className="section-container !py-32">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-24 border border-gray-100 flex flex-col items-center text-center">
             <BookOpen className="text-primary-900 mx-auto mb-8" size={60} />
             <h2 className="text-4xl mb-6">Stay Ahead of the Industry</h2>
             <p className="text-gray-500 text-lg max-w-2xl mb-12">
                Join our exclusive WhatsApp community for flash deals on pre-owned machinery, startup equipment alerts, and technical tips.
             </p>
             <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp px-12 py-5 text-lg">
                Join the Community hub
             </a>
             <p className="mt-6 text-xs text-gray-400 font-medium">Daily updates • Industry insights • Exclusive discounts</p>
          </div>
       </section>

       {/* Featured Catalog CTA */}
       <section className="bg-primary-900 py-24 relative overflow-hidden">
          <div className="section-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="md:w-3/5 space-y-6">
                <h2 className="text-3xl md:text-5xl text-white">Check out our latest machinery arrivals</h2>
                <p className="text-gray-400 text-lg">Our catalog is updated weekly with the latest in industrial textile technology.</p>
             </div>
             <a href={CONTACT_INFO.catalogUrl} target="_blank" rel="noopener noreferrer" className="btn-accent px-12 py-4 text-lg shrink-0">
                <ShoppingBag size={24} />
                Open Catalog
             </a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -ml-32 -mt-32" />
       </section>
    </div>
  );
}
