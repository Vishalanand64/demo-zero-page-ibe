import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.pexels.com/photos/2291619/pexels-photo-2291619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Luxury Hotel"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-yellow-500 uppercase tracking-[0.5em] text-sm mb-6 block">
            Welcome to the Pinnacle of Luxury
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight text-white">
            Elevate Your <br /> 
            <span className="italic">Experience</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 font-inter mb-10 leading-relaxed">
            Discover a sanctuary where contemporary design meets timeless elegance. Grand Continent Hotels offers an unparalleled stay in the heart of the world's most vibrant cities.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-bold min-w-[200px]"
            >
              Explore Rooms
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-bold min-w-[200px] hover:bg-white hover:text-black transition-all"
            >
              Watch Video
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 opacity-50">Scroll to Explore</span>
        <ChevronDown size={20} className="text-gold" />
      </motion.div>

      {/* Decor Elements */}
      <div className="absolute left-10 bottom-1/4 hidden xl:block">
        <div className="h-40 w-[1px] bg-white/20 relative">
          <motion.div 
            style={{ height: useTransform(scrollY, [0, 1000], ["0%", "100%"]) }}
            className="absolute top-0 left-0 w-full bg-gold"
          />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/50 origin-left -rotate-90 mt-20 block">01 / Introduction</span>
      </div>
    </section>
  );
};

export default Hero;
