import { useState } from "react";

function App() {
  const [mood, setMood] = useState("neutral");
  const [output, setOutput] = useState("");

  const [singleLevel, setSingleLevel] = useState(99);
  const [selfRespect, setSelfRespect] = useState(50);

  const [selfLove, setSelfLove] = useState(false);

  const moods = {
    neutral: {
      title: "💔 404: Valentine Not Found",
      message:
        "Congratulations! You survived Valentine’s Week single. This website is your official survival kit.",
    },
    sad: {
      title: "😭 Single & Crying",
      message: "Even legends were once left on seen.",
    },
    happy: {
      title: "😎 Single & Happy",
      message: "Peace, freedom, money mindset.",
    },
    confused: {
      title: "🤡 Single & Confused",
      message: "Emotionally buffering… please wait.",
    },
  };

  const sadSongs = [
    "Playing imaginary sad song 🎧",
    "This song understands you more than people.",
    "Headphones on. World off.",
  ];

  const exInsults = [
    "Your ex wasn’t special, just emotionally unavailable.",
    "Blocked you but still watches your story.",
    "They lost you. That’s it.",
  ];

  const motivations = [
    "Focus on your career. Love can wait.",
    "Gym + money = silent revenge.",
    "You’re building something bigger.",
  ];

  const realityChecks = [
    "It’s okay to be single. It’s not okay to beg.",
    "Attachment hurts more than loneliness.",
    "Peace is better than mixed signals.",
  ];

  const getRandom = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const timeline = [
  { day: "Rose Day 🌹", reality: "You smell flowers in someone else’s story." },
  { day: "Propose Day 💍", reality: "You propose to your career goals." },
  { day: "Chocolate Day 🍫", reality: "You buy chocolate for yourself." },
  { day: "Teddy Day 🧸", reality: "Your pillow becomes your teddy." },
  { day: "Promise Day 🤝", reality: "You promise to move on." },
  { day: "Hug Day 🤗", reality: "You hug your phone." },
  { day: "Kiss Day 😘", reality: "You kiss your self-respect." },
  { day: "Valentine’s Day 💔", reality: "Netflix, snacks, and sleep." },
];

const increaseSelfRespect = () => {
  setSelfRespect((prev) => Math.min(prev + 10, 100));
  setSingleLevel((prev) => Math.min(prev + 5, 100));
};

const reduceAttachment = () => {
  setSelfRespect((prev) => Math.min(prev + 5, 100));
  setSingleLevel((prev) => Math.max(prev - 10, 0));
};

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center px-4 gap-6 transition-colors duration-500 ${
    selfLove ? "bg-green-950 text-green-100" : "bg-black text-white"
  }`}>
    <button
  onClick={() => setSelfLove(!selfLove)}
  className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-sm"
>
  {selfLove ? "💔 Breakup Mode" : "💚 Self-Love Mode"}
</button>
      <div className="flex flex-col items-center justify-center text-center h-screen px-4 gap-6">
      <h1 className="text-4xl md:text-5xl font-bold">
  {selfLove
    ? "💚 You Are Enough"
    : moods[mood].title}
</h1>

      <p className="text-gray-400 max-w-md">
  {selfLove
    ? "Being single is peaceful. Growth looks good on you."
    : moods[mood].message}
</p>

      {/* Mood Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setMood("sad")}
          className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700"
        >
          I’m Single 😭
        </button>

        <button
          onClick={() => setMood("happy")}
          className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700"
        >
          Single & Happy 😎
        </button>

        <button
          onClick={() => setMood("confused")}
          className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700"
        >
          Single & Confused 🤡
        </button>
      </div>
      </div>

      {/* Survival Section */}
      <div className="mt-8 w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          🧠 Survival Buttons
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => setOutput(getRandom(sadSongs))}
            className="py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            🎧 Play Sad Song
          </button>

          <button
            onClick={() => setOutput(getRandom(exInsults))}
            className="py-3 rounded-xl bg-red-700 hover:bg-red-800"
          >
            💬 Insult My Ex
          </button>

          <button
            onClick={() => setOutput(getRandom(motivations))}
            className="py-3 rounded-xl bg-green-700 hover:bg-green-800"
          >
            💪 Motivate Me
          </button>

          <button
            onClick={() => setOutput(getRandom(realityChecks))}
            className="py-3 rounded-xl bg-purple-700 hover:bg-purple-800"
          >
            💀 Reality Check
          </button>
        </div>

        {output && (
          <p className="mt-6 text-lg text-yellow-400">
            {output}
          </p>
        )}
      </div>
      {/* Valentine Week Timeline */}
<div className="mt-10 w-full max-w-2xl bg-gray-900 p-6 rounded-2xl">
  <h2 className="text-2xl font-semibold mb-6">
    📅 Valentine Week — Single Edition
  </h2>

  <div className="space-y-4">
    {timeline.map((item, index) => (
      <div
        key={index}
        className="flex justify-between items-center bg-gray-800 p-4 rounded-xl"
      >
        <span className="font-medium">{item.day}</span>
        <span className="text-gray-400 text-sm text-right max-w-xs">
          {item.reality}
        </span>
      </div>
    ))}
  </div>
</div>
{/* Single Status Meter */}
<div className="mt-10 w-full max-w-xl bg-gray-900 p-6 rounded-2xl">
  <h2 className="text-2xl font-semibold mb-4">
    📊 Single Status Meter
  </h2>

  <p className="mb-2 text-gray-400">
    Single Level: <span className="text-red-400">{singleLevel}%</span>
  </p>

  <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
    <div
      className="bg-red-500 h-4 rounded-full transition-all duration-300"
      style={{ width: `${singleLevel}%` }}
    />
  </div>

  <p className="mb-2 text-gray-400">
    Self-Respect: <span className="text-green-400">{selfRespect}%</span>
  </p>

  <div className="w-full bg-gray-800 rounded-full h-4 mb-6">
    <div
      className="bg-green-500 h-4 rounded-full transition-all duration-300"
      style={{ width: `${selfRespect}%` }}
    />
  </div>

  <div className="flex flex-col sm:flex-row gap-4">
    <button
      onClick={increaseSelfRespect}
      className="flex-1 py-3 rounded-xl bg-green-700 hover:bg-green-800"
    >
      💪 Increase Self-Respect
    </button>

    <button
      onClick={reduceAttachment}
      className="flex-1 py-3 rounded-xl bg-purple-700 hover:bg-purple-800"
    >
      💔 Reduce Attachment
    </button>
  </div>
</div>
    </div>
  );
}

export default App;