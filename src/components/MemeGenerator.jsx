import { RefreshCw, Download } from "lucide-react";

export default function MemeGenerator({ meme, onNewMeme }) {
  return (
    <div className="bg-gradient-to-br from-red-900 to-black rounded-2xl p-12 max-w-2xl mx-auto border-4 border-red-700">
      <p className="text-3xl font-bold text-center mb-6">{meme}</p>
      <div className="text-center text-7xl mb-6">💔</div>

      <div className="flex gap-4">
        <button
          onClick={onNewMeme}
          className="flex-1 bg-white text-black py-4 rounded-xl font-bold flex justify-center gap-2"
        >
          <RefreshCw /> New Meme
        </button>
        <button className="flex-1 bg-purple-600 py-4 rounded-xl font-bold flex justify-center gap-2">
          <Download /> Download
        </button>
      </div>
    </div>
  );
}
