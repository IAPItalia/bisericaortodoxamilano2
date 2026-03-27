'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { contactData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';

interface LocationProps {
  lang: Language;
}

export default function Location({ lang }: LocationProps) {
  const t = translations[lang];

  return (
    <section id="locatie" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#5A5A40] font-serif italic text-lg mb-2 block">{t.whereToFindUs}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
              <span className="sr-only">Biserica Românească la Milano - Locație și Contact</span>
              {t.location} & {t.contact}
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#f5f5f0] rounded-xl flex items-center justify-center text-[#5A5A40] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-1">{t.address}</h3>
                  <p className="text-gray-600">{contactData.address}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#f5f5f0] rounded-xl flex items-center justify-center text-[#5A5A40] flex-shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-1">{t.priest}</h3>
                  <p className="text-gray-600 font-medium">{contactData.priest.name}</p>
                  <p className="text-sm text-gray-500 italic">{contactData.priest.title[lang]}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Phone size={14} /> {contactData.priest.mobile}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Mail size={14} /> {contactData.priest.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#f5f5f0] rounded-xl flex items-center justify-center text-[#5A5A40] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-1">{t.parish} Email</h3>
                  <p className="text-gray-600">{contactData.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-[32px] overflow-hidden shadow-xl border border-[#e6dfd1]"
          >
            <iframe
              src="https://www.google.com/maps?q=Via+Giovanni+della+Casa+19,+Milano&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
            <div className="absolute bottom-4 right-4">
              <a 
                href={contactData.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-gray-50 transition-colors text-[#5A5A40]"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
