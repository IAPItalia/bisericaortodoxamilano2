'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import History from '@/components/History';
import Location from '@/components/Location';
import Program from '@/components/Program';
import Activities from '@/components/Activities';
import Projects from '@/components/Projects';
import FivePerMille from '@/components/FivePerMille';
import UsefulLinks from '@/components/UsefulLinks';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import { Language } from '@/lib/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('ro');

  return (
    <main className="relative bg-[#fdfcf9]">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <History lang={lang} />
      <Location lang={lang} />
      <Program lang={lang} />
      <Activities lang={lang} />
      <Projects lang={lang} />
      <FivePerMille lang={lang} />
      <UsefulLinks lang={lang} />
      <Footer lang={lang} />
      <FloatingContact />

      {/* Comprehensive SEO Hidden Section */}
      <div className="sr-only" aria-hidden="true">
        <h2>Biserica Românească la Milano - Parohia Ortodoxă Română Milano 2</h2>
        <p>
          Sunteți în căutarea unei biserici românești la Milano? Parohia Ortodoxă Română Milano 2, cu hramul Sfinții Mucenici Nazarie, Ghervasie, Protasie și Chelsie, Sfânta Parascheva, vă așteaptă cu drag. 
          Suntem o comunitate ortodoxă unită în inima Italiei, oferind sprijin spiritual și păstrarea tradițiilor noastre strămoșești.
        </p>
        <p>
          Cuvinte cheie relevante: biserica romaneasca la milano, biserica ortodoxa romana la Milano, parohia milano 2, ortodoxie milano, comunitate romaneasca italia, 
          sfintii mucenici nazarie milano, sfanta parascheva milano, pr stefan catalin andronache, program slujbe milano, biserica ortodoxa milano, slujbe in limba romana milano, 
          biserica ortodoxa romana in italia, pelerinaje ortodoxe milano, traditii romanesti milano.
        </p>
        <p>
          Adresa noastră este Via Giovanni della Casa 19, 20151 Milano (MI), Italia. Vă invităm să participați la Sfânta Liturghie în fiecare duminică și la sărbătorile de peste an.
        </p>
      </div>
    </main>
  );
}
