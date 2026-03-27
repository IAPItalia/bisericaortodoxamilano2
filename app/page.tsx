'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { newsData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function BlogPage() {
  const [lang, setLang] = useState<Language>('ro');
  const t = translations[lang];
  const news = newsData[lang as keyof typeof newsData];

  return (
    <main className="bg-[#fdfcf9] min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-12 text-center">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-[#e6dfd1] hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/news-${item.id}/800/600`;
                  }}
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-[#5A5A40] uppercase tracking-wider mb-2 block">
                  {item.date}
                </span>
                <h2 className="font-serif text-xl font-bold mb-4 leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                <button className="text-[#5A5A40] font-bold text-sm hover:underline">
                  {t.readMore} →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer lang={lang} />
      <FloatingContact />
    </main>
  );
}
