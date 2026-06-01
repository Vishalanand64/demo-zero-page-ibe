import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 border border-gold flex items-center justify-center">
                <span className="text-gold font-serif text-xl font-bold">GC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif tracking-[0.2em] leading-tight uppercase text-gray-900">Grand Continent</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold">Hotels & Resorts</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Experience the fusion of modern sophistication and timeless hospitality. Your sanctuary in the heart of the city.
            </p>
            <div className="flex space-x-5">
              {[MessageSquare, Send, Share2].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: '#c5a059' }}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-8 text-gray-900">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Dining', 'Wellness', 'Careers', 'Offers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gold transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-8 text-gray-900">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-gold mt-1" />
                <span className="text-sm text-gray-500 leading-relaxed font-medium">
                  No 115, Site No 43, 1st Cross, 3rd Main Road Chanukya Layout, Nagawara, Bangalore
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-gold" />
                <span className="text-sm text-gray-500 font-medium">+91 80 1234 5678</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-gold" />
                <span className="text-sm text-gray-500 font-medium">info@grandcontinent.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-8 text-gray-900">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-6 font-medium">Subscribe to receive our latest offers and news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-gray-900"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest hover:bg-gold/90 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          <p>© 2024 Grand Continent Hotels. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
