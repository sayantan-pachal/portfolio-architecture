export default function MessageBox({ activeMessage, messageType, theme }) {
  if (!activeMessage) return null;

  return (
    <div className="bg-gray-800 rounded-2xl p-8 text-center border-2 border-gray-700 mt-8">
      {messageType === "song" ? (
        <>
          <div className="text-6xl mb-4">🎵</div>
          <h3 className="text-2xl font-bold">{activeMessage.title}</h3>
          <p className="text-gray-300">by {activeMessage.artist}</p>
          <p className="italic text-gray-400">{activeMessage.vibe}</p>
        </>
      ) : (
        <>
          <div className="text-6xl mb-4">
            {messageType === "insult" && "🔥"}
            {messageType === "motivate" &&
              (theme === "selflove" ? "💚" : "💪")}
            {messageType === "reality" && "💀"}
          </div>
          <p className="text-2xl font-bold">{activeMessage}</p>
        </>
      )}
    </div>
  );
}
