'use client';

import { Facebook, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { contactData } from '@/lib/data';
import { Language, translations } from '@/lib/translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="bg-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="Logo Parohia Milano 2" 
                  fill 
                  className="object-contain brightness-110"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                Parohia Milano 2
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5A5A40] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5A5A40] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">{t.usefulLinks}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/#istoric" className="hover:text-white transition-colors">{t.history}</Link></li>
              <li><Link href="/#program" className="hover:text-white transition-colors">{t.program}</Link></li>
              <li><Link href="/#activitati" className="hover:text-white transition-colors">{t.activities}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">{t.contact}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#5A5A40] shrink-0" size={18} />
                <span>{contactData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#5A5A40] shrink-0" size={18} />
                <span>{contactData.priest.mobile}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#5A5A40] shrink-0" size={18} />
                <span>{contactData.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Parohia Milano 2. All rights reserved.</p>
          
          {/* Hidden SEO Keywords for search engines */}
          <div className="sr-only">
            <h2>Biserica Românească la Milano</h2>
            <p>Căutați o biserică ortodoxă română la Milano? Parohia Milano 2 (Sf. Parascheva) vă întâmpină cu sfinte slujbe, comunitate și tradiții românești în Italia.</p>
            <ul>
              <li>biserica romaneasca milano</li>
              <li>biserica ortodoxa romana milano</li>
              <li>ortodoxie milano</li>
              <li>comunitate romani milano</li>
              <li>slujbe ortodoxe milano</li>
              <li>preot roman milano</li>
              <li>parohia sfintii mucenici nazarie ghervasie protasie si chelsie si sfanta parascheva</li>
            </ul>
          </div>

          <p className="flex items-center gap-1">
            Site creat de <a href="https://vedendo.studio" target="_blank" rel="noopener noreferrer" className="text-[#5A5A40] hover:underline">Vedendo.studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
