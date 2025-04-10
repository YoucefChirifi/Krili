import HotelCard from '@/components/HotelCard';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const featuredHotels = [
  {
    id: 1,
    name: "Hôtel El Aurassi",
    location: "Alger",
    stars: 5,
    price: "35,000",
    image: "/hotels/algeria.png",
    amenities: ["Piscine", "Spa", "Vue mer"]
  },
  {
    id: 2,
    name: "Hôtel Sheraton Oran",
    location: "Oran",
    stars: 5,
    price: "28,500",
    image: "/hotels/sheraton.png",
    amenities: ["WiFi", "Petit-déjeuner", "Centre d'affaires"]
  },
  {
    id: 3,
    name: "Hôtel Constantine",
    location: "Constantine",
    stars: 4,
    price: "22,000",
    image: "/hotels/const.png",
    amenities: ["Restaurant", "Parking", "Salle de sport"]
  },
  {
    id: 4,
    name: "Hôtel Sabri Beach",
    location: "Annaba",
    stars: 4,
    price: "25,750",
    image: "/hotels/k.png",
    amenities: ["Plage privée", "Bar", "Animations"]
  },
  {
    id: 5,
    name: "Hôtel Tassili",
    location: "Djanet",
    stars: 3,
    price: "18,000",
    image: "/hotels/tassili.png",
    amenities: ["Désert", "Excursions", "Dîner traditionnel"]
  },
  {
    id: 6,
    name: "Hôtel Royal El Marsa",
    location: "Tipaza",
    stars: 4,
    price: "26,300",
    image: "/hotels/k2.png",
    amenities: ["Piscine", "Jardin", "Proche plage"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${playfair.className}`}>
            Trouvez votre hôtel idéal en Algérie
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les meilleurs établissements pour votre séjour
          </p>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Nos hôtels recommandés</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map((hotel) => (
            <HotelCard 
              key={hotel.id}
              {...hotel}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à réserver ?</h2>
          <p className="text-lg mb-6">Trouvez hôtel parfait pour votre prochain voyage</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Commencer la recherche
          </button>
        </div>
      </section>
    </main>
  );
}