import React, { useState } from "react";
import { Heart } from "lucide-react";

const Copyright = ({ currentYear }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 text-xs text-green-100/60">
      <div className="flex items-center gap-2">
        <span>©</span>
        <a
          href="#"
          className="relative group"
          onMouseEnter={() => setHoveredLink("pristol")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span
            className={`font-semibold transition-all duration-300 ${
              hoveredLink === "pristol" ? "text-green-400" : ""
            }`}
          >
            PRISTOL
          </span>
          <span
            className={`absolute -bottom-1 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300`}
          ></span>
        </a>
        <span>{currentYear}</span>
        <span className="mx-2">|</span>
        <span>All Rights Reserved</span>
      </div>

      <div className="flex items-center gap-2">
        <span>Made with</span>
        <Heart
          className={`w-3 h-3 transition-all duration-300 ${
            hoveredLink === "ahrar"
              ? "text-red-500 scale-125"
              : "text-green-400"
          }`}
        />
        <span>by</span>
        <a
          href="https://ahrar-shah.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          onMouseEnter={() => setHoveredLink("ahrar")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span
            className={`font-semibold transition-all duration-300 ${
              hoveredLink === "ahrar" ? "text-green-400" : ""
            }`}
          >
            Ahrar Shah
          </span>
          <span
            className={`absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300`}
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Copyright;
