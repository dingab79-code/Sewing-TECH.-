import { Link } from "react-router-dom";
import { CONTACT_INFO, NAVIGATION_LINKS } from "../constants";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, ShoppingBag } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white text-primary-900 p-2 rounded-lg">
                <ShoppingBag size={24} />
              </div>
              <span className="text-2xl font-display font-bold">SEWING TECH</span>
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Zimbabwe's trusted industrial textile machinery supplier. Empowering tailors and startups with professional equipment and expert support.
            </p>
            <div className="flex items-center gap-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-800 rounded-full hover:bg-accent-blue transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-800 rounded-full hover:bg-accent-blue transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href={CONTACT_INFO.whatsappUrl} className="p-2 bg-primary-800 rounded-full hover:bg-accent-blue transition-colors text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <a href={CONTACT_INFO.catalogUrl} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">WhatsApp Catalog</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Visit Showroom</h3>
            <ul className="space-y-4">
               <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="shrink-0 text-accent-blue" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="shrink-0 text-accent-blue" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="shrink-0 text-accent-blue" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Business Hours</h3>
            <ul className="space-y-3">
              {CONTACT_INFO.hours.map(h => (
                <li key={h.day} className="flex justify-between text-gray-400 text-sm">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-primary-800 rounded-xl border border-primary-700">
              <p className="text-sm font-medium mb-2">Need Help Immediately?</p>
              <a href={CONTACT_INFO.whatsappUrl} className="btn-whatsapp py-2 w-full justify-center text-sm">
                Chat Now
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Sewing TECH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
