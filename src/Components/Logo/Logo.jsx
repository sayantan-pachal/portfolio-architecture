import React, { useState, useEffect } from "react";

export default function Logo() {
  // Track if screen is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Logo container
    <div className="flex gap-[12px] max-[900px]:gap-[6px] items-center h-12">
      {/* Initials badge */}
      <div className="m-0 text-[1rem] max-[900px]:text-[0.8rem] w-[42px] max-[900px]:w-[32px] h-[42px] max-[900px]:h-[32px] rounded-[12px] max-[900px]:rounded-[10px] bg-gradient-to-tr from-[#6ee7b7] to-[#60a5fa] flex items-center justify-center font-bold text-[#062027]">
        SP
      </div>

      {/* Name and tagline */}
      <div className="items-start justify-center flex flex-col">
        <h1 className="m-0 font-medium text-black dark:text-white text-[1rem] max-[900px]:text-[0.8rem]">
          Sayantan Pachal
        </h1>

        {/* Short text on mobile, detailed on desktop */}
        <p className="mb-0.5 text-[11px] max-[900px]:text-[8px] text-gray-600 dark:text-gray-300">
          {isMobile
            ? "CSE student • Full-stack & AI"
            : "Aspiring CSE student • Full-stack & AI enthusiast"}
        </p>
      </div>
    </div>
  );
}
