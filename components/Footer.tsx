// components/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-grey border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              <span className="text-blue-600">KRILI</span> Algeria
            </h2>
            <p className="text-gray-600 text-sm">
              Trouvez les meilleurs hôtels en Algérie pour un séjour inoubliable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hotels/alger" className="text-gray-600 hover:text-blue-600">Hôtels à Alger</Link></li>
              <li><Link href="/hotels/oran" className="text-gray-600 hover:text-blue-600">Hôtels à Oran</Link></li>
              <li><Link href="/hotels/constantine" className="text-gray-600 hover:text-blue-600">Hôtels à Constantine</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Contactez-nous</h3>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <FaPhone className="text-blue-500" />
              <span>+213 XXX XX XX XX</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} KRILI Algérie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}