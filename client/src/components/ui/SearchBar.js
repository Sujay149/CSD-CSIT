"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight, BookOpen, Users, Calendar, FileText } from "lucide-react"
import { Link } from "react-router-dom"

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef(null)

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle search input change
  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)

    if (value.length > 2) {
      setIsExpanded(true)
      setIsLoading(true)

      // Simulate API search delay
      const timer = setTimeout(() => {
        // Mock search results - in a real app, this would be an API call
        const mockResults = [
          {
            type: "program",
            title: "Computer Science & Design",
            url: "/programs/computer-science-design",
            icon: <BookOpen className="h-4 w-4" />,
          },
          {
            type: "program",
            title: "Artificial Intelligence & Data Science",
            url: "/programs/ai-data-science",
            icon: <BookOpen className="h-4 w-4" />,
          },
          {
            type: "faculty",
            title: "Dr. Ramesh Kumar - AI Department",
            url: "/faculty/ramesh-kumar",
            icon: <Users className="h-4 w-4" />,
          },
          {
            type: "event",
            title: "Prajwalan Hackathon - May 15, 2023",
            url: "/events/prajwalan-hackathon",
            icon: <Calendar className="h-4 w-4" />,
          },
          {
            type: "page",
            title: "Admissions Process",
            url: "/admissions",
            icon: <FileText className="h-4 w-4" />,
          },
        ].filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))

        setResults(mockResults)
        setIsLoading(false)

        if (onSearch) {
          onSearch(value, mockResults)
        }
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setIsExpanded(false)
    }
  }

  // Clear search
  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsExpanded(false)
  }

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="h-10 w-full rounded-full border border-gray-300 bg-white pl-10 pr-10 focus:border-[#006699] focus:outline-none focus:ring-1 focus:ring-[#006699] transition-all"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X className="h-3 w-3 text-gray-600" />
          </button>
        )}
      </div>

      {/* Search results dropdown */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 z-50 overflow-hidden"
          >
            {isLoading ? (
              <div className="p-4 text-center">
                <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-[#006699] border-t-transparent"></div>
                <p className="mt-2 text-sm text-gray-500">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="max-h-80 overflow-y-auto">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.url}
                    className="flex items-center p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                    onClick={() => setIsExpanded(false)}
                  >
                    <div className="mr-3 text-[#006699]">{result.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{result.title}</p>
                      <p className="text-xs text-gray-500 capitalize">{result.type}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                <p>No results found for "{query}"</p>
              </div>
            )}

            {results.length > 0 && (
              <div className="p-2 bg-gray-50 border-t border-gray-100 text-center">
                <Link
                  to={`/search?q=${encodeURIComponent(query)}`}
                  className="text-xs text-[#006699] hover:underline"
                  onClick={() => setIsExpanded(false)}
                >
                  View all results
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar
