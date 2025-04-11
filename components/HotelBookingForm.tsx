'use client'
import { useState } from 'react'
import { CalendarIcon, UserIcon, BedIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BookingFormProps {
  hotelId: number
  pricePerNight: number
}

export default function BookingForm({ hotelId, pricePerNight }: BookingFormProps) {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1
  })

  const calculateTotalNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const diffTime = new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const totalNights = calculateTotalNights()
  const totalPrice = totalNights * pricePerNight * bookingData.rooms

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically connect to your booking API
    console.log('Booking data:', {
      hotelId,
      ...bookingData,
      totalPrice,
      totalNights
    })
    alert('Réservation soumise avec succès!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Réserver maintenant</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Check-in Date */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Date darrivée</label>
          <div className="relative">
            <input
              type="date"
              className="w-full p-2 border rounded-md pl-10"
              value={bookingData.checkIn}
              onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <CalendarIcon className="absolute left-3 top-9 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Date de départ</label>
          <div className="relative">
            <input
              type="date"
              className="w-full p-2 border rounded-md pl-10"
              value={bookingData.checkOut}
              onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
              min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
              required
            />
            <CalendarIcon className="absolute left-3 top-9 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Adults */}
        <div>
          <label className="block text-sm font-medium mb-1">Adultes</label>
          <div className="relative">
            <select
              className="w-full p-2 border rounded-md pl-10"
              value={bookingData.adults}
              onChange={(e) => setBookingData({...bookingData, adults: parseInt(e.target.value)})}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <UserIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Children */}
        <div>
          <label className="block text-sm font-medium mb-1">Enfants</label>
          <div className="relative">
            <select
              className="w-full p-2 border rounded-md pl-10"
              value={bookingData.children}
              onChange={(e) => setBookingData({...bookingData, children: parseInt(e.target.value)})}
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <UserIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Rooms */}
        <div>
          <label className="block text-sm font-medium mb-1">Chambres</label>
          <div className="relative">
            <select
              className="w-full p-2 border rounded-md pl-10"
              value={bookingData.rooms}
              onChange={(e) => setBookingData({...bookingData, rooms: parseInt(e.target.value)})}
            >
              {[1, 2, 3].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <BedIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Price Summary */}
      {totalNights > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-1">
            <span>{pricePerNight.toLocaleString()} DA x {totalNights} nuit(s)</span>
            <span>{(pricePerNight * totalNights).toLocaleString()} DA</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>{bookingData.rooms} chambre(s)</span>
            <span>x{bookingData.rooms}</span>
          </div>
          <div className="border-t mt-2 pt-2 font-semibold flex justify-between">
            <span>Total</span>
            <span>{totalPrice.toLocaleString()} DA</span>
          </div>
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg mt-4"
      >
        Confirmer la réservation
      </Button>
    </form>
  )
}