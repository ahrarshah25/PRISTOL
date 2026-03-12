import React from 'react'
import { Filter } from 'lucide-react'

const FilterBar = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center gap-3">
      <Filter className="w-5 h-5 text-gray-400" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      >
        <option value="newest">Newest First</option>
        <option value="highest">Highest Rated</option>
      </select>
    </div>
  )
}

export default FilterBar