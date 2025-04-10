// components/SearchFilters.tsx
'use client'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const algerianWilayas = Array.from({ length: 58 }, (_, i) => ({
  id: i + 1,
  name: `Wilaya ${i + 1}` // Replace with actual wilaya names if available
}))

const hotelTypes = [
  { value: "1", label: "⭐ Hotel (1 Star)" },
  { value: "2", label: "⭐⭐ Hotel (2 Stars)" },
  { value: "3", label: "⭐⭐⭐ Hotel (3 Stars)" },
  { value: "4", label: "⭐⭐⭐⭐ Hotel (4 Stars)" },
  { value: "5", label: "⭐⭐⭐⭐⭐ Hotel (5 Stars)" }
]

export default function SearchFilters() {
  const [selectedWilaya, setSelectedWilaya] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search with filters
    console.log({
      wilaya: selectedWilaya,
      type: selectedType,
      priceRange: `${minPrice}-${maxPrice}`
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Wilaya Select */}
      <Select onValueChange={setSelectedWilaya} value={selectedWilaya}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Wilaya" />
        </SelectTrigger>
        <SelectContent>
          {algerianWilayas.map((wilaya) => (
            <SelectItem key={wilaya.id} value={wilaya.id.toString()}>
              {wilaya.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Hotel Type/Stars Select */}
      <Select onValueChange={setSelectedType} value={selectedType}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Hotel Type" />
        </SelectTrigger>
        <SelectContent>
          {hotelTypes.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Price Range */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min Price (DA)"
          className="border rounded-md px-3 py-2 w-24"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span className="self-center">-</span>
        <input
          type="number"
          placeholder="Max Price (DA)"
          className="border rounded-md px-3 py-2 w-24"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        Search
      </Button>
    </form>
  )
}