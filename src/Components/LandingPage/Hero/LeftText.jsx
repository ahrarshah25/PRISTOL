import React, { useState } from 'react';
import { Store, Shield, Droplets, Sparkles, ArrowRight } from 'lucide-react';

const LeftText = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleShopNow = () => {
    window.location.href = "/shop";
  };

  return (
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
        <Sparkles className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-green-700">Premium Quality • 100% Effective</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
          PRISTOL
        </h1>
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 leading-tight">
            The Future of Pure Protection.
          </h2>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-green-600 rounded-full"></div>
        </div>
      </div>

      <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
        PRISTOL is a premium antiseptic liquid engineered for{' '}
        <span className="text-green-600 font-semibold">powerful protection</span>,{' '}
        <span className="text-green-600 font-semibold">advanced cleaning</span>, and{' '}
        <span className="text-green-600 font-semibold">uncompromised purity</span> — 
        designed for modern living.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-xl">
        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
          <div className="p-2 bg-green-100 rounded-lg">
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <span className="text-sm font-medium text-slate-700">99.9% Protection</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
          <div className="p-2 bg-green-100 rounded-lg">
            <Droplets className="w-5 h-5 text-green-600" />
          </div>
          <span className="text-sm font-medium text-slate-700">Gentle Formula</span>
        </div>
      </div>

      <div className="pt-4">
        <button 
          onClick={handleShopNow}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <Store className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
          <span>Shop Now</span>
          <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'translate-x-1 opacity-100' : 'opacity-0'}`} />
        </button>
      </div>

      <div className="flex items-center gap-6 pt-6">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          <span className="font-semibold text-slate-700">10,000+</span> happy customers
        </p>
      </div>
    </div>
  );
};

export default LeftText;