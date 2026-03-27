'use client';

import { motion } from 'motion/react';
import { ExternalLink, BookOpen, Facebook, Heart, Globe, Calendar } from 'lucide-react';
import { usefulLinksData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';

interface UsefulLinksProps {
  lang: Language;
}

const getIcon = (name: string) => {
  if (name.toLowerCase().includes('sfinții')) return <Calendar size={20} />;
  if (name.toLowerCase().includes('rugăciune')) return <BookOpen size={20} />;
  if (name.toLowerCase().includes('facebook')) return <Facebook size={20} />;
  if (name.toLowerCase().includes('cuvinte')) return <Heart size={20} />;
  return <Globe size={20} />;
};

export default function UsefulLinks({ lang }: UsefulLinksProps) {
  const t = translations[lang];

  return (
    <section id="links" className="py-24 px-6 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#5A5A40] font-serif italic text-lg mb-2 block">{lang === 'ro' ? 'Resurse Spirituale' : 'Risorse Spirituali'}</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">{t.usefulLinks}</h2>
          <div className="w-24 h-1 bg-[#5A5A40] mx-auto rounded-full opacity-20" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usefulLinksData.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-[32px] border border-[#e6dfd1] shadow-sm hover:shadow-xl hover:border-[#5A5A40] transition-all flex items-center gap-6"
            >
              <div className="w-14 h-14 bg-[#fdfcf9] rounded-2xl flex items-center justify-center text-[#5A5A40] group-hover:bg-[#5A5A40] group-hover:text-white transition-all duration-300 shadow-inner">
                {getIcon(link.name)}
              </div>
              <div className="flex-1">
                <span className="font-serif text-lg font-bold text-gray-800 group-hover:text-[#5A5A40] transition-colors block mb-1">
                  {link.name}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium flex items-center gap-1">
                  {lang === 'ro' ? 'Vizitează' : 'Visita'} <ExternalLink size={10} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
