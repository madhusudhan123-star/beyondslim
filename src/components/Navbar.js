import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import data from '../utils/data';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const isHomePage = location.pathname === '/';

    // Get navigation links from data
    const navLinks = data[language].navbar.links;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const getNavbarBackground = () => {
        if (isHomePage) {
            return isScrolled ? 'bg-blue-300' : 'bg-transparent';
        }
        return 'bg-blue-300'; // Default background for other pages
    };

    const getLinkTextColor = () => {
        if (isHomePage) {
            return isScrolled ? 'text-gray-900' : 'text-white';
        }
        return 'text-gray-900'; // Default text color for other pages
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()} shadow-lg`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={data[language].footer.logo}
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-base font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-blue-600'
                                    : `${getLinkTextColor()} hover:text-blue-600`
                                    }`}
                            >
                                {link.title}
                            </Link>
                        ))}

                        {/* Language Selector - Desktop */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className={`flex items-center space-x-1 ${getLinkTextColor()}`}
                            >
                                <span>{language === 'ENGLISH' ? 'EN' : 'HI'}</span>
                                <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1">
                                    <button
                                        onClick={() => {
                                            toggleLanguage();
                                            setDropdownOpen(false);
                                        }}
                                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {language === 'ENGLISH' ? 'हिंदी' : 'English'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${getLinkTextColor()} hover:opacity-75`}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            {link.title}
                        </Link>
                    ))}

                    {/* Language Selector - Mobile */}
                    <button
                        onClick={toggleLanguage}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                        {language === 'ENGLISH' ? 'Switch to हिंदी' : 'Switch to English'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;