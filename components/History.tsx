'use client';

'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { historyData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';

interface HistoryProps {
  lang: Language;
}

export default function History({ lang }: HistoryProps) {
  const t = translations[lang];
  const paragraphs = historyData[lang];

  return (
    <section id="istoric" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#5A5A40] font-serif italic text-lg mb-2 block">
              {lang === 'ro' ? 'Povestea noastră' : 'La nostra storia'}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {lang === 'ro' 
                ? 'Parohia Milano 2 - Scurt Istoric' 
                : 'Parrocchia Milano 2 - Breve Storia'}
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/history.jpg"
              alt="Parohia Milano 2 - Sfinții Mucenici Nazarie, Ghervasie, Protasie și Chelsie și Sfânta Parascheva"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/history/800/1000";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
