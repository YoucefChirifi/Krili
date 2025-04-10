// components/Navbar.tsx
'use client'
import Link from "next/link"
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Navbar() {
  const [showFilters, setShowFilters] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Change based on auth state
  const userName = "John Doe"
  const userInitials = userName.split(' ').map(name => name[0]).join('').toUpperCase()

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Filters Button (Left) */}
        <div className="flex-1 flex justify-start">
          <Button 
            variant="ghost" 
            onClick={() => setShowFilters(!showFilters)}
            className="p-2"
          >
            {showFilters ? <FaTimes size={20} /> : <FaBars size={20} />}
            <span className="ml-2 hidden sm:inline">Filters</span>
          </Button>
        </div>

        {/* Logo (Center) */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <div className="text-2xl font-bold text-blue-900">
              K<span className="text-blue-600">RILI</span>
            </div>
          </Link>
        </div>

        {/* Account (Right) */}
        <div className="flex-1 flex justify-end gap-4">
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <Button variant="outline" className="hidden sm:block">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="hidden sm:block bg-blue-600 hover:bg-blue-700">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold cursor-pointer">
              {userInitials}
            </div>
          )}
        </div>
      </div>

      {/* Filters Dropdown */}
      {showFilters && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Wilaya Select */}
            <div>
              <label className="block text-sm font-medium mb-1">Wilaya</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">Select Wilaya</option>
                {Array.from({ length: 58 }, (_, i) => (
                  <option key={i+1} value={i+1}>Wilaya {i+1}</option>
                ))}
              </select>
            </div>

            {/* Hotel Stars */}
            <div>
              <label className="block text-sm font-medium mb-1">Hotel Class</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">Any</option>
                <option value="1">⭐ (1 Star)</option>
                <option value="2">⭐⭐ (2 Stars)</option>
                <option value="3">⭐⭐⭐ (3 Stars)</option>
                <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium mb-1">Min Price (DA)</label>
              <input 
                type="number" 
                placeholder="Min" 
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Max Price (DA)</label>
              <input 
                type="number" 
                placeholder="Max" 
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(false)}
            >
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}