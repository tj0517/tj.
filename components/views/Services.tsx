import React from 'react';
import { Check } from 'lucide-react';
import { Service } from '../../types';

const services: Service[] = [
  {
    id: 'design',
    title: 'UI/UX DESIGN',
    description: 'Przekładamy wartości Twojej marki na język wizualny. Każda dedykowana strona internetowa, którą tworzymy, łączy minimalistyczną estetykę z maksymalną użytecznością.',
    features: ['Unikalna Identyfikacja Wizualna', 'Makiety i Prototypowanie', 'Responsywność (RWD)', 'Dostępność (Accessibility)']
  },
  {
    id: 'dev',
    title: 'DEVELOPMENT',
    description: 'Oferujemy zaawansowane projektowanie aplikacji internetowych. Solidny kod, nowoczesny stack (React, Next.js) i architektura nastawiona na szybkość oraz skalowalność.',
    features: ['Aplikacje SPA / PWA', 'Integracje z CMS', 'Customowe Animacje', 'Rozwój API']
  },
  {
    id: 'growth',
    title: 'GROWTH & SEO',
    description: 'Nawet najpiękniejsza strona jest bezużyteczna, jeśli nikt jej nie widzi. Przeprowadzamy audyt SEO online i wdrażamy strategię, by Google pokochało Twój serwis.',
    features: ['Techniczny Audyt SEO', 'Optymalizacja Słów Kluczowych', 'Poprawa Wydajności (Core Vitals)', 'Konfiguracja Analityki']
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Nagłówek sekcji */}
      <div className="p-8 lg:p-16 border-b-2 border-black">
        <h2 className="font-display font-black text-6xl md:text-8xl mb-8">OFERTA</h2>
        <p className="text-xl max-w-2xl font-medium">
          Kompleksowe rozwiązania cyfrowe. Nie tworzymy tylko witryn; budujemy narzędzia biznesowe zaprojektowane tak, by generować leady i budować autorytet Twojej marki.
        </p>
      </div>

      {/* Siatka usług */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black border-b-2 border-black">
        {services.map((service, index) => (
          <div key={service.id} className="p-8 lg:p-12 flex flex-col h-full hover:bg-neutral-50 transition-colors">
            <span className="text-xs font-bold border border-black rounded-full w-8 h-8 flex items-center justify-center mb-8">
              0{index + 1}
            </span>
            <h3 className="font-display font-bold text-4xl mb-6">{service.title}</h3>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <ul className="mt-auto space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-medium">
                  <span className="bg-black text-white p-0.5"><Check size={12} /></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sekcja budżetowa */}
      <div className="p-8 lg:p-16 bg-[#F5F5F5] border-b-2 border-black text-center">
        <h3 className="font-display font-bold text-3xl mb-4">BUDŻET</h3>
        <p className="text-xl">
          Typowy budżet projektu waha się od <span className="font-bold underline">5,000 PLN do 7,000 PLN</span> w zależności od stopnia skomplikowania.
          <br/>
          <span className="text-base text-neutral-500 mt-2 block">(Każdy projekt wyceniamy indywidualnie.)</span>
        </p>
      </div>
    </div>
  );
};