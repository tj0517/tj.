import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next'; // 1. Import hooków

// Jeśli masz typ Service w pliku types.ts, zaimportuj go. 
// Jeśli nie, tu jest szybka definicja lokalna dla TypeScript:
interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const Services: React.FC = () => {
  const { t } = useTranslation(); // 2. Inicjalizacja hooka

  // 3. Tablica usług jest teraz dynamiczna (reaguje na zmianę języka)
  const services: Service[] = [
    {
      id: 'design',
      title: t('services.items.design.title'),
      description: t('services.items.design.desc'),
      // returnObjects: true jest kluczowe, by pobrać tablicę stringów z JSON-a
      features: t('services.items.design.features', { returnObjects: true }) as string[]
    },
    {
      id: 'dev',
      title: t('services.items.dev.title'),
      description: t('services.items.dev.desc'),
      features: t('services.items.dev.features', { returnObjects: true }) as string[]
    },
    {
      id: 'growth',
      title: t('services.items.growth.title'),
      description: t('services.items.growth.desc'),
      features: t('services.items.growth.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="bg-white">
      {/* Nagłówek sekcji */}
      <div className="p-8 lg:p-16 border-b-2 border-black">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-8">
          {t('services.header.title')}<span className="text-[#0D79F2]">.</span>
        </h2>
        <p className="text-xl max-w-2xl font-medium">
          {t('services.header.subtitle')}
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
        <h3 className="font-display font-bold text-3xl mb-4">{t('services.budget.title')}</h3>
        <p className="text-xl">
          {/* 
            Używamy Trans, aby obsłużyć tag <0>...</0> z pliku tłumaczeń.
            Element w tablicy components pod indeksem 0 zastąpi <0> w tekście.
          */}
          <Trans 
            i18nKey="services.budget.desc" 
            components={[<span key="0" className="font-bold underline" />]} 
          />
          <br/>
          <span className="text-base text-neutral-500 mt-2 block">
            {t('services.budget.note')}
          </span>
        </p>
      </div>
    </div>
  );
};