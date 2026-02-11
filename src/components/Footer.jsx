export default function Footer({ theme }) {
  return (
    <footer className="text-center mt-16 pb-8 text-gray-400">
      <p className="text-sm">
        {theme === "selflove"
          ? "💚 Being single is peaceful, not lonely."
          : "💔 Made with pain and humor by singles, for singles."}
      </p>
    </footer>
  );
}
