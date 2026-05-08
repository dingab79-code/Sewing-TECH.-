import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, ArrowRight, Clock } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-primary-900 pt-24 pb-32 overflow-hidden relative">
        <div className="section-container relative z-10 text-center max-w-4xl space-y-6">
           <h1 className="text-5xl md:text-7xl text-white">Connect With Our Team</h1>
           <p className="text-xl text-gray-400 leading-relaxed">
              Have questions about machinery, parts, or startup packages? We are online across all platforms and ready to assist you.
           </p>
           
           <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp px-8 py-4 text-lg">
                <MessageCircle size={24} />
                WhatsApp Live Chat
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="btn-accent px-8 py-4 text-lg">
                <Phone size={24} />
                Call +263 71 962 2313
              </a>
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container !-mt-16 relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Contact Details Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-12">
                  <div className="space-y-6">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-accent-blue shadow-sm">
                        <MapPin size={32} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold mb-2">Our Showroom</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">
                           {CONTACT_INFO.address} <br />
                           Harare, Zimbabwe
                        </p>
                        <a href="https://maps.google.com" className="text-accent-blue font-bold text-sm inline-flex items-center gap-2 mt-4 hover:gap-3 transition-all underline decoration-2 underline-offset-4">
                           Get Google Maps Directions <ArrowRight size={16} />
                        </a>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-accent-blue shadow-sm">
                        <Phone size={32} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold mb-2">Call & Text</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">
                           General Inquiry: {CONTACT_INFO.phone} <br />
                           WhatsApp: {CONTACT_INFO.phone}
                        </p>
                     </div>
                  </div>
               </div>

               <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-12">
                  <div className="space-y-6">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-accent-blue shadow-sm">
                        <Mail size={32} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold mb-2">Email Desk</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">
                           {CONTACT_INFO.email} <br />
                           support@sewingtechzim.com
                        </p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-accent-blue shadow-sm">
                        <Clock size={32} />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Business Hours</h3>
                        <div className="space-y-2">
                           {CONTACT_INFO.hours.map(h => (
                             <div key={h.day} className="flex justify-between text-sm">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{h.day}</span>
                                <span className="text-primary-900 font-bold">{h.time}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Sidebar Contact Card */}
            <div className="lg:col-span-4 bg-primary-900 rounded-[2.5rem] p-12 text-white flex flex-col justify-between overflow-hidden relative group">
               <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl font-display font-bold">Follow Us</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Stay updated with our latest machine arrivals and business success stories across our social channels.
                  </p>
                  <div className="space-y-6">
                     <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                        <div className="w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center">
                           <Instagram size={20} />
                        </div>
                        <span className="font-bold">Instagram</span>
                     </a>
                     <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                        <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center">
                           <Facebook size={20} />
                        </div>
                        <span className="font-bold">Facebook Page</span>
                     </a>
                  </div>
               </div>

               <div className="relative z-10 pt-16">
                  <div className="bg-accent-blue/10 rounded-2xl p-6 border border-accent-blue/20">
                     <p className="text-sm italic text-blue-200">"We aim to respond to all inquiries within 1 business hour."</p>
                  </div>
               </div>
               
               {/* Decorative Bubble */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[80px] -mr-32 -mt-32 group-hover:bg-accent-blue/20 transition-all duration-700" />
            </div>

         </div>
      </section>

      {/* Embedded Map Section */}
      <section className="section-container !py-24">
         <div className="space-y-8">
            <h2 className="text-3xl text-center">Locate our Showroom</h2>
            <div className="w-full h-[500px] bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center justify-center overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 pointer-events-none" alt="Map Placeholder" />
               <div className="relative z-10 bg-white p-12 rounded-[2rem] shadow-2xl text-center max-w-sm space-y-6 border border-gray-100">
                  <MapPin size={48} className="text-accent-blue mx-auto" strokeWidth={2.5} />
                  <div>
                    <h4 className="text-2xl font-bold font-display mb-2">Showroom Map</h4>
                    <p className="text-gray-500 text-sm">Open this location directly on your device to navitage to 48 Kenneth Kaunda Ave.</p>
                  </div>
                  <a href="https://maps.google.com" className="btn-primary w-full shadow-lg shadow-black/10">Navigate Now</a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
