import { motion } from 'framer-motion';
import { valentineTimeline } from '../data/messages';

const Timeline = () => {
  return (
    <div className="mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        📅 Valentine Week Timeline (The Reality)
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {valentineTimeline.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 border-2 border-gray-700 hover:border-red-500 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="text-xl font-bold mb-3 text-red-400">{item.day}</h3>
            <div className="h-1 w-full bg-gradient-to-r from-red-500 to-pink-500 rounded mb-3"></div>
            <p className="text-gray-300">{item.reality}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>Pro tip: February 14th is just another Tuesday 🤷</p>
      </motion.div>
    </div>
  );
};

export default Timeline;