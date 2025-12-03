import React from 'react';
import { Project } from '../../types'; // Upewnij się co do ścieżki
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <--- IMPORT

export const Portfolio: React.FC = () => {
  const { t } = useTranslation(); // <--- HOOK

  // Tablica z projektami wewnątrz komponentu
  const projects: Project[] = [
    {
      id: '1',
      title: 'SEACLOUDS',
      category: t('portfolio.items.p1.category'), // Pobieramy tłumaczenie
      year: '2025',
      image: '/seaclouds.png', 
      link: 'https://www.seaclouds.eu/',
      description: t('portfolio.items.p1.desc')
    },
    {
      id: '2',
      title: 'BLOXNAUTS',
      category: t('portfolio.items.p2.category'),
      year: '2025',
      image: '/bloxnauts.png',
      link: 'https://bloxnauts.com/',
      description: t('portfolio.items.p2.desc')
    },
    {
      id: '3',
      title: 'Fight Gym',
      category: t('portfolio.items.p3.category'),
      year: '2025',
      image: '/fight_gym.png', 
      link: 'https://fight-gym.vercel.app/',
      description: t('portfolio.items.p3.desc'),
    },
    {
      id: '4',
      title: 'Azure Gym',
      category: t('portfolio.items.p4.category'),
      year: '2024',
      image: '/azure.png',
      link: 'https://gym-azure-nine.vercel.app/',
      description: t('portfolio.items.p4.desc'),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="p-8 lg:p-16 border-b-2 border-black">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">
            {t('portfolio.header.title')}<span className="text-[#0D79F2]">.</span>
        </h2>
        <p className="text-xl">{t('portfolio.header.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black border-b-2 border-black">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-[600px] flex flex-col justify-between p-8 hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            {/* Sekcja zdjęcia */}
            <div className="w-full h-[300px] mb-8 overflow-hidden border-2 border-black relative">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Treść pod zdjęciem */}
            <div className="flex flex-col gap-2 z-10">
              <div className="flex justify-between items-start">
                 <h3 className="font-display font-bold text-4xl">{project.title}</h3>
                 <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="flex justify-between items-center text-sm font-bold border-t border-black pt-4 mt-2">
                <span>{project.category.toUpperCase()}</span>
                <span>{project.year}</span>
              </div>
              <p className="mt-4 text-neutral-600 max-w-md">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};