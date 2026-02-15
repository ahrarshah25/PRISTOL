import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import features from "../../../data/features";
import { Sparkles } from "lucide-react";

const Features = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");

            const cardId = entry.target.dataset.id;
            if (cardId && !visibleCards.includes(cardId)) {
              setVisibleCards((prev) => [...prev, cardId]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px" },
    );

    if (titleRef.current) observer.observe(titleRef.current);

    const cardElements = document.querySelectorAll("[data-id]");
    cardElements.forEach((card) => observer.observe(card));

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      cardElements.forEach((card) => observer.unobserve(card));
    };
  }, [visibleCards]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-green-50 to-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="absolute top-40 left-10 w-20 h-20 bg-green-400 rounded-full opacity-10 blur-2xl animate-bounce"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-green-500 rounded-full opacity-10 blur-2xl animate-bounce animation-delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="text-center max-w-3xl mx-auto mb-20 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6 hover:bg-green-200 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Why Use PRISTOL
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Science of{" "}
            <span className="relative">
              <span className="text-green-600">Pure Protection</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C41.5 2 106 0.5 199 1"
                  stroke="#22C55E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Discover why thousands trust PRISTOL for their daily hygiene and
            protection needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-id={feature.id}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "99.9%", label: "Protection Rate" },
            { number: "24/7", label: "Support" },
            { number: "100%", label: "Natural Ingredients" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
