// import { motion } from 'framer-motion';
import { Heart, HeartCrack, Frown } from 'lucide-react';

const Hero = ({ mood, setMood, theme }) => {
  const getHeroMessage = () => {
    if (theme === 'selflove') {
      return "You're Not Single, You're Just Selective 💚";
    }
    switch(mood) {
      case 'happy':
        return "Congratulations! You're Single & Unbothered 💅";
      case 'crying':
        return "It's Okay to Not Be Okay 😭";
      default:
        return "Congratulations! You Survived Valentine's Day Alone 💀";
    }
  };

  const getSubMessage = () => {
    if (theme === 'selflove') {
      return "Self-love is the best love";
    }
    switch(mood) {
      case 'happy':
        return "No drama, no sharing food, no problems";
      case 'crying':
        return "Ice cream fixes what people can't";
      default:
        return "Welcome to the 404 club";
    }
  };

  const buttons = [
    { id: 'single', label: "❤️ I'm Single", icon: Heart },
    { id: 'happy', label: "💔 Single & Happy", icon: HeartCrack },
    { id: 'crying', label: "😭 Single & Crying", icon: Frown },
  ];

  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-black mb-4"
        key={getHeroMessage()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {getHeroMessage()}
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {getSubMessage()}
      </motion.p>

      {theme === 'breakup' && (
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {buttons.map((button, index) => (
            <motion.button
              key={button.id}
              onClick={() => setMood(button.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                mood === button.id 
                  ? 'bg-white text-black scale-110' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <button.icon size={20} />
              {button.label}
            </motion.button>
          ))}
        </motion.div>
      )}

      <motion.div
        className="mt-8 text-6xl"
        animate={{ 
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1, 1.1, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3
        }}
      >
        {theme === 'selflove' ? '💚' : '💔'}
      </motion.div>
    </motion.div>
  );
};

export default Hero;