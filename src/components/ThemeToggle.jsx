export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => setTheme(theme === "breakup" ? "selflove" : "breakup")}
        className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
          theme === "selflove"
            ? "bg-emerald-600 hover:bg-emerald-500"
            : "bg-red-600 hover:bg-red-500"
        }`}
      >
        {theme === "breakup" ? "💔 Breakup Mode" : "💚 Self-Love Mode"}
      </button>
    </div>
  );
}
