// components/BookingForm.tsx
'use client'
import { useState } from 'react'
import { Calendar as CalendarIcon, UserIcon, BedIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

interface BookingFormProps {
  hotelId: number
  pricePerNight: number
}

export default function BookingForm({ hotelId, pricePerNight }: BookingFormProps) {
  const [bookingData, setBookingData] = useState({
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
    adults: 1,
    children: 0,
    rooms: 1
  })

  const calculateTotalNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const diffTime = bookingData.checkOut.getTime() - bookingData.checkIn.getTime()
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const totalNights = calculateTotalNights()
  const totalPrice = totalNights * pricePerNight * bookingData.rooms

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking data:', {
      hotelId,
      ...bookingData,
      totalPrice,
      totalNights
    })
    alert('Réservation soumise avec succès!')
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-4 bg-white p-6 rounded-lg shadow-md sticky top-4 h-fit"
    >
      <h3 className="text-xl font-semibold">Réserver maintenant</h3>
      
      {/* Check-in Date */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Date darrivée</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !bookingData.checkIn && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {bookingData.checkIn ? (
                format(bookingData.checkIn, "PPP", { locale: fr })
              ) : (
                <span>Sélectionner une date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={bookingData.checkIn}
              onSelect={(date) => setBookingData({...bookingData, checkIn: date})}
              initialFocus
              fromDate={new Date()}
              locale={fr}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Check-out Date */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Date de départ</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !bookingData.checkOut && "text-muted-foreground"
              )}
              disabled={!bookingData.checkIn}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {bookingData.checkOut ? (
                format(bookingData.checkOut, "PPP", { locale: fr })
              ) : (
                <span>Sélectionner une date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={bookingData.checkOut}
              onSelect={(date) => setBookingData({...bookingData, checkOut: date})}
              initialFocus
              fromDate={bookingData.checkIn ? new Date(bookingData.checkIn.getTime() + 86400000) : new Date()}
              locale={fr}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Adults */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Adultes</label>
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
      <div className="space-y-2">
        <label className="block text-sm font-medium">Enfants</label>
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
      <div className="space-y-2">
        <label className="block text-sm font-medium">Chambres</label>
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

      {/* Price Summary */}
      {totalNights > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Prix/nuit:</span>
            <span className="text-sm">{pricePerNight.toLocaleString()} DA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Durée:</span>
            <span className="text-sm">{totalNights} nuit(s)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Chambres:</span>
            <span className="text-sm">{bookingData.rooms}</span>
          </div>
          <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span>{totalPrice.toLocaleString()} DA</span>
          </div>
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg mt-4"
        disabled={!bookingData.checkIn || !bookingData.checkOut}
      >
        Confirmer la réservation
      </Button>
    </form>
  )
}