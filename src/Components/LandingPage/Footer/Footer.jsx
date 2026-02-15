import React from "react";
import Tabs from "./Tabs";
import Social from "./Social";
import Copyright from "./Copyright";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400 rounded-full opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-600 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4ade80 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                PRISTOL
              </h2>
              <p className="text-green-100/70 text-sm leading-relaxed">
                The Future of Pure Protection. Advanced antiseptic solution for
                modern living.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-xs text-green-300">
                  24/7 Customer Support
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Tabs />
          </div>
        </div>

        <div className="border-t border-green-800/50 pt-8 mb-8">
          <Social />
        </div>

        <Copyright currentYear={currentYear} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
    </footer>
  );
};

export default Footer;
