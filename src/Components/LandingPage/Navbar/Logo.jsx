import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className = "", showText = false }) => {
  return (
    <Link to="/" className={`block ${className}`} aria-label="Pristol Home">
      <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/logo.png"
            alt="Pristol"
            className="h-12 w-auto md:h-16 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 drop-shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {showText && (
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Pristol
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
