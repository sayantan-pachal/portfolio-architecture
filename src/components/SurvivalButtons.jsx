import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, MessageSquare, Zap, AlertCircle } from 'lucide-react';
import { sadSongs, exInsults, motivationalQuotes, realityChecks, selfLoveMessages } from '../data/messages';

const SurvivalButtons = ({ theme }) => {
  const [activeMessage, setActiveMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

  const handleButtonClick = (type) => {
    setMessageType(type);
    
    switch(type) {
      case 'song':
        setActiveMessage(getRandomItem(sadSongs));
        break;
      case 'insult':
        setActiveMessage(getRandomItem(exInsults));
        break;
      case 'motivate':
        if (theme === 'selflove') {
          setActiveMessage(getRandomItem(selfLoveMessages));
        } else {
          setActiveMessage(getRandomItem(motivationalQuotes));
        }
        break;
      case 'reality':
        setActiveMessage(getRandomItem(realityChecks));
        break;
    }
  };

  const buttons = [
    { 
      id: 'song', 
      label: '🎧 Play Sad Song', 
      icon: Music,
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'insult', 
      label: '💬 Insult My Ex', 
      icon: MessageSquare,
      color: 'from-red-600 to-orange-600',
      hoverColor: 'from-red-500 to-orange-500'
    },
    { 
      id: 'motivate', 
      label: theme === 'selflove' ? '💚 Remind Me' : '💪 Motivate Me', 
      icon: Zap,
      color: theme === 'selflove' ? 'from-emerald-600 to-teal-600' : 'from-blue-600 to-cyan-600',
      hoverColor: theme === 'selflove' ? 'from-emerald-500 to-teal-500' : 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'reality', 
      label: '💀 Reality Check', 
      icon: AlertCircle,
      color: 'from-gray-600 to-slate-600',
      hoverColor: 'from-gray-500 to-slate-500'
    },
  ];

  return (
    <div className="mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {theme === 'selflove' ? '💚 Self-Care Toolkit' : '😂 Survival Toolkit'}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {buttons.map((button, index) => (
          <motion.button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            className={`p-6 rounded-2xl bg-gradient-to-br ${button.color} hover:${button.hoverColor} transition-all duration-300 flex flex-col items-center gap-3 shadow-lg hover:shadow-2xl`}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button.icon size={32} />
            <span className="font-bold text-lg">{button.label}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeMessage && (
          <motion.div
            key={messageType + JSON.stringify(activeMessage)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-8 text-center shadow-2xl border-2 border-gray-700"
          >
            {messageType === 'song' ? (
              <div>
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  🎵
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{activeMessage.title}</h3>
                <p className="text-xl text-gray-300 mb-2">by {activeMessage.artist}</p>
                <p className="text-gray-400 italic">{activeMessage.vibe}</p>
                <p className="text-sm text-gray-500 mt-4">
                  "This song understands you better than people."
                </p>
              </div>
            ) : (
              <div>
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {messageType === 'insult' && '🔥'}
                  {messageType === 'motivate' && (theme === 'selflove' ? '💚' : '💪')}
                  {messageType === 'reality' && '💀'}
                </motion.div>
                <p className="text-2xl font-bold">{activeMessage}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurvivalButtons;