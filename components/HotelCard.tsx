interface HotelCardProps {
    id: number;
    name: string;
    location: string;
    stars: number;
    price: string;
    image: string;
  }
  
  export default function HotelCard({
    id,
    name,
    location,
    stars,
    price,
    image
  }: HotelCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Hotel image */}
        <div className="h-48 bg-blue-100 flex items-center justify-center">
          <span className="text-gray-500">[Hotel Image]</span>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{name}</h3>
              <p className="text-gray-600">{location}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
              {price}/night
            </span>
          </div>
  
          {/* Star rating */}
          <div className="flex mt-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < stars ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
  
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
            View Details
          </button>
        </div>
      </div>
    );
  }