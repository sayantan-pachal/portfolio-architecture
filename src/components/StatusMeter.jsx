import { TrendingUp, TrendingDown } from "lucide-react";
import ProgressBar from "./ProgressBar";

export default function StatusMeter({
  singleLevel,
  selfRespect,
  setSelfRespect,
  attachment,
  setAttachment,
}) {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto border-2 border-gray-700 shadow-2xl">
      <ProgressBar value={singleLevel} label="Single Level" gradient="from-red-500 to-pink-500" />
      <ProgressBar value={selfRespect} label="Self-Respect" gradient="from-emerald-500 to-teal-500" />
      <ProgressBar value={attachment} label="Attachment Level" gradient="from-orange-500 to-red-500" />

      <div className="flex gap-3 mt-8">
        <button
          onClick={() => setSelfRespect(Math.min(100, selfRespect + 10))}
          className="flex-1 px-6 py-3 bg-emerald-600 rounded-xl font-bold flex justify-center gap-2"
        >
          <TrendingUp /> Increase Self-Respect
        </button>

        <button
          onClick={() => setAttachment(Math.max(0, attachment - 10))}
          className="flex-1 px-6 py-3 bg-blue-600 rounded-xl font-bold flex justify-center gap-2"
        >
          <TrendingDown /> Reduce Attachment
        </button>
      </div>
    </div>
  );
}

