import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import data from '../utils/data';
import languages from '../utils/languages';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { currentLang, setCurrentLang } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLanguageChange = (e) => {
        setCurrentLang(e.target.value);
    };

    return (
        <nav className="bg-blue-600 shadow-lg navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img className="h-10 w-auto" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex text-xl items-center space-x-4">
                            {data[currentLang].navbar.links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <select
                            value={currentLang}
                            onChange={handleLanguageChange}
                            className="ml-4 border rounded-md py-1 px-2 text-lg"
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {data[currentLang].navbar.links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;