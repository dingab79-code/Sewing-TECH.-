import { Check, ShieldCheck, Users, Target, History, Award, Building2, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary-900 overflow-hidden pt-24 pb-32 relative">
        <div className="section-container relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="text-accent-blue font-bold uppercase tracking-widest text-sm">Our Story</div>
            <h1 className="text-5xl md:text-7xl text-white">The Stitching Experts <br /> of Zimbabwe</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Sewing TECH is more than a machinery supplier. We are a family of textile professionals dedicated to empowering the next generation of Zimbabwean fashion designers and manufacturers.
            </p>
          </div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute bottom-0 right-0 p-24 opacity-5 pointer-events-none">
           <Building2 size={400} />
        </div>
      </section>

      {/* Stats */}
      <section className="section-container !-mt-20 relative z-20">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Machines Sold", val: "2,500+", icon: Award },
              { label: "Happy Clients", val: "850+", icon: Users },
              { label: "Years Experience", val: "15+", icon: History },
              { label: "Support Staff", val: "12", icon: Target },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 text-center space-y-4">
                 <div className="w-12 h-12 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center text-accent-blue">
                   <s.icon size={28} />
                 </div>
                 <div className="space-y-1">
                   <p className="text-3xl font-display font-bold text-primary-900">{s.val}</p>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{s.label}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Mission */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl">Our Mission: Your Success.</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Founded in Harare, Sewing TECH recognized a gap in the market: access to high-quality, professional-grade industrial equipment for local entrepreneurs. 
              </p>
              <div className="space-y-6">
                {[
                  "Provide the most reliable textile machinery in Africa.",
                  "Offer expert technical training and after-sales support.",
                  "Help local fashion brands scale their production efficiently.",
                  "Maintain a complete inventory of spare parts and accessories."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                       <Check size={18} />
                    </div>
                    <span className="text-primary-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
           </div>
           <div className="relative">
              <div className="absolute -inset-4 bg-accent-blue/5 rounded-[3rem] blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000" 
                className="relative rounded-[3rem] shadow-2xl border border-gray-100" 
                alt="Our Workshop" 
              />
           </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="bg-gray-50 py-24">
         <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
               <ShieldCheck className="text-accent-blue" size={48} />
               <h3 className="text-2xl">Verified Quality</h3>
               <p className="text-gray-500 leading-relaxed">
                 Every machine we supply undergoes a 24-point inspection by our technical team in Harare before it reaches your shop floor.
               </p>
            </div>
            <div className="space-y-6">
               <Target className="text-accent-blue" size={48} />
               <h3 className="text-2xl">Results Driven</h3>
               <p className="text-gray-500 leading-relaxed">
                 We measure our success by the output of your factory. If your machines aren't running, we aren't happy.
               </p>
            </div>
            <div className="space-y-6">
               <History className="text-accent-blue" size={48} />
               <h3 className="text-2xl">Local Legacy</h3>
               <p className="text-gray-500 leading-relaxed">
                 Deep roots in Zimbabwe's textile industry means we understand the challenges of local production environment.
               </p>
            </div>
         </div>
      </section>

      {/* Join the family CTA */}
      <section className="section-container">
        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
            <h2 className="text-4xl text-white mb-8">Ready to start your journey <br /> with Sewing TECH?</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={CONTACT_INFO.whatsappUrl} className="btn-accent px-12">Talk to an Expert</a>
              <a href={CONTACT_INFO.catalogUrl} target="_blank" rel="noopener noreferrer" className="btn-primary border border-white/20">Explore Machines</a>
            </div>
            
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <MapPin size={200} />
            </div>
        </div>
      </section>
    </div>
  );
}
