'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  const navItems = [
    { name: t.home, href: '/' },
    { name: t.history, href: '/#istoric' },
    { name: t.location, href: '/#locatie' },
    { name: t.program, href: '/#program' },
    { name: t.projects, href: '/#proiecte' },
    { name: t.blog, href: '/blog' },
    { name: t.media, href: '/media' },
    { name: t.fivePerMille, href: '/#5permille' },
    { name: t.usefulLinks, href: '/#links' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={`hidden lg:block bg-[#5A5A40] text-white py-2 px-6 transition-all duration-300 ${scrolled ? 'opacity-0 -translate-y-full h-0' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-center">
            PAROHIA MILANO 2, Sfinții Mc. Nazarie, Ghervasie, Protasie și Chelsie (14 oct)
          </p>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <div className={`relative flex items-center justify-center overflow-hidden transition-all duration-300 ${scrolled ? 'w-12 h-12' : 'w-16 h-16'}`}>
              <Image 
                src="/images/logo.jpeg" 
                alt="Logo Parohia Milano 2" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif leading-tight font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#2c2c2c] text-lg' : 'text-white text-xl'}`}>
                Milano 2
              </span>
              {!scrolled && (
                <span className="text-[10px] text-white/70 uppercase tracking-widest font-medium hidden md:block">
                  Parohia Ortodoxă Română
                </span>
              )}
            </div>
          </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium hover:text-[#5A5A40] transition-colors relative group ${scrolled ? 'text-[#2c2c2c]' : 'text-white'}`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5A5A40] transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-gray-300 pl-4">
            <button 
              onClick={() => setLang('ro')}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === 'ro' ? 'bg-[#5A5A40] text-white' : scrolled ? 'text-gray-500 hover:text-[#5A5A40]' : 'text-white/70 hover:text-white'}`}
            >
              RO
            </button>
            <button 
              onClick={() => setLang('it')}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === 'it' ? 'bg-[#5A5A40] text-white' : scrolled ? 'text-gray-500 hover:text-[#5A5A40]' : 'text-white/70 hover:text-white'}`}
            >
              IT
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setLang('ro')}
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${lang === 'ro' ? 'bg-[#5A5A40] text-white' : scrolled ? 'text-gray-500' : 'text-white/70'}`}
            >
              RO
            </button>
            <button 
              onClick={() => setLang('it')}
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${lang === 'it' ? 'bg-[#5A5A40] text-white' : scrolled ? 'text-gray-500' : 'text-white/70'}`}
            >
              IT
            </button>
          </div>
          <button
            className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-gray-100 text-[#2c2c2c]' : 'hover:bg-white/10 text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <div className="pb-4 mb-4 border-b border-gray-100 flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image 
                    src="/images/logo.jpeg" 
                    alt="Logo Parohia Milano 2" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5A5A40] mb-1">Parohia Milano 2</p>
                  <p className="text-[9px] text-gray-500 uppercase leading-tight">Sfinții Mc. Nazarie, Ghervasie, Protasie și Chelsie</p>
                </div>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-serif font-medium hover:text-[#5A5A40] text-[#2c2c2c] flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="w-0 h-0.5 bg-[#5A5A40] transition-all group-hover:w-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
