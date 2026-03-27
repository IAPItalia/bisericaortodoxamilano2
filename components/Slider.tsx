'use client';

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys()).map(i => `/images/slider/${i + 1}.jpg`);

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((src, index) => (
          <div className="relative flex-[0_0_100%] min-w-0 h-full" key={index}>
            <Image
              src={src}
              alt={`Biserica Ortodoxă Română Milano 2 - Imagine Slider ${index + 1}`}
              fill
              className="object-cover brightness-50"
              priority={index === 0}
              onError={(e) => {
                // Fallback to a placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = `https://picsum.photos/seed/church${index}/1920/1080`;
              }}
            />
          </div>
        ))}
      </div>
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft size={32} />
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
