import { Music, MessageSquare, Zap, AlertCircle } from "lucide-react";

export default function SurvivalToolkit({
  theme,
  handleButtonClick,
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {theme === "selflove" ? "💚 Self-Care Toolkit" : "😂 Survival Toolkit"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            id: "song",
            label: "🎧 Play Sad Song",
            icon: Music,
            color: "from-purple-600 to-pink-600",
          },
          {
            id: "insult",
            label: "💬 Insult My Ex",
            icon: MessageSquare,
            color: "from-red-600 to-orange-600",
          },
          {
            id: "motivate",
            label: theme === "selflove" ? "💚 Remind Me" : "💪 Motivate Me",
            icon: Zap,
            color:
              theme === "selflove"
                ? "from-emerald-600 to-teal-600"
                : "from-blue-600 to-cyan-600",
          },
          {
            id: "reality",
            label: "💀 Reality Check",
            icon: AlertCircle,
            color: "from-gray-600 to-slate-600",
          },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleButtonClick(btn.id)}
            className={`p-6 rounded-2xl bg-gradient-to-br ${btn.color} flex flex-col items-center gap-3 hover:scale-105 transition-all`}
          >
            <btn.icon size={32} />
            <span className="font-bold text-lg">{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
