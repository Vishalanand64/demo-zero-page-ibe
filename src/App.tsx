import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <BookingBar />
        
        {/* Intro Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-40 h-40 border-l-2 border-t-2 border-gold -z-10" />
                <img 
                  src="https://images.pexels.com/photos/3926482/pexels-photo-3926482.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" 
                  alt="Lobby" 
                  className="w-full h-[600px] object-cover shadow-2xl rounded-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gold uppercase tracking-[0.3em] text-sm mb-6 block font-bold">Our Heritage</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-gray-900">Redefining Modern Hospitality</h2>
                <p className="text-gray-500 text-lg font-inter leading-relaxed mb-8">
                  Grand Continent Hotels Pvt Ltd is more than just a place to stay. It is an immersive journey into the world of luxury and adventure. Our resorts are your perfect retreat, blending relaxation and excitement in some of the most sought-after destinations.
                </p>
                <p className="text-gray-500 text-lg font-inter leading-relaxed mb-10">
                  From the moment you step into our lobby, you are enveloped in an atmosphere of refined elegance and warm, personalized service that defines our legacy.
                </p>
                <button className="text-sm uppercase tracking-widest font-bold border-b-2 border-gold pb-2 hover:text-gold transition-colors text-gray-900">
                  Our Story
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <Rooms />
        <Amenities />

        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/2291619/pexels-photo-2291619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920" 
              className="w-full h-full object-cover opacity-40"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-5xl md:text-7xl font-serif mb-10 text-white">Ready for an Unforgettable Stay?</h2>
              <p className="max-w-2xl text-xl text-white/70 mb-12 font-inter leading-relaxed">
                Join our privileged guests and enjoy exclusive benefits, from early check-ins to bespoke concierge services at any of our premium locations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-white px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold shadow-2xl hover:bg-gold/90 transition-all"
              >
                Book Your Experience Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
