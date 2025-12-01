import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/views/Home';
import { Services } from './components/views/Services';
import { Portfolio } from './components/views/Portfolio';
import { Blog } from './components/views/Blog';
import { Contact } from './components/views/Contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  // Simple scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

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