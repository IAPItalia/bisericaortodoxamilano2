'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { programData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';

interface ProgramProps {
  lang: Language;
}

export default function Program({ lang }: ProgramProps) {
  const t = translations[lang];
  const data = programData[lang];

  return (
    <section id="program" className="py-24 px-6 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#5A5A40] font-serif italic text-lg mb-2 block">{data.title}</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            <span className="sr-only">Program Slujbe Parohia Milano 2 - </span>
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
  {data.images.map((item, index) => (
    <motion.div
      key={item.src}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-4 rounded-[32px] shadow-sm border border-[#e6dfd1] overflow-hidden"
    >
      <h3 className="font-serif text-2xl font-bold mb-4 text-center">
        {item.title}
      </h3>

     <div className="relative aspect-[3/4] max-w-xl mx-auto rounded-2xl overflow-hidden">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://picsum.photos/seed/program/1200/1600";
          }}
        />
      </div>
    </motion.div>
  ))}
</div>

        {/* Theofania Calendar */}
        <div className="mt-24 text-center">
          <h3 className="font-serif text-3xl font-bold mb-8">{t.calendarTitle}</h3>
          <div className="bg-white p-8 rounded-[32px] border border-[#e6dfd1] shadow-sm max-w-4xl mx-auto overflow-hidden">
            <p className="text-gray-500 mb-6 italic">{t.theofaniaInfo}</p>
            <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200 overflow-hidden">
              <iframe 
                src="https://theofania.ro/calendar/" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                title="Calendar Theofania"
              ></iframe>
            </div>
            <a
              href="https://theofania.ro/calendar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-[#5A5A40] font-medium hover:underline"
            >
              {t.seeFullCalendar}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
