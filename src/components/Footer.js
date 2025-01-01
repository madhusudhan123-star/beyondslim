import React from 'react';
import data from '../utils/data';
import { useLanguage } from '../context/LanguageContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import bg from '../assets/footer.png';
const Footer = () => {
    const { currentLang } = useLanguage();
    const footerData = data[currentLang].footer;

    return (
        <footer className=" bg-[#F9EFEC] relative  text-gray-700 pt-10 pb-6 relative">
            <div className=" mx-44 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-green-700"><img src={footerData.logo} /></h2>
                        <p className="mt-4">{footerData.description}</p>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://www.facebook.com/people/Beyond-Slim-Body-Slimming-Oil/61559800233749/" className="w-10 h-10 flex justify-center items-center rounded-full bg-white border shadow hover:bg-green-700 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://x.com/slimming_oil" className="w-10 h-10 flex justify-center items-center rounded-full bg-white border shadow hover:bg-green-700 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/beyondslimmingoil/" className="w-10 h-10 flex justify-center items-center rounded-full bg-white border shadow hover:bg-green-700 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">
                            {footerData.contactInfo.title}
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-center">
                                <i className="fas fa-map-marker-alt text-blue-700 mr-2"></i>
                                <span>{footerData.contactInfo.address}</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt text-blue-700 mr-2"></i>
                                <span>{footerData.contactInfo.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-blue-700 mr-2"></i>
                                <span>{footerData.contactInfo.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">{footerData.usefulLinks.title}</h3>
                        <ul className="mt-4 grid grid-cols-2 gap-2">
                            {footerData.usefulLinks.links.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-blue-700">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 flex flex-wrap justify-between items-center border-t pt-6 text-sm text-gray-500">
                    <p>{footerData.copyright}</p>
                    <div className="flex space-x-4">
                        <img src={footerData.visa} alt="Visa" className="h-6" />
                        <img src={footerData.paypal} alt="PayPal" className="h-6" />
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-green-700">{footerData.bottomLinks.terms}</a>
                        <a href="#" className="hover:text-green-700">{footerData.bottomLinks.privacy}</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
