import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Mobile Catalog Banner (Floating) */}
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        href={CONTACT_INFO.catalogUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-primary-900 text-white px-4 py-2 rounded-full shadow-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-2 md:hidden"
      >
        <div className="bg-accent-blue p-1 rounded-full">
           <MessageCircle size={14} />
        </div>
        Browse Catalog
      </motion.a>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-16 h-16 bg-whatsapp-green text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} strokeWidth={2.5} />
      </motion.a>
    </div>
  );
}
