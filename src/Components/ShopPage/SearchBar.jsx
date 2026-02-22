import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-6 py-4 pl-14 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-700 placeholder-gray-400"
          />
          <Search className="absolute left-5 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-5 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBar