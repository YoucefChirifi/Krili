import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, StarIcon } from '@heroicons/react/24/solid';

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  stars: number;
  price: string;
  image: string;
  amenities?: string[];
}

export default function HotelCard({
  id,
  name,
  location,
  stars,
  price,
  image,
  amenities = []
}: HotelCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-200">
      {/* Hotel Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${name} in ${location}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold">
          {stars} ★
        </div>
      </div>
      
      {/* Hotel Info */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{name}</h3>
            <p className="text-gray-600 mt-1 flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1 text-blue-500" />
              <span className="text-sm">{location}</span>
            </p>
          </div>
          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm font-bold whitespace-nowrap">
            {price} DA
          </span>
        </div>

        {/* Star Rating */}
        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
            />
          ))}
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {amenities.slice(0, 3).map((amenity) => (
                <span 
                  key={amenity} 
                  className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* View Details Button */}
        <Link
          href={`/hotels/${id}`}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center block text-sm font-medium"
        >
          Voir détails
        </Link>
      </div>
    </div>
  );
}