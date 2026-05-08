import { Rocket, TrendingUp, Users, ShoppingBag, ShieldCheck, PlayCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../constants";

export default function StartBusiness() {
  const packages = [
    {
      name: "The Boutique Starter",
      price: "$750",
      target: "Home businesses & small boutiques",
      items: ["1 High-speed Lockstitch", "1 4-thread Overlocker", "Starter Thread Set", "Basic Training"],
      icon: Users
    },
    {
      name: "The Garment Lab",
      price: "$1,800",
      target: "Growing brands & micro-factories",
      items: ["2 Lockstitch Machines", "1 Professional Overlocker", "1 Interlock Machine", "Basic Servicing Kit"],
      icon: TrendingUp,
      popular: true
    },
    {
      name: "The Print Studio",
      price: "Request Proposal",
      target: "Specialized printing shops",
      items: ["DTF Printing System", "Auto-open Heat Press", "Consumables Starter Kit", "Design Software Setup"],
      icon: Rocket
    }
  ];

  return (
    <div className="bg-white">
       {/* Hero */}
       <section className="relative pt-24 pb-32 bg-gray-50">
          <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-3/5 space-y-8">
                <div className="inline-flex items-center gap-2 bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Startup Hub
                </div>
                <h1 className="text-5xl md:text-7xl">Turn Your Fashion Passion into a <br className="hidden md:block" /> Powerhouse Brand</h1>
                <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                  We supply more than just sewing machines—we provide the industrial engine that drives your profitability. Join 200+ thriving clothing brands in Zimbabwe that started with Sewing TECH.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp px-8 py-4 justify-center">
                    <MessageCircle size={22} />
                    Get Business Consultation
                  </a>
                  <a href="#packages" className="btn-primary px-8 py-4 justify-center">
                    View Startup Packages
                  </a>
                </div>
             </div>
             <div className="lg:w-2/5 relative">
               <img src="https://images.unsplash.com/photo-1598971861713-54ad16a7e718?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl relative z-10 border border-white" alt="Startup" />
               <div className="absolute -bottom-8 -left-8 bg-primary-900 p-8 rounded-3xl text-white shadow-xl z-20">
                  <p className="text-3xl font-display font-bold text-accent-blue">200+</p>
                  <p className="text-xs uppercase tracking-widest font-bold">Zim Brands Launched</p>
               </div>
             </div>
          </div>
       </section>

       {/* Guide section */}
       <section className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
             <h2 className="text-4xl md:text-5xl">The 4-Step Blueprint to Launching Your Factory</h2>
             <p className="text-gray-500">Our team walks you through every stage to ensure your business foundation is solid.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Define Goals", desc: "Identify your target niche, production volume, and budget.", icon: Rocket },
               { title: "Match Machinery", desc: "We select the perfect ecosystem of machines for your specific production needs.", icon: ShoppingBag },
               { title: "Set Up & Train", desc: "Our technicians set up your showroom-quality shop floor and train your team.", icon: PlayCircle },
               { title: "Scale Up", desc: "Ongoing maintenance and technical support to keep you growing sustainably.", icon: TrendingUp }
             ].map((s, i) => (
                <div key={i} className="space-y-6">
                   <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary-900 font-display font-bold text-2xl border border-gray-100">
                      0{i+1}
                   </div>
                   <h3 className="text-xl font-bold">{s.title}</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
             ))}
          </div>
       </section>

       {/* Packages */}
       <section id="packages" className="bg-primary-900 py-32">
          <div className="section-container">
             <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                <h2 className="text-4xl md:text-5xl text-white">Curated Startup Packages</h2>
                <p className="text-gray-400 italic">Save up to 15% when you buy professional bundles.</p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {packages.map((pkg, i) => (
                   <div key={i} className={`relative p-10 rounded-[3rem] border ${pkg.popular ? "bg-accent-blue border-white/20 text-white shadow-2xl shadow-blue-900/50" : "bg-primary-800 border-white/5 text-white"}`}>
                      {pkg.popular && (
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-accent-blue px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg">
                            Recommended for growth
                         </div>
                      )}
                      
                      <div className="space-y-8">
                         <div className="space-y-2">
                           <h3 className="text-2xl font-bold">{pkg.name}</h3>
                           <p className={`text-xs uppercase font-bold tracking-widest opacity-60`}>{pkg.target}</p>
                         </div>
                         
                         <div className="text-4xl font-display font-bold">{pkg.price}</div>
                         
                         <ul className="space-y-4 pt-4">
                           {pkg.items.map((item, j) => (
                             <li key={j} className="flex gap-3 text-sm font-medium">
                                <ShieldCheck size={18} className={pkg.popular ? "text-white" : "text-accent-blue"} />
                                {item}
                             </li>
                           ))}
                         </ul>

                         <div className="pt-8">
                           <a href={CONTACT_INFO.whatsappUrl} className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${pkg.popular ? "bg-primary-900 text-white" : "bg-white text-primary-900 hover:bg-accent-blue hover:text-white"}`}>
                              Enquire via WhatsApp
                           </a>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* CTA Final */}
       <section className="section-container !py-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl">Your Successful Textile Journey Starts with One Conversation.</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                   Don't wait till you're "ready." Most successful brands started exactly where you are. Let our experts create a custom roadmap for your unique vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp px-10">Start Your Consultation</a>
                  <Link to="/contact" className="btn-primary px-10 border border-primary-900 flex items-center justify-center gap-2">Contact Us <ArrowRight size={20} /></Link>
                </div>
             </div>
             <div className="lg:w-1/2 bg-gray-50 rounded-[4rem] p-12 md:p-24 border border-gray-100 text-center">
                <Rocket className="text-accent-blue mx-auto mb-8" size={80} />
                <h3 className="text-3xl mb-4">Daily Business Tip</h3>
                <p className="italic text-gray-500">"Quality machinery is not an expense—it is your most reliable business partner."</p>
             </div>
          </div>
       </section>
    </div>
  );
}
