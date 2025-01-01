import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Initialize language from localStorage or default to 'ENGLISH'
    const [currentLang, setCurrentLang] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang || 'ENGLISH';
    });

    // Update localStorage when language changes
    useEffect(() => {
        localStorage.setItem('language', currentLang);
    }, [currentLang]);

    const toggleLanguage = () => {
        setCurrentLang(prevLang => prevLang === 'ENGLISH' ? 'HI' : 'ENGLISH');
    };

    return (
        <LanguageContext.Provider value={{
            currentLang,
            setCurrentLang,
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
