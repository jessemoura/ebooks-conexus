import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../i18n/translations';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state with localStorage persistence (default 'light')
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('conexus_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  // Language state with localStorage persistence (default 'pt')
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('conexus_lang');
    return (saved === 'pt' || saved === 'en' || saved === 'es') ? saved : 'pt';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('conexus_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('conexus_lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en' : 'es');
  };

  const t = translations[language];

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
