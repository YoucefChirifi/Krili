import { MapPinIcon, StarIcon, WifiIcon, ParkingCircleIcon, UtensilsIcon, DumbbellIcon, WavesIcon } from 'lucide-react';

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
    images: ["/hotels/algiers/1.jpg", "/hotels/algiers/2.jpg", "/hotels/algiers/3.jpg"]
  },
  // Add other hotels...
];

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = hotels.find(h => h.id === Number(params.id));

  if (!hotel) {
    return <div className="container mx-auto px-4 py-8 text-center">Hôtel non trouvé</div>;
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

      {/* Hotel Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <img 
            src={hotel.images[0]} 
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {hotel.images.slice(1, 3).map((image, index) => (
            <div key={index} className="relative h-32 md:h-48 rounded-xl overflow-hidden">
              <img 
                src={image} 
                alt={`${hotel.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {hotel.images.length > 3 && (
            <div className="relative h-32 md:h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">+{hotel.images.length - 3} photos</span>
            </div>
          )}
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-blue-50 rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">À partir de</h3>
            <p className="text-3xl font-bold text-blue-600">{hotel.price.toLocaleString()} DA</p>
            <p className="text-gray-500 text-sm">par nuit</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            Réserver
          </button>
        </div>
      </div>

      {/* Hotel Description */}
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

      {/* Location Map Placeholder */}
      <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
        <p className="text-gray-500">Carte de localisation</p>
      </div>
    </div>
  );
}