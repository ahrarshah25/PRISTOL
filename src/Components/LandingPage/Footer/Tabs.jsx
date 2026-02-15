import React, { useState } from 'react'
import tabs from '../../../data/tabs'

const Tabs = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const navLinks = tabs.filter(tab => tab.isNav === true)
  const otherLinks = tabs.filter(tab => tab.isNav === false)

  const handleMouseEnter = (id) => setHoveredId(id)
  const handleMouseLeave = () => setHoveredId(null)

  const LinkItem = ({ tab }) => (
    <a
      href={tab.href}
      className="relative group block"
      onMouseEnter={() => handleMouseEnter(tab.id)}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`text-sm transition-all duration-300 ${
        hoveredId === tab.id 
          ? 'text-green-400 translate-x-2' 
          : 'text-green-100/70 hover:text-green-300'
      }`}>
        {tab.name}
      </span>
      
      <span className={`absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-green-400 rounded-full transition-all duration-300 ${
        hoveredId === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}></span>
      
      <span className={`absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300`}></span>
    </a>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-green-400 rounded-full"></span>
          Quick Links
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {navLinks.map(tab => (
            <LinkItem key={tab.id} tab={tab} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-green-400 rounded-full"></span>
          Information
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {otherLinks.map(tab => (
            <LinkItem key={tab.id} tab={tab} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tabs