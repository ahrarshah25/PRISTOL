import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import tabs from "../../../data/tabs";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = ({ cartItemCount = 0, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navTabs = tabs.filter((tab) => tab.isNav);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinkClasses = ({ isActive }) => `
    relative font-medium text-[15px] transition-all duration-300
    ${
      isActive
        ? "text-green-600 after:scale-x-100"
        : "text-gray-700 hover:text-green-600 after:scale-x-0 hover:after:scale-x-100"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]
    after:bg-green-500 after:transition-transform after:duration-300 after:origin-left
  `;

  return (
    <>
      <nav
        className={`
          w-full fixed top-0 left-0 z-50 transition-all duration-300
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-md py-3"
              : "bg-white/80 backdrop-blur-lg shadow-sm py-5"
          }
        `}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8">
            {navTabs.map((tab) => (
              <NavLink key={tab.id} to={tab.href} className={navLinkClasses}>
                {tab.name}
              </NavLink>
            ))}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-green-50 transition-all duration-300 group"
              aria-label={`Shopping cart with ${cartItemCount} items`}
            >
              <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center animate-scale-in">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </button>

            <Button
              size="md"
              onClick={async () => {
                await new Promise((res) => setTimeout(res, 800));
                window.location.href = "/shop";
              }}
            >
              Buy Now
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-green-50 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-green-800" />
              ) : (
                <Menu className="w-6 h-6 text-green-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
            aria-hidden="true"
          />

          <div
            className={`
              fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Logo showText />
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navTabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    style={{
                      animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <NavLink
                      to={tab.href}
                      onClick={closeMenu}
                      className={({ isActive }) => `
                        block px-4 py-3 text-lg font-medium rounded-lg transition-all
                        ${
                          isActive
                            ? "bg-green-50 text-green-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        }
                      `}
                    >
                      {tab.name}
                    </NavLink>
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Cart</span>
                  <button
                    onClick={onCartClick}
                    className="relative p-2"
                    aria-label="View cart"
                  >
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </button>
                </div>

                <Button
                  size="lg"
                  fullWidth
                  className="mt-4"
                  onClick={async () => {
                    await new Promise((res) => setTimeout(res, 800));
                    window.location.href = "/shop";
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
