'use client';

import { motion } from 'motion/react';
import Slider from './Slider';
import { translations, Language } from '@/lib/translations';
import { contactData } from '@/lib/data';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Slider />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mb-8">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 border-b border-white/20 pb-2"
            >
              Patriarhia Română / Patriarcato Romeno
            </motion.span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl text-white font-bold leading-[0.9] mb-8 tracking-tighter">
              <span className="sr-only">Biserica Românească la Milano - Parohia Ortodoxă Română Milano 2</span>
              {contactData.name[lang].split(' - ')[0]}
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-light italic text-white/80 tracking-normal">
                {contactData.name[lang].split(' - ')[1]}
              </span>
            </h1>
          </div>
          
          <p className="text-white/90 text-lg md:text-xl font-light max-w-3xl mx-auto mb-12 leading-relaxed italic font-serif">
            {lang === 'ro' 
              ? "„Unde sunt doi sau trei adunați în numele Meu, acolo sunt și Eu în mijlocul lor.”"
              : "„Dove due o tre sono riuniti nel mio nome, lì sono io in mezzo a loro.”"}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#program"
              className="group relative px-10 py-4 bg-[#5A5A40] text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(90,90,64,0.4)] w-full sm:w-auto"
            >
              <span className="relative z-10">{t.program}</span>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#locatie"
              className="px-10 py-4 bg-white/5 backdrop-blur-lg text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              {t.whereToFindUs}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
