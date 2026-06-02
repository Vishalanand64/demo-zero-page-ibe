
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { useState } from 'react';

const properties = [
  {
    title: 'Grand Continent, Bangalore',
    address: 'Nagawara, Opp Manyata Tech Park',
    desc: "A flagship business hotel offering world-class luxury and proximity to the city's major tech hubs.",
    image: '/images/suite-luxury.jpg',
    rating: '4.8',
    reviews: '1,240',
    price: '4,500'
  },
  {
    title: 'Grand Continent, Malleshwaram',
    address: 'Malleshwaram West, Bangalore',
    desc:
      'Experience the heritage of Bangalore with a modern twist in our elegantly designed rooms and suites.',
    image:
      'https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    rating: '4.7',
    reviews: '850',
    price: '3,800'
  },
  {
    title: 'Grand Continent, Hebbal',
    address: 'Hebbal, Bangalore North',
    desc:
      'Strategically located for the frequent traveler, offering unparalleled comfort and swift connectivity.',
    image:
      'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    rating: '4.9',
    reviews: '960',
    price: '4,200'
  }
];

const Rooms = () => {
  const [singleProperty, setSingleProperty] = useState(false);

  return (
    <section
      id="rooms"
      className="py-16 md:py-24 xl:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-14">
        {/* Toggle Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setSingleProperty(!singleProperty)}
            className="px-5 md:px-6 py-3 bg-black text-white rounded-sm text-xs md:text-sm uppercase tracking-widest font-semibold hover:bg-gold transition-colors"
          >
            {singleProperty
              ? 'Show Multiple Properties'
              : 'Show Single Property'}
          </button>
        </div>

        {/* MULTIPLE PROPERTIES */}
        {!singleProperty && (
          <>
            <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 lg:mb-16 gap-8">
              <div className="max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-bold"
                >
                  Our Locations
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-serif text-gray-900 leading-tight"
                >
                  Our Premium Properties
                </motion.h2>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group flex items-center space-x-3 text-xs sm:text-sm uppercase tracking-widest border-b border-black/10 pb-2 hover:border-gold transition-colors font-bold text-gray-800 self-start lg:self-auto"
              >
                <span>Explore All Properties</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
              {properties.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] xl:aspect-[5/6] overflow-hidden mb-5 lg:mb-6 rounded-sm shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 lg:p-8">
                      <button className="bg-white text-black py-3 lg:py-4 uppercase tracking-widest font-bold text-xs hover:bg-gold hover:text-white transition-colors rounded-sm">
                        View Details
                      </button>
                    </div>

                    <div className="absolute top-4 lg:top-6 left-4 lg:left-6 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                      <Star
                        size={14}
                        className="fill-gold text-gold"
                      />
                      <span className="text-xs font-bold text-gray-900">
                        {item.rating}
                      </span>
                      <span className="text-[10px] text-gray-500 font-medium">
                        ({item.reviews} Reviews)
                      </span>
                    </div>

                    <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-gold text-white px-3 lg:px-4 py-2 text-xs font-bold uppercase tracking-widest">
                      From ₹{item.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gold mb-3">
                    <MapPin size={14} />
                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold">
                      {item.address}
                    </span>
                  </div>

                  <h3 className="text-2xl xl:text-3xl font-serif mb-3 text-gray-900 group-hover:text-gold transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm lg:text-base font-inter leading-relaxed mb-6 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                      Available Now
                    </span>

                    <span className="text-gold font-bold text-sm uppercase tracking-widest group-hover:underline">
                      Book Room
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* SINGLE PROPERTY */}
        {singleProperty && (
          <div className="flex flex-col justify-center items-start w-full min-h-[70vh] lg:min-h-[85vh] mt-8 lg:mt-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif text-gray-900 mb-8 md:mb-12 leading-tight"
            >
              Our Premium Property
            </motion.h2>

            {properties.slice(0, 1).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group w-full"
              >
                <div className="relative w-full max-w-[1500px] aspect-[16/9] md:aspect-[16/7] xl:aspect-[16/6] 2xl:aspect-[16/5.5] overflow-hidden mb-6 rounded-sm shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 lg:p-8">
                    <button className="bg-white text-black py-3 md:py-4 px-6 md:px-8 uppercase tracking-widest font-bold text-xs hover:bg-gold hover:text-white transition-colors rounded-sm">
                      View Details
                    </button>
                  </div>

                  <div className="absolute top-4 lg:top-6 left-4 lg:left-6 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 lg:px-4 py-2 rounded-full shadow-sm">
                    <Star
                      size={16}
                      className="fill-gold text-gold"
                    />
                    <span className="text-sm font-bold text-gray-900">
                      {item.rating}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      ({item.reviews} Reviews)
                    </span>
                  </div>

                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-gold text-white px-4 lg:px-5 py-2 lg:py-3 text-xs lg:text-sm font-bold uppercase tracking-widest">
                    From ₹{item.price}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gold mb-3">
                  <MapPin size={18} />
                  <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-bold">
                    {item.address}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-serif mb-4 text-gray-900 group-hover:text-gold transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-base md:text-lg font-inter leading-relaxed mb-8 max-w-4xl">
                  {item.desc}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-gray-100">
                  <span className="text-sm uppercase tracking-widest text-gray-400 font-bold">
                    Available Now
                  </span>

                  <span className="text-gold font-bold text-sm md:text-base uppercase tracking-widest group-hover:underline">
                    Book Room
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;

