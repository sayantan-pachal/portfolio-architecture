import { Heart, HeartCrack, Frown } from "lucide-react";

export default function Hero({
  theme,
  mood,
  setMood,
  getHeroMessage,
  getSubMessage,
}) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-7xl font-black mb-4">
        {getHeroMessage()}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        {getSubMessage()}
      </p>

      {theme === "breakup" && (
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: "single", label: "❤️ I'm Single", icon: Heart },
            { id: "happy", label: "💔 Single & Happy", icon: HeartCrack },
            { id: "crying", label: "😭 Single & Crying", icon: Frown },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setMood(btn.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg flex items-center gap-2 transition-all ${
                mood === btn.id
                  ? "bg-white text-black scale-110"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <btn.icon size={20} />
              {btn.label}
            </button>
          ))}
        </div>
      )}

      <div className="mt-8 text-6xl animate-pulse">
        {theme === "selflove" ? "💚" : "💔"}
      </div>
    </div>
  );
}
