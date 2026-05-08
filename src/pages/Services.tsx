import { Cog, Truck, Users, Settings, Wrench, Briefcase, PlayCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../constants";

export default function Services() {
  const services = [
    {
      title: "Machine Supply & Sourcing",
      desc: "Direct access to world-leading industrial sewing and printing brands. We source, import, and deliver directly to your business premises across Zimbabwe.",
      icon: Truck,
      color: "bg-accent-blue"
    },
    {
      title: "Professional Installation",
      desc: "Our technicians don't just drop off boxes. We assemble, calibrate, and test every machine on-site to ensure optimal performance from day one.",
      icon: Cog,
      color: "bg-primary-900"
    },
    {
      title: "Operator Training",
      desc: "Get the most out of your investment. We provide comprehensive training for your staff on machine operation, basic maintenance, and troubleshooting.",
      icon: PlayCircle,
      color: "bg-accent-blue"
    },
    {
      title: "Repairs & Maintenance",
      desc: "Keep your production line moving. Our Harare-based repair center offers fast turnaround on servicing with authentic manufacturer spare parts.",
      icon: Wrench,
      color: "bg-primary-900"
    },
    {
      title: "Business Consulting",
      desc: "Are you scaling? Moving from small orders to mass production? Our industry experts advise on factory floor planning and machinery selection for maximum ROI.",
      icon: Briefcase,
      color: "bg-accent-blue"
    },
    {
      title: "Technical Support",
      desc: "Got a problem in the middle of a rush order? Our WhatsApp technical desk is online to provide immediate guidance and diagnostics.",
      icon: Settings,
      color: "bg-primary-900"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="section-container text-center max-w-4xl space-y-6">
          <div className="text-accent-blue font-bold uppercase tracking-widest text-xs">Our Solutions</div>
          <h1 className="text-4xl md:text-6xl text-primary-900">Complete Support for Your <br className="hidden md:block" /> Textile Production</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            We provide the tools, the technology, and the expertise to help you build a profitable garment manufacturing business in Zimbabwe.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-10 rounded-[3rem] border border-gray-100 bg-white hover:border-accent-blue/20 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500">
              <div className={`${s.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                {s.desc}
              </p>
              <a href={CONTACT_INFO.whatsappUrl} className="text-accent-blue font-bold flex items-center gap-2 text-sm">
                Enquire About {s.title.split(' ')[0]}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Startup focus section */}
      <section className="bg-primary-900 py-24 relative overflow-hidden">
        <div className="section-container flex flex-col lg:flex-row gap-16 items-center">
           <div className="lg:w-1/2 text-white space-y-8">
              <h2 className="text-4xl md:text-5xl text-white">Startup Equipment Packages</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Take the guesswork out of starting your brand. We've curated professional bundles designed to meet the specific requirements and budgets of new Zimbabwean clothing startups.
              </p>
              <ul className="space-y-4">
                 {[
                   "Bundled discounts on essential machines",
                   "Extended technical training for beginners",
                   "Business operation blueprint included",
                   "Flexible payment options for verified startups"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                      {item}
                   </li>
                 ))}
              </ul>
              <div className="pt-6">
                <Link to="/start-business" className="btn-accent px-10">See Startup Bundles</Link>
              </div>
           </div>
           <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-accent-blue/10 rounded-[4rem] rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1000" 
                alt="Printing Solution" 
                className="relative z-10 rounded-[4rem] shadow-2xl border border-white/5"
              />
           </div>
        </div>
      </section>

      {/* FAQ shortcut CTA */}
      <section className="section-container !py-24">
         <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-gray-100">
            <div className="max-w-xl space-y-4">
               <h3 className="text-3xl">Have technical questions?</h3>
               <p className="text-gray-500">Find answers about warranty, training, installation, and more in our detailed help center.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <Link to="/faq" className="btn-primary text-center">Visit Help Center</Link>
               <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp justify-center">Chat with Support</a>
            </div>
         </div>
      </section>
    </div>
  );
}
