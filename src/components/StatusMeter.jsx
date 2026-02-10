export default function StatusMeter({
  singleLevel,
  selfRespect,
  onIncrease,
  onReduce,
}) {
  return (
    <section className="mt-10 w-full max-w-xl bg-gray-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">📊 Single Status Meter</h2>

      <p  className="mb-2 text-gray-400">Single Level: {singleLevel}%</p>
      <div  className="w-full bg-gray-800 rounded-full h-4 mb-4">
        <div style={{ width: `${singleLevel}%` }} className="bg-red-500 h-4 rounded-full transition-all duration-300" />
      </div>

      <p className="mb-2 text-gray-400">Self-Respect: {selfRespect}%</p>
      <div className="w-full bg-gray-800 rounded-full h-4 mb-6">
        <div style={{ width: `${selfRespect}%` }} className="bg-green-500 h-4 rounded-full transition-all duration-300" />
      </div>

      <div className="flex gap-4 mt-4">
        <button onClick={onIncrease} className="flex-1 py-3 rounded-xl bg-green-700 hover:bg-green-800">
          💪 Increase Self-Respect
        </button>
        <button onClick={onReduce} className="flex-1 py-3 rounded-xl bg-purple-700 hover:bg-purple-800">
          💔 Reduce Attachment
        </button>
      </div>
    </section>
  );
}
