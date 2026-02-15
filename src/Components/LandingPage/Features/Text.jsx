import React from 'react'

const Text = ({ title, description }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  )
}

export default Text