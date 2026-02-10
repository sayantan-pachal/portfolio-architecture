import { useState, useEffect } from "react";

// components
import HeroSection from "./components/HeroSection";
import SurvivalBox from "./components/SurvivalBox";
import Timeline from "./components/Timeline";
import StatusMeter from "./components/StatusMeter";

// data
import { moods } from "./data/moods";
import {
  sadSongs,
  exInsults,
  motivations,
  realityChecks,
} from "./data/messages";
import { timeline } from "./data/timeline";

function App() {
  // core states
  const [mood, setMood] = useState("neutral");
  const [output, setOutput] = useState("");

  const [singleLevel, setSingleLevel] = useState(99);
  const [selfRespect, setSelfRespect] = useState(50);
  const [selfLove, setSelfLove] = useState(false);

  /* -------------------- helpers -------------------- */
  const getRandom = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const handleSurvivalAction = (type) => {
    if (type === "song") setOutput(getRandom(sadSongs));
    if (type === "ex") setOutput(getRandom(exInsults));
    if (type === "motivate") setOutput(getRandom(motivations));
    if (type === "reality") setOutput(getRandom(realityChecks));
  };

  const increaseSelfRespect = () => {
    setSelfRespect((prev) => Math.min(prev + 10, 100));
    setSingleLevel((prev) => Math.min(prev + 5, 100));
  };

  const reduceAttachment = () => {
    setSelfRespect((prev) => Math.min(prev + 5, 100));
    setSingleLevel((prev) => Math.max(prev - 10, 0));
  };

  /* -------------------- localStorage -------------------- */
  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    const savedSingle = localStorage.getItem("singleLevel");
    const savedRespect = localStorage.getItem("selfRespect");
    const savedSelfLove = localStorage.getItem("selfLove");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedMood) setMood(savedMood);
    if (savedSingle) setSingleLevel(Number(savedSingle));
    if (savedRespect) setSelfRespect(Number(savedRespect));
    if (savedSelfLove) setSelfLove(savedSelfLove === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("mood", mood);
    localStorage.setItem("singleLevel", singleLevel);
    localStorage.setItem("selfRespect", selfRespect);
    localStorage.setItem("selfLove", selfLove);
  }, [mood, singleLevel, selfRespect, selfLove]);

  /* -------------------- UI -------------------- */
  return (
    <div
      className={`min-h-screen px-4 transition-colors duration-500 ${
        selfLove ? "bg-green-950 text-green-100" : "bg-black text-white"
      }`}
    >
      {/* self-love toggle */}
      <button
        onClick={() => setSelfLove(!selfLove)}
        className="fixed top-4 right-4 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-sm"
      >
        {selfLove ? "💔 Breakup Mode" : "💚 Self-Love Mode"}
      </button>

      {/* hero */}
      <HeroSection
        selfLove={selfLove}
        moodData={moods[mood]}
        onMoodChange={setMood}
      />

      {/* survival box */}
      <div className="flex justify-center">
        <SurvivalBox
          onAction={handleSurvivalAction}
          output={output}
        />
      </div>

      {/* timeline */}
      <div className="flex justify-center">
        <Timeline data={timeline} />
      </div>

      {/* status meter */}
      <div className="flex justify-center pb-16">
        <StatusMeter
          singleLevel={singleLevel}
          selfRespect={selfRespect}
          onIncrease={increaseSelfRespect}
          onReduce={reduceAttachment}
        />
      </div>
    </div>
  );
}

export default App;