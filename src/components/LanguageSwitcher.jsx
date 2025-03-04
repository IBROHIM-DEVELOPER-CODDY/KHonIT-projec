import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");
  
  const changeLanguage = (lng, langText) => {
    setIsOpen(false); // Modal yopiladi
    setSelectedLang(langText);
    setIsLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(lng);
      setIsLoading(false);
    }, 2000); // 2 soniya kutish
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-white text-xl md:text-3xl font-bold flex flex-col items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-16 h-16 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              >
                <motion.div className="w-12 h-12 border-4 border-t-transparent border-b-transparent border-white rounded-full"></motion.div>
              </motion.div>
              ⏳ {selectedLang}...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(true)} 
        className="flex items-center gap-2 px-4 py-2 
                   bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                   rounded-lg shadow-lg transition-all transform hover:scale-105 
                   active:scale-95 w-full sm:w-auto"
      >
        🌍 Language
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <motion.div 
            className="bg-gray-900 text-white border border-gray-700 
                        rounded-lg shadow-xl p-6 w-full max-w-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-center text-lg font-semibold mb-4">🌎 Select Language</h2>
            
            <button 
              onClick={() => changeLanguage("uz", "Til o'zgarmoqda")}
              className="flex items-center gap-2 block w-full px-4 py-2 text-left hover:bg-indigo-500 
                         hover:bg-opacity-80 transition-all rounded-md"
            >
              <img src="https://flagcdn.com/w40/uz.png" alt="Uzbek" className="w-6 h-4" />
              O'zbek
            </button>
            <button 
              onClick={() => changeLanguage("en", "Changing Language")}
              className="flex items-center gap-2 block w-full px-4 py-2 text-left hover:bg-indigo-500 
                         hover:bg-opacity-80 transition-all rounded-md"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4" />
              English
            </button>
            <button 
              onClick={() => changeLanguage("ru", "Изменение языка")}
              className="flex items-center gap-2 block w-full px-4 py-2 text-left hover:bg-indigo-500 
                         hover:bg-opacity-80 transition-all rounded-md"
            >
              <img src="https://flagcdn.com/w40/ru.png" alt="Russian" className="w-6 h-4" />
              Русский
            </button>

            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full px-4 py-2 bg-red-600 text-white 
                         rounded-md hover:bg-red-700 transition-all"
            >
              ❌ Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default LanguageSwitcher;