import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 border border-gold flex items-center justify-center">
            <span className="text-gold font-serif text-xl font-bold">GC</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-serif tracking-[0.2em] leading-tight uppercase transition-colors duration-500 ${isScrolled ? 'text-black' : 'text-white'}`}>Grand Continent</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Hotels & Resorts</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-8">
          <button className={`flex items-center space-x-2 text-xs uppercase tracking-widest hover:text-gold transition-colors font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Globe className="w-4 h-4" />
            <span>English</span>
          </button>
          
          <button className={`text-xs uppercase tracking-widest hover:text-gold transition-colors font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            My Bookings
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className={`px-8 py-3 border rounded-sm text-xs uppercase tracking-widest font-bold transition-all ${
              isScrolled 
                ? 'border-black text-black hover:bg-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gold text-white px-8 py-3 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-gold/90 transition-shadow shadow-lg shadow-gold/20"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-black/5"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              <button className="flex items-center space-x-2 text-sm uppercase tracking-widest text-black">
                <Globe className="w-4 h-4 text-gold" />
                <span>English</span>
              </button>
              <button className="text-sm uppercase tracking-widest text-black text-left">
                My Bookings
              </button>
              <div className="pt-6 border-t border-black/5 flex flex-col space-y-4">
                <button className="w-full py-4 border border-black uppercase tracking-widest font-bold text-sm text-black">
                  Login
                </button>
                <button className="bg-gold text-white w-full py-4 uppercase tracking-widest font-bold text-sm">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
