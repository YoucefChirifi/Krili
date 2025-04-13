// components/ImageCarousel.tsx
'use client'
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface ImageCarouselProps {
  images: string[]
  hotelName: string
}

export function ImageCarousel({ images, hotelName }: ImageCarouselProps) {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    setOpen(true)
  }

  return (
    <>
      {/* Main Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div 
                className="relative h-64 md:h-96 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image}
                  alt={`${hotelName} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Image Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <div className="relative w-full h-[80vh]">
            <Image
              src={images[selectedImage]}
              alt={`${hotelName} - Full View`}
              fill
              className="object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}