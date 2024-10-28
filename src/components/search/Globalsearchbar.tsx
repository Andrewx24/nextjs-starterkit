'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState, useEffect } from 'react'
import { Search } from 'lucide-react'

const GlobalSearchBar = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '')
  }, [searchParams])

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)
    return params.toString()
  }, [searchParams])

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    
    const newQueryString = createQueryString('q', searchQuery)
    router.push(`/search?${newQueryString}`)
  }, [createQueryString, router, searchQuery])

  // Handle click outside to close expanded search on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container')
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div id="search-container" className="flex-1 max-w-xl mx-4">
      <form onSubmit={handleSearch} className="relative">
        <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-full' : 'w-full md:w-64'}`}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            placeholder="Search..."
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            type="submit"
            className="absolute right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default GlobalSearchBar