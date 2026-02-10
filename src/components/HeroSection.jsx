export default function HeroSection({
  selfLove,
  moodData,
  onMoodChange,
}) {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen gap-6">
      <h1 className="text-4xl md:text-5xl font-bold">
        {selfLove ? "💚 You Are Enough" : moodData.title}
      </h1>

      <p className="text-gray-400 max-w-md">
        {selfLove
          ? "Being single is peaceful. Growth looks good on you."
          : moodData.message}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onMoodChange("sad")}
          className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700"
        >
          I’m Single 😭
        </button>

        <button
          onClick={() => onMoodChange("happy")}
          className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700"
        >
          Single & Happy 😎
        </button>

        <button
          onClick={() => onMoodChange("confused")}
          className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700"
        >
          Single & Confused 🤡
        </button>
      </div>
    </section>
  );
}
