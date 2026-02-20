import React from 'react'
import Icon from './Icon'
import Heading from './Heading'
import Description from './Description'

const Card = ({ heading, description, type, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-green-200">
      <div className="flex items-start gap-4">
        <Icon icon={icon} />
        <div className="flex-1">
          <Heading text={heading} />
          <Description text={description} type={type} />
        </div>
      </div>
    </div>
  )
}

export default Card