import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT_INFO, NAVIGATION_LINKS } from "../constants";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-900 text-white p-2 rounded-lg">
              <ShoppingBag size={24} />
            </div>
            <div>
              <span className="text-xl font-display font-bold text-primary-900 leading-tight block">SEWING TECH</span>
              <span className="text-[10px] uppercase tracking-widest text-primary-700 font-medium block -mt-1">YOUR ONE STITCHING SHOP</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent-blue ${isActive ? "text-accent-blue" : "text-primary-800"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={CONTACT_INFO.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-5 flex items-center gap-2"
            >
              <ShoppingBag size={16} />
              View Catalog
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {NAVIGATION_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2 ${isActive ? "text-accent-blue" : "text-primary-800"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={CONTACT_INFO.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} />
                  View Catalog
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
