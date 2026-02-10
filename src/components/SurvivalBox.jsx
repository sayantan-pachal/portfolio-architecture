export default function SurvivalBox({ onAction, output }) {
  return (
    <section className="mt-8 w-full max-w-lg bg-gray-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">🧠 Survival Buttons</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button onClick={() => onAction("song")} className="py-3 rounded-xl bg-blue-600 hover:bg-blue-700">
          🎧 Play Sad Song
        </button>
        <button onClick={() => onAction("ex")} className="py-3 rounded-xl bg-red-700 hover:bg-red-800">
          💬 Insult My Ex
        </button>
        <button onClick={() => onAction("motivate")} className="py-3 rounded-xl bg-green-700 hover:bg-green-800">
          💪 Motivate Me
        </button>
        <button onClick={() => onAction("reality")} className="py-3 rounded-xl bg-purple-700 hover:bg-purple-800">
          💀 Reality Check
        </button>
      </div>

      {output && <p className="mt-6 text-lg text-yellow-400">{output}</p>}
    </section>
  );
}
