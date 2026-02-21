import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="relative mb-8">
          <div className="text-[150px] md:text-[200px] font-bold text-green-600/10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <AlertCircle className="w-24 h-24 md:w-32 md:h-32 text-green-600 animate-bounce" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-4 border-white animate-ping"></div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Oops! The page you're looking for seems to have vanished into thin
          air. It might have been moved, deleted, or never existed.
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-8"></div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-700 mb-4 font-medium">
            Here's what you can do:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Check if the URL is correct
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Go back to the previous page
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Visit our homepage
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Contact our support team
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-green-500 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Need help?{" "}
          <Link
            to="/contact"
            className="text-green-600 font-semibold hover:text-green-700 hover:underline transition-colors duration-300"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-12">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            PRISTOL
          </span>
          <p className="text-xs text-gray-400 mt-2 tracking-wide">
            The Future of Pure Protection
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-10 w-20 h-20 border-2 border-green-200 rounded-full opacity-20 animate-pulse"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-green-300 rounded-full opacity-20 animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 right-40 w-16 h-16 border-2 border-green-400 rounded-full opacity-10 animate-pulse"
        style={{ animationDuration: "5s" }}
      ></div>
    </div>
  );
};

export default NotFound;
