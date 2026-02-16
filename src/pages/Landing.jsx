import React, { useState } from 'react'
import Navbar from "../Components/LandingPage/Navbar/Navbar";
import Slider from '../Components/LandingPage/Slider/Slider';
import Hero from '../Components/LandingPage/Hero/Hero';
import Features from "../Components/LandingPage/Features/Features";
import Working from "../Components/LandingPage/Working/Working";
import Footer from "../Components/LandingPage/Footer/Footer";
import Bot from "../Components/Bot/Bot";
import FAQ from "../Components/LandingPage/FAQ/FAQ";
import { MessageCircle, X } from 'lucide-react';

const Landing = () => {
  const [isBotOpen, setIsBotOpen] = useState(false)

  return (
    <div>
      <title>PRISTOL - The Future of Pure Protection</title>
      <Navbar />
      <Hero />
      <Slider />
      <Features />
      <Working />
      <FAQ botOpen={isBotOpen} func={setIsBotOpen} />
      <Footer />
      
      <button
        onClick={() => setIsBotOpen(!isBotOpen)}
        className={`mb-[30px] fixed bottom-4 right-4 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isBotOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-90' 
            : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-110'
        }`}
      >
        {isBotOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {isBotOpen && (
        <div className="fixed bottom-20 right-4 z-50 animate-slideUp">
          <Bot />
        </div>
      )}
    </div>
  )
}

export default Landing