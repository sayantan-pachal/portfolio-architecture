/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import SurvivalToolkit from "./components/SurvivalToolkit";
import MessageBox from "./components/MessageBox";
import Timeline from "./components/Timeline";
import StatusMeter from "./components/StatusMeter";
import MemeGenerator from "./components/MemeGenerator";
import Footer from "./components/Footer";

import { memeTexts } from "./data/messages";

export default function App() {
  // 🌗 Theme
  const [theme, setTheme] = useState("dark");

  // 😶 Mood system
  const [mood, setMood] = useState("numb");
  const [activeMessage, setActiveMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  // 📊 Status
  const [selfRespect, setSelfRespect] = useState(50);
  const [attachment, setAttachment] = useState(75);

  // 😂 Meme
  const [currentMeme, setCurrentMeme] = useState(memeTexts[0]);

  // 🧠 Helpers
  const getHeroMessage = () => {
    if (mood === "sad") return "It’s okay to feel sad 💔";
    if (mood === "angry") return "Anger detected 🔥";
    if (mood === "happy") return "Self-love era 💖";
    return "Emotionally unavailable";
  };

  const getSubMessage = () => {
    if (mood === "sad") return "Valentine’s Day hits different.";
    if (mood === "angry") return "Channel it into growth.";
    if (mood === "happy") return "You survived. Proud of you.";
    return "No expectations, no disappointment.";
  };

  const handleButtonClick = (msg, type = "info") => {
    setActiveMessage(msg);
    setMessageType(type);
  };

  const generateNewMeme = () => {
    setCurrentMeme(
      memeTexts[Math.floor(Math.random() * memeTexts.length)]
    );
  };

  return (
    <motion.div
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🌗 Theme Toggle */}
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {/* 💔 Hero Section */}
      <Hero
        theme={theme}
        mood={mood}
        setMood={setMood}
        getHeroMessage={getHeroMessage}
        getSubMessage={getSubMessage}
      />

      {/* 🛠 Survival Toolkit */}
      <SurvivalToolkit
        theme={theme}
        handleButtonClick={handleButtonClick}
      />

      {/* 💬 Message Box */}
      <AnimatePresence mode="wait">
        {activeMessage && (
          <MessageBox
            activeMessage={activeMessage}
            messageType={messageType}
            theme={theme}
          />
        )}
      </AnimatePresence>

      {/* 🕰 Timeline */}
      <Timeline />

      {/* 📊 Status Meter */}
      <StatusMeter
        singleLevel={99}
        selfRespect={selfRespect}
        setSelfRespect={setSelfRespect}
        attachment={attachment}
        setAttachment={setAttachment}
      />

      {/* 😂 Meme Generator */}
      <div className="mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMeme}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
            transition={{ duration: 0.4 }}
          >
            <MemeGenerator
              meme={currentMeme}
              onNewMeme={generateNewMeme}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔻 Footer */}
      <Footer theme={theme} />
    </motion.div>
  );
}