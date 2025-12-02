import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdzamy, czy użytkownik podjął już decyzję
    const consent = localStorage.getItem('cookie-consent');
    
    if (!consent) {
      // Jeśli nie ma decyzji, pokazujemy baner
      setIsVisible(true);
    } else if (consent === 'granted') {
      // Tutaj w przyszłości możesz włączyć Google Analytics
      // np. window.gtag('consent', 'update', { ... });
      console.log('Analityka włączona (Zgoda udzielona)');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'granted');
    setIsVisible(false);
    
    // Opcjonalnie: Przeładuj stronę, aby uruchomić skrypty analityczne
    // window.location.reload(); 
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'denied');
    setIsVisible(false);
    console.log('Analityka zablokowana (Zgoda odrzucona)');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black z-50 animate-in slide-in-from-bottom duration-500 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
             <ShieldCheck className="w-6 h-6" />
             <p className="font-bold font-display text-xl">TWOJA PRYWATNOŚĆ</p>
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
            Używamy plików cookies, aby analizować ruch na stronie i dostarczać lepsze doświadczenia (np. zapamiętywać język). 
            Możesz zaakceptować wszystkie pliki lub odrzucić te, które nie są niezbędne do działania strony.
            Szczegóły znajdziesz w <a href="/polityka-prywatnosci" className="underline hover:text-black font-bold">Polityce Prywatności</a>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <button 
            onClick={handleDecline}
            className="w-full sm:w-auto px-8 py-3 font-bold border-2 border-neutral-200 hover:border-black hover:bg-neutral-50 transition-colors uppercase tracking-wide text-sm"
          >
            Odrzuć
          </button>
          
          <button 
            onClick={handleAccept}
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 font-bold  hover:bg-neutral-800 transition-colors uppercase tracking-wide text-sm"
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
};