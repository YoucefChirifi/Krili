// components/Navbar.tsx
'use client'
import Link from "next/link";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [hoveredStar, setHoveredStar] = useState(0);
  const userName = "John Doe"; // Replace with your actual user data
  const userInitials = userName.split(' ').map(name => name[0]).join('').toUpperCase();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo on left */}
      <Link href="/">
        <div className="text-2xl font-bold text-blue-900">
          K<span className="text-blue-600">RILI</span>
        </div>
      </Link>

      {/* Stars in center */}
      <div className="flex gap-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Link 
            key={star}
            href={`/stars/${star}`}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(0)}
          >
            <FaStar 
              size={30}
              className={
                star <= hoveredStar 
                  ? "text-yellow-400" 
                  : "text-gray-300"
              }
            />
          </Link>
        ))}
      </div>

      {/* Account circle with name */}
      <div className="flex items-center gap-3 w-24 justify-end">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold cursor-pointer">
            {userInitials}
          </div>
          {/* You can add a dropdown menu here later */}
        </div>
      </div>
    </nav>
  );
}