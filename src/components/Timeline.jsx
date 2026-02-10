export default function Timeline({ data }) {
  return (
    <section className="mt-10 w-full max-w-2xl bg-gray-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6">
        📅 Valentine Week — Single Edition
      </h2>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between bg-gray-800 p-4 rounded-xl"
          >
            <span>{item.day}</span>
            <span className="text-gray-400 text-sm text-right max-w-xs">
              {item.reality}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
