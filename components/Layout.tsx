import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CookieBanner } from './cookies';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems: NavItem[] = [
  { label: 'HOME', path: 'home' },
  { label: 'OFERTA', path: 'offer' },
  { label: 'REALIZACJE', path: 'realizations' },
  { label: 'KONTAKT', path: 'contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] selection:bg-black selection:text-white overflow-x-crop">
    
      {/* Top Border */}
      <div className="fixed top-0 left-0 w-full h-2 bg-black z-50" />
      
      {/* Sidebar Borders (Desktop) */}
      <div className="fixed top-0 left-0 w-2 h-full bg-black z-40 hidden lg:block" />
      <div className="fixed top-0 right-0 w-2 h-full bg-black z-40 hidden lg:block" />

      {/* Navigation */}
      <nav className={`fixed top-2 left-0 lg:left-2 right-0 lg:right-2 z-40 transition-all duration-300 border-b-2 border-black bg-[#F5F5F5] ${scrolled ? 'py-0' : 'py-0'}`}>
        <div className="flex justify-between items-stretch h-16 lg:h-20">
          {/* Logo Section */}
          <div 
  className="flex items-center justify-center px-4 lg:px-8 border-r-2 border-black bg-black text-white hover:bg-neutral-800 transition-colors cursor-pointer min-w-[100px] lg:min-w-[140px]" 
  onClick={() => onNavigate('home')}
>
   <img 
     src="/logo_w.png" 
     alt="Logo" 
     className="h-6 md:h-8 w-auto object-contain " 
   />
</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-end">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-8 h-full flex items-center justify-center border-l-2 border-black font-medium tracking-wide transition-all hover:bg-black hover:text-white ${activePage === item.path ? 'bg-black text-white' : 'text-black'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden px-6 flex items-center justify-center border-l-2 border-black bg-white active:bg-black active:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F5F5F5] pt-24 px-4 pb-8 lg:hidden flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                onNavigate(item.path);
                setIsMenuOpen(false);
              }}
              className="py-6 border-b-2 border-black text-4xl font-display font-bold text-left hover:pl-4 transition-all"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-auto">
             <p className="text-sm font-bold opacity-50 mb-2">CONTACT</p>
             <p className="text-xl">tjezionek2000@gmail.com</p>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 mt-[52px] lg:mt-[68px] w-full max-w-[1920px] mx-auto lg:px-2 relative">
        <div className="min-h-[calc(100vh-88px)] border-x-0 lg:border-x-0 border-black/0">
           {children}
        </div>
      </main>

      {/* Footer */}
<footer className="border-t-2 border-black bg-white lg:mx-2  border-b-2 border-x-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
          {/* Kolumna 1: Logo i Prawa autorskie */}
<div className="p-8 h-64 flex flex-col justify-between items-start">
  <img 
    src="/SYGNET.png" 
    alt="Sygnet" 
    className="h-10 w-auto object-contain" 
  />
  <p className="text-sm">© 2025 Tymon Jezionek.<br/>Wszelkie prawa zastrzeżone.</p>
</div>
          
          {/* Kolumna 2: CTA (Wezwanie do działania) */}
          <div className="p-8 h-64 flex flex-col justify-between hover:bg-black hover:text-white transition-colors group cursor-pointer" onClick={() => onNavigate('contact')}>
            <span className="font-bold text-sm">ROZPOCZNIJ PROJEKT</span>
            <ArrowRight className="w-12 h-12 transform group-hover:-rotate-45 transition-transform" />
          </div>

          {/* Kolumna 3: Social Media (Tylko IG) */}
          <div className="p-8 h-64 flex flex-col justify-start space-y-4">
            <span className="font-bold text-sm opacity-50">SOCIAL MEDIA</span>
            <a href="https://www.instagram.com/tj.webistes/" target="_blank" className="text-lg hover:underline">Instagram</a>
          </div>

          {/* Kolumna 4: Lokalizacja */}
          <div className="p-8 h-64 flex flex-col justify-start space-y-4">
            <span className="font-bold text-sm opacity-50">LOKALIZACJA</span>
            <p className="text-lg">Gdańsk, Polska</p>
            <p className="text-lg">Zdalnie (Globalnie)</p>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
};