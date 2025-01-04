import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang || 'ENGLISH';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        // Cycle through languages: ENGLISH -> HI -> AR -> ENGLISH
        if (language === 'ENGLISH') {
            setLanguage('HI');
        } else if (language === 'HI') {
            setLanguage('AR');
        } else {
            setLanguage('ENGLISH');
        }
    };

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage, // Make sure setLanguage is included here
            toggleLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
