import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Search, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingBar = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(new Date());
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(Date.now() + 86400000));
  const [guests] = useState(2);

  return (
    <div className="container mx-auto px-6 relative z-30 -mt-24">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white rounded-sm p-3 flex flex-col lg:flex-row items-stretch lg:items-center gap-3 shadow-2xl border border-black/5"
      >
        <div className="flex-1 flex flex-col md:flex-row gap-2">
          {/* Check In */}
          <div className="flex-1 bg-gray-50 p-4 flex items-center space-x-4 border border-transparent hover:border-gold/30 transition-all cursor-pointer group">
            <Calendar className="text-gold w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Check In</span>
              <DatePicker
                selected={checkIn}
                onChange={(date: Date | null) => setCheckIn(date)}
                className="bg-transparent text-sm font-bold focus:outline-none w-full cursor-pointer text-gray-800"
                dateFormat="dd MMM yyyy"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex-1 bg-gray-50 p-4 flex items-center space-x-4 border border-transparent hover:border-gold/30 transition-all cursor-pointer group">
            <Calendar className="text-gold w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Check Out</span>
              <DatePicker
                selected={checkOut}
                onChange={(date: Date | null) => setCheckOut(date)}
                className="bg-transparent text-sm font-bold focus:outline-none w-full cursor-pointer text-gray-800"
                dateFormat="dd MMM yyyy"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex-1 bg-gray-50 p-4 flex items-center justify-between border border-transparent hover:border-gold/30 transition-all cursor-pointer group">
            <div className="flex items-center space-x-4">
              <Users className="text-gold w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Guests</span>
                <span className="text-sm font-bold text-gray-800">{guests} Adults</span>
              </div>
            </div>
            <ChevronDown size={16} className="text-gray-300 group-hover:text-gold transition-colors" />
          </div>
        </div>

        {/* Promo Code - Desktop Only */}
        <div className="hidden xl:flex w-48 bg-gray-50 p-4 flex-col border border-transparent hover:border-gold/30 transition-all group">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Promo Code</span>
          <input 
            type="text" 
            placeholder="Enter Code"
            className="bg-transparent text-sm font-bold focus:outline-none w-full text-gray-800"
          />
        </div>

        {/* Search Button */}
        <button className="bg-gold hover:bg-gold/90 text-white px-10 py-4 lg:py-5 lg:h-full flex items-center justify-center space-x-3 transition-colors rounded-sm">
          <Search size={20} />
          <span className="uppercase tracking-widest font-bold text-sm">Check Availability</span>
        </button>
      </motion.div>
    </div>
  );
};

export default BookingBar;
