'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';

interface ProjectsProps {
  lang: Language;
}

export default function Projects({ lang }: ProjectsProps) {
  const t = translations[lang];
  const data = projectsData[lang];

  return (
    <section id="proiecte" className="py-24 px-6 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-[32px] overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src={data.image}
              alt={`${data.title} - Parohia Milano 2`}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/project/1200/800";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-[#5A5A40] font-serif italic text-lg mb-2 block">{t.future}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="sr-only">Donații și Contribuții Parohia Milano 2 - </span>
              {data.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {data.description}
            </p>
            
            <button className="mt-6 px-8 py-4 bg-[#5A5A40] text-white rounded-full font-medium hover:bg-[#4a4a35] transition-colors">
              {data.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
