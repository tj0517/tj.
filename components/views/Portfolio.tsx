import React from 'react';
// Pamiętaj, aby zaktualizować interfejs Project w pliku types.ts o pola 'image' i 'link'
import { Project } from '../../types'; 
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'SEACLOUDS',
    category: 'GAS&OIL',
    year: '2024',
    // Przykładowe zdjęcie z Unsplash pasujące do tematyki
    image: '/seaclouds.png', 
    link: 'https://www.seaclouds.eu/',
    description: 'Minimalistyczna strona dla firmy z sektora GAS&OIL. Projekt skupia się na przedstawieniu wizji oraz wieloletniego doświadczenia marki.'
  },
  {
    id: '2',
    title: 'BLOXNAUTS',
    category: 'PRODUCENT GIER',
    year: '2023',
    // Przykładowe zdjęcie z Unsplash
    image: '/bloxnauts.png',
    link: 'https://bloxnauts.com/',
    description: 'Prosta witryna, zrealizowana z dostarczonego proejtku graficznego klienta, design skupiający się na animacjach i głębi tła, co wpasowuje się w klimat grupy docelowej.'
  },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="p-8 lg:p-16 border-b-2 border-black">
        <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">REALIZACJE</h2>
        <p className="text-xl">Wybrane projekty z ostatnich lat.</p>
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
                {/* Overlay przy hoverze (opcjonalny, lekko przyciemnia zdjęcie) */}
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