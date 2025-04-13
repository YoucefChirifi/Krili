// pages/hotels/[id].tsx
'use client'
import { MapPinIcon, StarIcon, WifiIcon, ParkingCircleIcon, UtensilsIcon, DumbbellIcon, WavesIcon } from 'lucide-react'
import BookingForm from '@/components/HotelBookingForm'
import { ImageCarousel } from '@/components/ImageCarousel'
import { Button } from '@/components/ui/button'
import { PhoneIcon, HeartIcon } from 'lucide-react'

interface Hotel {
  id: number;
  name: string;
  location: string;
  stars: number;
  price: number;
  description: string;
  amenities: string[];
  images: string[];
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hôtel El Aurassi",
    location: "Alger",
    stars: 5,
    price: 35000,
    description: "Situé face à la baie d'Alger, cet hôtel luxueux offre une vue imprenable sur la Méditerranée et un service exceptionnel.",
    amenities: ["WiFi", "Parking", "Piscine", "Spa", "Restaurant", "Salle de sport"],
    images: [
      "/hotels/algeria.png",
      "/hotels/algeria.png",
      "/hotels/algeria.png",
      "/hotels/algeria.png"
    ]
  },
  // Add more hotels as needed
]

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = hotels.find(h => h.id === Number(params.id))

  if (!hotel) {
    return <div className="container mx-auto px-4 py-8 text-center">Hôtel non trouvé</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hotel Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
        <div className="flex items-center mt-2">
          <div className="flex mr-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i}
                className={`w-5 h-5 ${i < hotel.stars ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
              />
            ))}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="w-4 h-4 mr-1" />
            <span>{hotel.location}</span>
          </div>
        </div>
      </div>

      {/* Hotel Gallery & Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Images with Carousel */}
        <div className="lg:col-span-2 space-y-4">
          <ImageCarousel images={hotel.images} hotelName={hotel.name} />
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-2">
            {hotel.images.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={image}
                  alt={`${hotel.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <BookingForm hotelId={hotel.id} pricePerNight={hotel.price} />
            
            {/* Additional Booking Options */}
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full">
                <span className="flex items-center justify-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  Contacter lhôtel
                </span>
              </Button>
              <Button variant="outline" className="w-full">
                <span className="flex items-center justify-center gap-2">
                  <HeartIcon className="w-4 h-4" />
                  Sauvegarder
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700">{hotel.description}</p>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Équipements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {hotel.amenities.includes("WiFi") && (
            <div className="flex items-center">
              <WifiIcon className="w-5 h-5 mr-2 text-blue-500" />
              <span>WiFi gratuit</span>
            </div>
          )}
          {hotel.amenities.includes("Parking") && (
            <div className="flex items-center">
              <ParkingCircleIcon className="w-5 h-5 mr-2 text-blue-500" />
              <span>Parking</span>
            </div>
          )}
          {hotel.amenities.includes("Restaurant") && (
            <div className="flex items-center">
              <UtensilsIcon className="w-5 h-5 mr-2 text-blue-500" />
              <span>Restaurant</span>
            </div>
          )}
          {hotel.amenities.includes("Piscine") && (
            <div className="flex items-center">
              <WavesIcon className="w-5 h-5 mr-2 text-blue-500" />
              <span>Piscine</span>
            </div>
          )}
          {hotel.amenities.includes("Salle de sport") && (
            <div className="flex items-center">
              <DumbbellIcon className="w-5 h-5 mr-2 text-blue-500" />
              <span>Salle de sport</span>
            </div>
          )}
        </div>
      </div>

      {/* Location */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Localisation</h2>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
          <p className="text-gray-500">Carte de localisation</p>
        </div>
        <div className="mt-4">
          <Button variant="outline" className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" />
            <span>Voir sur la carte</span>
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Avis des clients</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
                />
              ))}
            </div>
            <p className="text-gray-700 italic">Excellent séjour, personnel très accueillant et chambres spacieuses."</p>
            <p className="text-sm text-gray-500 mt-2">- Ahmed, 15 Mars 2023</p>
          </div>
          <Button variant="outline">Voir tous les avis</Button>
        </div>
      </div>
    </div>
  )
}