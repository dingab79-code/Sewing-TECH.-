import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      
      {/* Mobile Sticky Quote Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40 grid grid-cols-2 gap-4">
        <a 
          href="tel:+263719622313" 
          className="flex items-center justify-center gap-2 py-3 border border-primary-900 rounded-lg text-primary-900 font-bold text-sm"
        >
          Call Now
        </a>
        <a 
          href="https://wa.me/263719622313" 
          className="btn-whatsapp py-3 justify-center text-sm font-bold"
        >
          WhatsApp Inquiry
        </a>
      </div>
    </div>
  );
}
