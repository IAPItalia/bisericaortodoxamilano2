'use client';

import { motion } from 'motion/react';
import { fivePerMilleData } from '@/lib/data';
import { Info } from 'lucide-react';
import { Language, translations } from '@/lib/translations';

interface FivePerMilleProps {
  lang: Language;
}

export default function FivePerMille({ lang }: FivePerMilleProps) {
  const t = translations[lang];
  const data = fivePerMilleData[lang];

  return (
    <section id="5permille" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fdfcf9] border-2 border-[#e6dfd1] p-8 md:p-12 rounded-[48px] shadow-sm"
        >
          <div className="w-16 h-16 bg-[#5A5A40] text-white rounded-full flex items-center justify-center mx-auto mb-8">
            <Info size={32} />
          </div>
          <h2 className="font-serif text-4xl font-bold mb-6">
            <span className="sr-only">Donații 5 la mie Biserica Românească Milano - </span>
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            {data.info}
          </p>

          <div className="text-left border-t border-[#e6dfd1] pt-12 mt-12">
            <h3 className="font-serif text-2xl font-bold mb-6 text-[#5A5A40]">
              {data.association.name}
            </h3>
            <p className="text-gray-700 mb-4 font-medium">
              {data.association.description}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed italic">
              {data.association.usage}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-[#e6dfd1]">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{lang === 'ro' ? 'Responsabil' : 'Responsabile'}</p>
                <p className="font-serif text-lg font-semibold">{data.association.responsible}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{lang === 'ro' ? 'Mobil' : 'Cellulare'}</p>
                <p className="font-medium">{data.association.mobile}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Email</p>
                <div className="flex flex-wrap gap-x-4">
                  {data.association.emails.map(email => (
                    <p key={email} className="font-medium text-[#5A5A40]">{email}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href={data.association.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#5A5A40] text-white rounded-full font-medium hover:bg-[#4a4a35] transition-colors"
              >
                {lang === 'ro' ? 'Află mai multe' : 'Scopri di più'}
              </a>
            </div>
          </div>
          
          <p className="mt-16 text-xs text-gray-400 italic">
            {lang === 'ro' 
              ? "Vă mulțumim pentru susținerea activităților noastre spirituale și sociale!"
              : "Vi ringraziamo per il sostegno alle nostre attività spirituali e sociali!"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
