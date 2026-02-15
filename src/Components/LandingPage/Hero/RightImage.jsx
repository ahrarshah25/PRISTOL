import React, { useState, useEffect } from "react";
import { Shield, CheckCircle, Star } from "lucide-react";

const RightImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-96 h-96 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="absolute w-72 h-72 border-2 border-green-200 rounded-full"></div>
      <div className="absolute w-56 h-56 border-2 border-green-300 rounded-full"></div>
      
      <div className={`relative transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="relative z-10">
          <img 
            src="/pristol-bottle.png" 
            className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            alt="PRISTOL Antiseptic Bottle"
          />
        </div>

        <div className="absolute -top-8 -right-8 z-20">
          <div className="bg-white rounded-2xl shadow-xl p-4 rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              <div>
                <div className="text-xs text-slate-500">Protection</div>
                <div className="text-sm font-bold text-slate-800">99.9%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-8 -left-8 z-20">
          <div className="bg-white rounded-2xl shadow-xl p-4 -rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <div className="mb-8">
                <div className="text-xs text-slate-500">Rating</div>
                <div className="text-sm font-bold text-slate-800">4.9/5</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 -right-12 z-20">
          <div className="bg-green-600 rounded-full p-3 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white border-opacity-20">
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">200ml</div>
            <div className="text-xs text-slate-500">Volume</div>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">24mo</div>
            <div className="text-xs text-slate-500">Shelf Life</div>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">PKR 320</div>
            <div className="text-xs text-slate-500">Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImage;