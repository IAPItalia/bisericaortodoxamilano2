'use client';

import React, { useCallback } from 'react';
import { motion } from 'motion/react';
import { Heart, Users, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { activitiesData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface ActivitiesProps {
  lang: Language;
}

function ActivityCarousel({ images, title, index }: { images: string[], title: string, index: number }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group/carousel aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm mb-6">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
              <Image
                src={src}
                alt={`${title} - Parohia Milano 2 - Imagine ${i + 1}`}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://picsum.photos/seed/activity-${index}-${i}/800/600`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white/40 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white/40 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator (Optional but nice) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
        ))}
      </div>
    </div>
  );
}

export default function Activities({ lang }: ActivitiesProps) {
  const t = translations[lang];
  const activities = activitiesData[lang as keyof typeof activitiesData];

  const icons = [MapPin, Heart, Users];

  return (
    <section id="activitati" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#5A5A40] font-serif italic text-lg mb-2 block">{t.parishLife}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.activitiesTitle}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {activities.map((activity, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group space-y-6"
              >
                <ActivityCarousel 
                  images={activity.images} 
                  title={activity.title} 
                  index={index} 
                />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f5f5f0] rounded-xl flex items-center justify-center text-[#5A5A40]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
