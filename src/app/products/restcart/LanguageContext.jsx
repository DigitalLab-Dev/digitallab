'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  // Auto-detect browser language on first visit, respect saved preference
  useEffect(() => {
    const saved = localStorage.getItem('restcart-lang');
    if (saved === 'es' || saved === 'en') {
      setLangState(saved);
    } else {
      // Auto-detect: prefer Spanish if browser is set to es-*
      const browserLang = navigator.language?.toLowerCase() ?? '';
      if (browserLang.startsWith('es')) {
        setLangState('es');
        localStorage.setItem('restcart-lang', 'es');
      }
    }
  }, []);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('restcart-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
