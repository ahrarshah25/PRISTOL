import React, { useState } from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

const Social = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:bg-pink-600",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 2,
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:bg-blue-600",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      id: 3,
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:bg-sky-500",
      gradient: "from-sky-400 to-sky-600",
    },
    {
      id: 4,
      name: "YouTube",
      icon: Youtube,
      href: "#",
      color: "hover:bg-red-600",
      gradient: "from-red-500 to-red-700",
    },
    {
      id: 5,
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:bg-blue-700",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
        <p className="text-xs text-green-100/60">
          Stay connected for updates and offers
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          const isHovered = hoveredIcon === social.id;

          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              onMouseEnter={() => setHoveredIcon(social.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <span
                className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}
              >
                {social.name}
              </span>

              <div
                className={`relative w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "scale-110 border-transparent" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <Icon
                  className={`w-5 h-5 relative z-10 transition-all duration-300 ${
                    isHovered ? "text-white scale-110" : "text-green-400"
                  }`}
                />
              </div>

              <span
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
              ></span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
