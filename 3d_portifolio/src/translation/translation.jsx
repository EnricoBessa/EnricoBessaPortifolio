// src/translation.jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      about: "About us",
      home: "Home",
      projects: "Projects",
      contact: "Contact"
    },
  },
  pt: {
    translation: {
      welcome: "Bem-vindo",
      about: "Sobre nós",
      home: "Início",
      projects: "Projetos",
      contact: "Contato"
    },
  },
};

i18n 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 
