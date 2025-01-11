// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // react-i18next uchun bog'lash
  .init({
    resources: {
      en: {
        translation: {
          Aboutme: "About me",
        },
      },
      uz: {
        translation: {
          Aboutme: "Men haqimda",
        },
      },
    },
    lng: 'en', // boshlang'ich til
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // XSS himoya
    },
  });

export default i18n;
