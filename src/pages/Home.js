import React, { useState, useRef, useEffect } from 'react';
import data from '../utils/data';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons
import faq from '../assets/faq.jpg';

const Home = () => {
    const { currentLang } = useLanguage();
    const home = data[currentLang].home;
    const footer = data[currentLang].footer;
    const buttonRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [faqOpen, setFaqOpen] = useState(null); // Add state for FAQ

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    useEffect(() => {
        const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const button = buttonRef.current;
        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.1)`; // Adjusted scaling
            button.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2)`; // Added shadow effect
        };

        const handleMouseLeave = () => {
            button.style.transform = 'translate(0, 0) scale(1)'; // Reset scaling
            button.style.boxShadow = 'none'; // Reset shadow
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className='home font-lato bg-gray-100 text-gray-900'> {/* Changed font family and background color */}
            {/* <div className='backgroundimg bg-cover bg-center w-screen h-screen'>
                <div className=''>

                </div>
            </div> */}
            <div className={`hero-section  h-[90vh] p-8 flex items-center w-screen relative bg-white`}> {/* Increased height and set background color */}
                <img src={home.hero.natural} className='absolute w-40 left-20 transform -translate-y-1/2 ' style={{ top: '20%' }} /> {/* Floating image with animation */}
                <div className="mx-28 w-screen flex flex-col md:flex-row items-center justify-between animate-fade-in"> {/* Content with fade-in animation */}
                    <div className="relative">
                        <div className="w-full z-10"> {/* Increased image size */}
                            <img src={home.about.product} alt="Golden Drop" className="" /> {/* Floating image with animation */}
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-poppins" dangerouslySetInnerHTML={{ __html: home.hero.title }}></h1> {/* Render HTML content */}
                        <p className="text-xl text-gray-700 mb-10 leading-relaxed tracking-wide">{home.hero.description}</p> {/* Increased font size */}
                        <button ref={buttonRef} className="bg-blue-500 text-2xl text-white py-4 px-8 rounded-full font-bold flex items-center hover:bg-blue-600 animate-magnet"> {/* Changed button color to blue */}
                            {home.hero.buttonText}
                            <span className="ml-2">→</span>
                        </button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-10  md:flex-row justify-between mt-8 mx-28"> {/* New div */}
                <div className="w-full md:w-1/2 relative">
                    <img src={home.about.img} alt="Product" className=" rounded-3xl " /> {/* Floating image with animation */}
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-baseline gap-4 animate-fade-in"> {/* Content with fade-in animation */}
                    <h2 className="text-7xl font-bold text-gray-800 mb-4 font-poppins">{home.about.additionalContent.title}</h2> {/* Fetch title from data */}
                    <p className="text-2xl text-gray-600 mb-4 ml-10 leading-relaxed tracking-wide">{home.about.additionalContent.description}</p> {/* Fetch description from data */}
                    <ul className="list-disc list-inside text-lg  text-gray-600">
                        {home.about.additionalContent.features.map((feature, index) => (
                            <li key={index} className='flex items-center my-4 '>
                                <div className="bg-yellow-300 p-3 rounded-full mx-3">
                                    <img src={home.about.additionalContent.featuresimg[index]} alt={`Feature ${index + 1}`} /> {/* Corrected image source */}
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-10 mx-28 animate-drag shadow-lg"> {/* New div for CBDSpecialistCard with dragging animation and shadow */}
                <div className="bg-blue-400 p-6 rounded-lg shadow-md flex items-center justify-between animate-bend"> {/* Changed background color to blue */}
                    {/* Left Section */}
                    <div className="flex items-center space-x-4">
                        {/* Icon */}
                        <div className="bg-white p-2 rounded-full shadow-lg">
                            <img
                                src={footer.logo}
                                alt="CBD Icon"
                                className="w-28 rounded"
                            />
                        </div>
                        {/* Text Content */}
                        <div>
                            <h2 className="text-5xl font-bold font-poppins text-white">No.1 CBD Specialist</h2>
                            <p className="text-lg text-white mt-1 leading-relaxed tracking-wide">
                                CBD oils, joint & muscle rubs, skin care & cosmetics, edibles,
                                drinks, e-liquids, concentrates & isolates, vapes & more...
                            </p>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="text-right">
                        <div className="flex items-center space-x-1 text-yellow-300">
                            <span className="font-bold text-lg">4.9 / 5</span>
                            <div className="text-sm flex items-center">
                                <span>★★★★★</span>
                            </div>
                        </div>
                        <p className="text-sm text-white">Based on 848 reviews</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-screen my-10">
                    <iframe
                        className="w-full h-full object-cover rounded-3xl"
                        src="https://www.youtube.com/embed/AxYbPlLk79M"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div>
                <div className="bg-blue-900 text-white py-10 px-4 text-lg"> {/* Changed background color to blue */}
                    {/* Header */}
                    <h3 className="text-yellow-300 text-2xl font-semibold font-poppins">TRENDING PRODUCTS</h3> {/* Increased font size */}
                    <h1 className="text-4xl font-bold mt-2 font-poppins">Top Selling Products</h1> {/* Increased font size */}

                    {/* Product Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-800 mt-8 p-6 rounded-lg"> {/* Changed background color to blue */}
                        {/* Product Details */}
                        <div className="text-left max-w-lg w-1/2">
                            <p className="text-lg font-semibold uppercase font-poppins text-yellow-300">100% cannabis products</p> {/* Increased font size */}
                            <h2 className="text-3xl font-bold mt-2 font-poppins text-white">CBD Gummies (300mg)</h2> {/* Increased font size */}
                            <div className="mt-2">
                                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span> {/* Increased font size */}
                            </div>
                            <div className="mt-4 text-2xl">
                                <span className="line-through mr-2 text-gray-400">$30.00</span>
                                <span className="text-yellow-300 font-bold">$66.00</span> {/* Changed text color to yellow */}
                            </div>
                            <p className="text-lg text-gray-300 mt-1 leading-relaxed tracking-wide">Tax included.</p> {/* Increased font size */}

                            {/* Timer */}
                            <div className="mt-6 border-yellow-300 border-4 border-solid rounded-lg"> {/* Changed border color to yellow */}
                                <p className="text-white">Limited Time Offer:</p>
                                <div className="flex space-x-4 text-2xl font-semibold mt-2 text-white"> {/* Increased font size */}
                                    <div>{timeLeft.days} days</div>
                                    <div>{timeLeft.hours} hours</div>
                                    <div>{timeLeft.minutes} minutes</div>
                                    <div>{timeLeft.seconds} seconds</div>
                                </div>
                            </div>
                            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 transition-colors duration-300">Buy Now</button> {/* Added Buy Now button */}
                        </div>

                        {/* Product Image */}
                        <div className="mt-6 lg:mt-0 w-1/2">
                            <img
                                src={home.hero.img}
                                alt="CBD Gummies"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-10 mx-28">
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-4xl font-bold mb-4 font-poppins">Frequently Asked Questions</h2>
                    {home.faq.map((item, index) => (
                        <div key={index} className="mb-6">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-5 rounded-lg flex justify-between items-center shadow-md hover:bg-blue-500 transition-colors duration-300"
                            >
                                <span>{item.question}</span>
                                {faqOpen === index ? <FaChevronUp className="ml-4" /> : <FaChevronDown className="ml-4" />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${faqOpen === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="mt-3 p-4 bg-blue-50 rounded-lg shadow-inner text-sm md:text-base text-gray-700 leading-relaxed tracking-wide">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                    <img src={faq} alt="FAQ" className="rounded-3xl" /> {/* Fetch FAQ image from data.js */}
                </div>
            </div>
        </div>
    );
};

export default Home;

