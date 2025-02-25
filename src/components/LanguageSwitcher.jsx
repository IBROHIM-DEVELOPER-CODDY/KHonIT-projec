import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Til tanlanganda modal yopiladi
  };

  return (
    <>
      {/* Language Button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="flex items-center gap-2 px-4 py-2 
                   bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                   rounded-lg shadow-lg transition-all transform hover:scale-105 
                   active:scale-95"
      >
        🌍 Language
      </button>

      {/* Modal Background */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Modal Box - Ekran o‘rtasida turadi */}
          <div className="bg-gray-900 text-white border border-gray-700 
                          rounded-lg shadow-xl p-6 w-80 animate-fade-in">
            <h2 className="text-center text-lg font-semibold mb-4">🌎 Select Language</h2>
            
            <button 
              onClick={() => changeLanguage("uz")} 
              className="flex items-center gap-2 block w-full px-4 py-2 text-left hover:bg-indigo-500 
                         hover:bg-opacity-80 transition-all rounded-md"
            >
              <img src="https://flagcdn.com/w40/uz.png" alt="Uzbek" className="w-6 h-4" />
              O'zbek
            </button>
            <button 
              onClick={() => changeLanguage("en")} 
              className="flex items-center gap-2 block w-full px-4 py-2 text-left hover:bg-indigo-500 
                         hover:bg-opacity-80 transition-all rounded-md"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4" />
              English
            </button>
            <button 
              onClick={() => changeLanguage("ru")} 
              className="flex items-center gap-2 block w-full px-4 py-2 text-left hover:bg-indigo-500 
                         hover:bg-opacity-80 transition-all rounded-md"
            >
              <img src="https://flagcdn.com/w40/ru.png" alt="Russian" className="w-6 h-4" />
              Русский
            </button>

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full px-4 py-2 bg-red-600 text-white 
                         rounded-md hover:bg-red-700 transition-all"
            >
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageSwitcher;