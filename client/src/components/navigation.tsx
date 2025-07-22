import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollTo } from "@/hooks/use-scroll-to";
import gkcs from "../../../attached_assets/gkcs.png";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#517C63]
      `
    }
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
           <img src={gkcs} alt="GK Cloud Solutions" className="w-20"></img>
            
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 text-white">
            <button 
              onClick={() => handleNavClick("hero")}
              className=" hover:text-white/50 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick("products")}
              className=" hover:text-white/50 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavClick("features")}
              className="hover:text-white/50 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick("contact")}
              className=" hover:text-white/50 transition-colors"
            >
              Contact
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden  hover:text-[var(--gk-blue)] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-t overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-6 py-4 space-y-3"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {["hero", "products", "features", "contact"].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className="block w-full text-left text-white hover:text-[var(--gk-blue)] transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
