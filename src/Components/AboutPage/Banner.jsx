import React from 'react'

const Banner = ({ 
  title = "About PRISTOL",
  subtitle = "Discover the story behind our premium antiseptic and cleaning solutions",
  bgImage = "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  overlay = true,
  height = "h-96",
  align = "center"
}) => {
  
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-900/90"></div>
        )}
      </div>

      <div className={`relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex ${alignmentClasses[align]}`}>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 animate-slideIn"></div>
          <p className="text-lg md:text-xl text-green-100/90 leading-relaxed animate-fadeInUp animation-delay-200">
            {subtitle}
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-green-200/80 animate-fadeInUp animation-delay-400">
            <span>Home</span>
            <span className="text-green-400">•</span>
            <span className="text-white font-medium">{title.replace('About', '').trim()}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Banner