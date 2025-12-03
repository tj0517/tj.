import React from 'react';
import { ArrowDownRight, Globe, Layers, Zap } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next'; // 1. Importy biblioteki

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useTranslation(); // 2. Inicjalizacja hooka

  // JSON-LD zazwyczaj zostawia się w języku głównym biznesu lub generuje dynamicznie.
  // Tutaj zostawiamy statycznie, ponieważ roboty Google najlepiej radzą sobie ze statycznym JSON-LD.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Tymon Jezionek - Dedykowane Strony WWW',
    url: 'https://tymonjezionek.pl',
    image: 'https://tymonjezionek.pl/logo.png',
    description: 'Specjalista od projektowania aplikacji internetowych. Oferuję darmowy audyt SEO oraz tworzenie dedykowanych stron internetowych nastawionych na sprzedaż.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gdańsk',
      addressCountry: 'PL'
    },
    priceRange: '$$', 
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: '09:00',
      closes: '17:00'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi Programistyczne i SEO',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Projektowanie aplikacji internetowych' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dedykowana strona internetowa' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audyt SEO Online' } }
      ]
    }
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 lg:px-12 py-12 border-b-2 border-black relative overflow-hidden bg-white">
        <div className="absolute top-4 right-4 lg:top-12 lg:right-12 border-2 border-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
         {t('hero.badge')}
        </div>
        
       <h1 className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[0.9] mb-12">
          {t('hero.title_1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black/80">
            {t('hero.title_2')}
          </span> <br />
          {t('hero.title_3')}<span className="text-[#0D79F2]">.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="max-w-md text-lg md:text-xl font-medium leading-relaxed">
            {t('hero.desc')}
          </p>
          
          <button 
            onClick={() => onNavigate('contact')}
            className="group flex items-center gap-4 text-xl font-bold border-b-2 border-black pb-1 hover:pl-4 transition-all"
          >
            {t('hero.cta')} <ArrowDownRight className="group-hover:rotate-0 -rotate-90 transition-transform" />
          </button>
        </div>
      </section>

      {/* Philosophy / Statement Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black border-b-2 border-black">
        {/* KARTA 1 */}
        <div className="p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-100 transition-colors">
          <Globe className="w-12 h-12" strokeWidth={1.5} />
          <div>
            <h3 className="font-display font-bold text-3xl mb-4">{t('features.zero.title')}</h3>
            <p className="text-neutral-600">
              {/* Użycie Trans do obsługi tagu <0>...</0> z pliku tłumaczeń jako <strong> */}
              <Trans 
                i18nKey="features.zero.desc" 
                components={[<strong key="0" />]} 
              />
            </p>
          </div>
        </div>

        {/* KARTA 2 */}
        <div className="p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-100 transition-colors">
          <Layers className="w-12 h-12" strokeWidth={1.5} />
          <div>
            <h3 className="font-display font-bold text-3xl mb-4">{t('features.tailor.title')}</h3>
            <p className="text-neutral-600">
              <Trans 
                i18nKey="features.tailor.desc" 
                components={[<strong key="0" />]} 
              />
            </p>
          </div>
        </div>

        {/* KARTA 3 */}
        <div className="p-12 min-h-[400px] flex flex-col justify-between hover:bg-neutral-100 transition-colors">
          <Zap className="w-12 h-12" strokeWidth={1.5} />
          <div>
            <h3 className="font-display font-bold text-3xl mb-4">{t('features.seo.title')}</h3>
            <p className="text-neutral-600">
              <Trans 
                i18nKey="features.seo.desc" 
                components={[<strong key="0" />]} 
              />
            </p>
          </div>
        </div>
      </section>

      {/* Marquee-ish Text */}
      <section className="py-24 bg-black text-white overflow-hidden border-b-2 border-black">
        <div className="w-full text-center">
             <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
                {t('marquee')}<span className="text-[#0D79F2]">.</span>
            </h2>
        </div>
      </section>
    </div>
  );
};