// src/components/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className={`
        font-bold hover:bg-black hover:text-white transition-colors flex items-center justify-center
        ${mobile ? 'text-xl py-4 border-b-2 border-black w-full text-left justify-start' : 'px-6 h-full border-l-2 border-black'}
      `}
    >
      {i18n.language === 'pl' ? 'EN' : 'PL'}
    </button>
  );
};