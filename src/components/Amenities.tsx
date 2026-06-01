import { motion } from 'framer-motion';
import { Utensils, Wifi, Waves, Coffee, Dumbbell, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

const amenities = [
  { icon: Utensils, title: "Fine Dining", desc: "Award-winning restaurant serving global cuisines." },
  { icon: Waves, title: "Infinity Pool", desc: "Temperature-controlled rooftop pool with city views." },
  { icon: Sparkles, title: "Luxury Spa", desc: "Rejuvenating treatments and traditional therapies." },
  { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art equipment and personal trainers." },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Seamless connectivity throughout the premises." },
  { icon: Coffee, title: "Artisan Cafe", desc: "Premium coffee and freshly baked delicacies." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Ensuring your safety and privacy at all times." },
  { icon: MapPin, title: "Prime Location", desc: "Situated in the heart of the business district." },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-black/[0.03] whitespace-nowrap pointer-events-none select-none">
        GRAND CONTINENT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block font-bold"
          >
            Refined Comfort
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-gray-900"
          >
            Exclusive Amenities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="w-16 h-16 border border-gray-200 bg-white shadow-sm flex items-center justify-center mb-6 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/10 transition-all duration-500">
                <item.icon size={28} className="text-gold group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
