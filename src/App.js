import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import data from './utils/data';
import { LanguageProvider } from './context/LanguageContext';
import Product from './pages/Product';

function App() {
  const getValidLanguage = (lang) => {
    const upperLang = lang?.toUpperCase();
    return data[upperLang] ? upperLang : 'ENGLISH';
  };

  // Initialize language from localStorage or default to 'ENGLISH'
  const [currentLang, setCurrentLang] = useState(() => {
    const storedLang = localStorage.getItem('preferredLanguage');
    return getValidLanguage(storedLang || 'ENGLISH');
  });

  // Custom language setter that also updates localStorage
  const handleLanguageChange = (langCode) => {
    const validLang = getValidLanguage(langCode);
    setCurrentLang(validLang);
    localStorage.setItem('preferredLanguage', validLang);
    // Force page reload after language change
    window.location.reload();
  };
  return (
    <div className='overflow-x-hidden'>
      <LanguageProvider>
        <BrowserRouter>
          <Navbar currentLang={currentLang}
            onLanguageChange={handleLanguageChange} />
          <Routes>
            <Route path="/" element={<Home currentLang={currentLang} />} />
            <Route path="/products" element={<Product currentLang={currentLang} />} />
            <Route path="/contact" element={<Contact currentLang={currentLang} />} />
            <Route path="/checkout" element={<Checkout currentLang={currentLang} />} />
          </Routes>
          <Footer currentLang={currentLang} />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;