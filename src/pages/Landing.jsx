import React, { useState, useEffect } from "react";
import Navbar from "../Components/LandingPage/Navbar/Navbar";
import Slider from "../Components/LandingPage/Slider/Slider";
import Hero from "../Components/LandingPage/Hero/Hero";
import Features from "../Components/LandingPage/Features/Features";
import Working from "../Components/LandingPage/Working/Working";
import Footer from "../Components/LandingPage/Footer/Footer";
import Bot from "../Components/Bot/Bot";
import FAQ from "../Components/LandingPage/FAQ/FAQ";

const Landing = () => {
  const [isBotOpen, setIsBotOpen] = useState(false);

  useEffect(() => {
    document.title = "PRISTOL - The Future of Pure Protection";
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <Features />
      <Working />
      <FAQ botOpen={isBotOpen} func={setIsBotOpen} />
      <Footer />

    </div>
  );
};

export default Landing;
