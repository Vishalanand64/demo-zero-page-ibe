import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin } from 'lucide-react';

const properties = [
  {
    title: "Grand Continent, Bangalore",
    address: "Nagawara, Opp Manyata Tech Park",
    desc: "A flagship business hotel offering world-class luxury and proximity to the city's major tech hubs.",
    image: "/images/suite-luxury.jpg",
    rating: "4.8",
    reviews: "1,240",
    price: "4,500"
  },
  {
    title: "Grand Continent, Malleshwaram",
    address: "Malleshwaram West, Bangalore",
    desc: "Experience the heritage of Bangalore with a modern twist in our elegantly designed rooms and suites.",
    image: "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    rating: "4.7",
    reviews: "850",
    price: "3,800"
  },
  {
    title: "Grand Continent, Hebbal",
    address: "Hebbal, Bangalore North",
    desc: "Strategically located for the frequent traveler, offering unparalleled comfort and swift connectivity.",
    image: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    rating: "4.9",
    reviews: "960",
    price: "4,200"
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block font-bold"
            >
              Our Locations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-gray-900"
            >
              Our Premium Properties
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center space-x-3 text-sm uppercase tracking-widest border-b border-black/10 pb-2 hover:border-gold transition-colors font-bold text-gray-800"
          >
            <span>Explore All Properties</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {properties.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <button className="bg-white text-black py-4 uppercase tracking-widest font-bold text-xs hover:bg-gold hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
                <div className="absolute top-6 left-6 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                  <Star size={14} className="fill-gold text-gold" />
                  <span className="text-xs font-bold text-gray-900">{item.rating}</span>
                  <span className="text-[10px] text-gray-500 font-medium">({item.reviews} Reviews)</span>
                </div>
                <div className="absolute top-6 right-6 bg-gold text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  From ₹{item.price}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gold mb-3">
                <MapPin size={14} />
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold">{item.address}</span>
              </div>
              
              <h3 className="text-2xl font-serif mb-3 text-gray-900 group-hover:text-gold transition-colors leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm font-inter leading-relaxed mb-6 line-clamp-2">
                {item.desc}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Available Now</span>
                <span className="text-gold font-bold text-sm uppercase tracking-widest group-hover:underline">Book Room</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
