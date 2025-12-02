import React from 'react';
import { ArrowDownRight, Globe, Layers, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService', // Idealne dla freelancera/agencji
    name: 'Tymon Jezionek - Dedykowane Strony WWW',
    url: 'https://tymonjezionek.pl', // Podmień na swój adres
    image: 'https://tymonjezionek.pl/logo.png', // Link do Twojego logo/zdjęcia
    description: 'Specjalista od projektowania aplikacji internetowych. Oferuję darmowy audyt SEO oraz tworzenie dedykowanych stron internetowych nastawionych na sprzedaż.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gdańsk',
      addressCountry: 'PL'
    },
    // Wskazanie widełek cenowych pomaga w pozycjonowaniu na frazy typu "cena"
    priceRange: '$$', 
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: '09:00',
      closes: '17:00'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi Programistyczne i SEO',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Projektowanie aplikacji internetowych'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dedykowana strona internetowa'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audyt SEO Online'
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 lg:px-12 py-12 border-b-2 border-black relative overflow-hidden bg-white">
        <div className="absolute top-4 right-4 lg:top-12 lg:right-12 border-2 border-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
         Otwarty na oferty
        </div>
        
       <h1 className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[0.9] mb-12">
  TWOJA <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black/80">DEDYKOWANA</span> <br />
  STRONA WWW<span className="text-[#0D79F2]">.</span>
</h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="max-w-md text-lg md:text-xl font-medium leading-relaxed">
            Eksperckie projektowanie aplikacji internetowych dla liderów rynku.
    Odrzucam szablony. Wykonuje audyt SEO online, by Twoja
    cyfrowa obecność była nie tylko piękna, ale i skuteczna.
          </p>
          
          <button 
            onClick={() => onNavigate('contact')}
            className="group flex items-center gap-4 text-xl font-bold border-b-2 border-black pb-1 hover:pl-4 transition-all"
          >
            DARMOWA KONSULTACJA <ArrowDownRight className="group-hover:rotate-0 -rotate-90 transition-transform" />
          </button>
        </div>
      </section>

      {/* Philosophy / Statement Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black border-b-2 border-black">
<div className="p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-100 transition-colors">
          <Globe className="w-12 h-12" strokeWidth={1.5} />
          <div>
            <h3 className="font-display font-bold text-3xl mb-4">ZERO SZABLONÓW</h3>
            <p className="text-neutral-600">Twój biznes jest unikatowy, więc Twoja witryna też musi taka być. Każda <strong>dedykowana strona internetowa</strong> powstaje u nas od czystej kartki, bez gotowych motywów.</p>
          </div>
        </div>
        <div className="p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-100 transition-colors">
          <Layers className="w-12 h-12" strokeWidth={1.5} />
          <div>
            <h3 className="font-display font-bold text-3xl mb-4">SZYTE NA MIARĘ</h3>
            <p className="text-neutral-600">Oferujemy zaawansowane <strong>projektowanie aplikacji internetowych</strong>, dobierając architekturę i technologie idealnie pod specyfikę Twoich procesów biznesowych.</p>
          </div>
        </div>
        <div className="p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-100 transition-colors">
          <Zap className="w-12 h-12" strokeWidth={1.5} />
          <div>
            <h3 className="font-display font-bold text-3xl mb-4">SEO & DESIGN</h3>
            <p className="text-neutral-600">Łączymy estetykę z wydajnością. Wykonujemy <strong>audyt SEO online</strong> już na etapie planowania, by design realnie wspierał widoczność Twojej marki w branży.</p>
          </div>
        </div>
      </section>

      {/* Marquee-ish Text */}
      <section className="py-24 bg-black text-white overflow-hidden border-b-2 border-black">
        <div className="w-full text-center">
             <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
  OD KONCEPCJI PO WDROŻENIE<span className="text-[#0D79F2]">.</span>
</h2>
        </div>
      </section>
    </div>
  );
};