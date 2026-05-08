import { useState } from "react";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_INFO } from "../constants";

const FAQS = [
  {
    q: "Do you deliver to cities outside Harare?",
    a: "Yes, we offer nationwide delivery across Zimbabwe. Whether you're in Bulawayo, Mutare, Gweru, or Victoria Falls, our logistics team ensures your machinery reaches you safely and promptly."
  },
  {
    q: "Do you provide technical training with new machines?",
    a: "Absolutely. Every machine purchase includes a complimentary operator training session. This covers machine setup, correct usage, safety protocols, and basic daily maintenance to ensure long equipment life."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept various payment methods including cash, USD bank transfers (Nostro), and mobile money platforms where applicable. For verified startup businesses, we can discuss custom payment structures on specific equipment packages."
  },
  {
    q: "Is there a warranty on your industrial machines?",
    a: "Yes, all our new industrial machines come with a 1-year local warranty. This covers manufacturing defects and provides you with peace of mind. We also stock genuine spare parts for quick servicing."
  },
  {
    q: "Can I test a machine before I buy it?",
    a: "We highly encourage this! Visit our showroom at 48 Kenneth Kaunda Ave in Harare where you can see live demonstrations and even bring your own fabric samples to test on our display machines."
  },
  {
    q: "Do you supply spare parts for other brands?",
    a: "While we specialize in the brands we supply, we carry a wide range of universal industrial sewing machine parts and needles that are compatible with most major brands."
  },
  {
    q: "How soon can I get a technical repair team to my factory?",
    a: "For businesses in Harare, we usually provide same-day or next-day on-site technical support. For businesses outside Harare, we can schedule visits or provide immediate remote assistance via WhatsApp video call."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
       <section className="bg-gray-50 pt-24 pb-20 border-b border-gray-100">
          <div className="section-container text-center max-w-4xl space-y-6">
             <div className="text-accent-blue font-bold uppercase tracking-widest text-xs">Help Center</div>
             <h1 className="text-4xl md:text-6xl text-primary-900">How Can We Help You?</h1>
             <p className="text-xl text-gray-500 leading-relaxed md:px-20">
               Find answers to common questions about our machinery, delivery, support, and business solutions.
             </p>
          </div>
       </section>

       {/* FAQ List */}
       <section className="section-container !py-24">
          <div className="max-w-4xl mx-auto space-y-4">
             {FAQS.map((faq, i) => (
               <div 
                 key={i} 
                 className={`border rounded-[2rem] transition-all duration-300 ${openIndex === i ? "bg-white border-accent-blue shadow-xl shadow-blue-100" : "bg-white border-gray-100 hover:border-gray-300"}`}
               >
                 <button 
                   onClick={() => setOpenIndex(openIndex === i ? null : i)}
                   className="w-full text-left p-8 md:p-10 flex items-center justify-between group"
                 >
                    <span className="text-xl md:text-2xl font-display font-bold text-primary-900 pr-8">{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === i ? "bg-accent-blue text-white" : "bg-gray-50 text-gray-400 group-hover:text-primary-900"}`}>
                       {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                 </button>
                 
                 <AnimatePresence>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                         <div className="px-10 pb-10 text-gray-500 text-lg leading-relaxed max-w-3xl border-t border-gray-50 pt-8">
                            {faq.a}
                         </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
               </div>
             ))}
          </div>
       </section>

       {/* CTA */}
       <section className="section-container !pb-32">
          <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
             <div className="mb-8 w-20 h-20 bg-accent-blue/10 rounded-3xl flex items-center justify-center text-accent-blue">
                <HelpCircle size={40} />
             </div>
             <h2 className="text-4xl text-white mb-6">Didn't find what you need?</h2>
             <p className="text-gray-400 max-w-xl text-lg mb-10 leading-relaxed">
               Our WhatsApp support desk is available daily from 8:00 AM to 5:00 PM to answer specific technical or order questions.
             </p>
             <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp px-12 py-5 text-xl">
               <MessageCircle size={28} />
               Chat with Support
             </a>
          </div>
       </section>
    </div>
  );
}
