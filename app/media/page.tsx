'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Language, translations } from '@/lib/translations';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function MediaPage() {
  const [lang, setLang] = useState<Language>('ro');
  const t = translations[lang];

  const galleryImages = [
    { id: 1, src: '/images/media/1.jpg', title: { ro: 'Sfânta Liturghie', it: 'Santa Liturgia' } },
    { id: 2, src: '/images/media/2.jpg', title: { ro: 'Activități copii', it: 'Attività bambini' } },
    { id: 3, src: '/images/media/3.jpg', title: { ro: 'Pelerinaj 2023', it: 'Pellegrinaggio 2023' } },
    { id: 4, src: '/images/media/4.jpg', title: { ro: 'Corul Parohial', it: 'Coro Parrocchiale' } },
    { id: 5, src: '/images/media/5.jpg', title: { ro: 'Sărbătoarea hramului', it: 'Festa patronale' } },
    { id: 6, src: '/images/media/6.jpg', title: { ro: 'Seară duhovnicească', it: 'Serata spirituale' } },
  ];

  return (
    <main className="bg-[#fdfcf9] min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-center">Media</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          {lang === 'ro' 
            ? 'Momente deosebite din viața comunității noastre surprinse în imagini.'
            : 'Momenti speciali della vita della nostra comunità catturati in immagini.'}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-[32px] overflow-hidden bg-gray-100 shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.title[lang]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://picsum.photos/seed/media-${img.id}/800/800`;
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-serif text-xl font-bold">{img.title[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer lang={lang} />
      <FloatingContact />
    </main>
  );
}
