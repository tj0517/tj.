import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/views/Home';
import { Services } from './components/views/Services';
import { Portfolio } from './components/views/Portfolio';
import { Blog } from './components/views/Blog';
import { Contact } from './components/views/Contact';
import './i18n'; 

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    // 1. Przewijanie do góry (Twoja istniejąca logika)
    window.scrollTo(0, 0);

    // 2. Tłumaczenie Twoich nazw stanów na "ładne" ścieżki dla GA
    // Dzięki temu w raportach zobaczysz "/oferta" zamiast dziwnych nazw
    const pathMapping: Record<string, string> = {
      home: '/',
      offer: '/oferta',
      realizations: '/realizacje', // lub '/portfolio'
      blog: '/blog',
      contact: '/kontakt'
    };

    // Pobierz ścieżkę (jeśli nie ma w mapie, użyj nazwy stanu)
    const virtualPath = pathMapping[activePage] || `/${activePage}`;

    // 3. Wysłanie zdarzenia do GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: virtualPath,
        page_title: activePage.charAt(0).toUpperCase() + activePage.slice(1) // Np. "Offer"
      });
    }

  }, [activePage]); // Uruchamia się przy każdej zmianie activePage

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'offer':
        return <Services />;
      case 'realizations':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderContent()}
    </Layout>
  );
};

export default App;