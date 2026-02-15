import React from "react";
import { NavLink } from "react-router-dom";
import tabs from "../../../../data/tabs";

const Tabs = ({ 
  orientation = "horizontal", 
  className = "",
  onTabClick 
}) => {
  const navTabs = tabs.filter((tab) => tab.isNav);

  const containerClasses = orientation === "horizontal"
    ? "flex items-center gap-8"
    : "flex flex-col gap-4";

  const linkClasses = ({ isActive }) => `
    relative font-medium transition-all duration-300 px-2 py-1
    ${isActive 
      ? "text-green-600 after:scale-x-100" 
      : "text-gray-700 hover:text-green-600 after:scale-x-0 hover:after:scale-x-100"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]
    after:bg-green-500 after:transition-transform after:duration-300 after:origin-left
  `;

  return (
    <nav className={`${containerClasses} ${className}`} aria-label="Tab navigation">
      {navTabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.href}
          onClick={onTabClick}
          className={linkClasses}
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Tabs;