export default function ProgressBar({ value, label, gradient }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-bold text-lg">{label}</span>
        <span className="text-2xl font-black">{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 flex items-center justify-end pr-2`}
          style={{ width: `${value}%` }}
        >
          {value > 10 && (
            <span className="text-xs font-bold text-white">{value}%</span>
          )}
        </div>
      </div>
    </div>
  );
}
