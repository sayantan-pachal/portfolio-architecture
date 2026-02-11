import { valentineTimeline } from "../data/timeline";

export default function Timeline() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        📅 Valentine Week Timeline (The Reality)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {valentineTimeline.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-6 border-2 border-gray-700 hover:scale-105 transition-all"
          >
            <h3 className="text-xl font-bold text-red-400 mb-3">
              {item.day}
            </h3>
            <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500 mb-3" />
            <p className="text-gray-300">{item.reality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

