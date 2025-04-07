import HotelCard from '@/components/HotelCard';

const hotels = [
  {
    id: 1,
    name: "Grand México City",
    location: "Mexico City",
    stars: 5,
    price: "3500",
    image: "/hotel1.jpg"
  },
  {
    id: 2,
    name: "Playa del Carmen Resort",
    location: "Quintana Roo",
    stars: 4,
    price: "$180",
    image: "/hotel2.jpg"
  },
  {
    id: 3,
    name: "Guadalajara Historic",
    location: "Jalisco",
    stars: 3,
    price: "$120",
    image: "/hotel3.jpg"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header - Appears only once at the top */}
      <div className="mb-12 text-center">
        <h1 className="text-black py-6 text-5xl font-bold font-['Playwrite_MX']">
          Look to your dream
        </h1>
        <hr className="border-t-4 border-blue-600 w-1/4 mx-auto my-4" />
      </div>

      {/* Hotel cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <HotelCard 
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            location={hotel.location}
            stars={hotel.stars}
            price={hotel.price}
            image={hotel.image}
          />
        ))}
      </div>
    </div>
  );
}