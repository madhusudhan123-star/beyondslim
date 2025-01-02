import React, { useState, useRef, useEffect } from 'react';
import data from '../utils/data';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faq from '../assets/faq.jpg';

const Home = () => {
    const { language } = useLanguage();
    const home = data[language].home;
    const footer = data[language].footer;
    const buttonRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    useEffect(() => {
        const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000;

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
            button.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.1)`;
            button.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2)`;
        };

        const handleMouseLeave = () => {
            button.style.transform = 'translate(0, 0) scale(1)';
            button.style.boxShadow = 'none';
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className='home font-lato bg-gray-100 text-gray-900'>
            <div className='backgroundimg relative'>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10 px-4 md:px-28 py-20 min-h-screen flex items-center'>
                    <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in w-full">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-poppins mb-6"
                                dangerouslySetInnerHTML={{ __html: home.hero.title }}>
                            </h1>
                            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed tracking-wide">
                                {home.hero.description}
                            </p>
                            <a href="/products">
                                <button
                                    ref={buttonRef}
                                    className="bg-blue-500 text-xl md:text-2xl text-white py-3 md:py-4 px-6 md:px-8 rounded-full 
                                    font-bold flex items-center justify-center md:justify-start hover:bg-blue-600 
                                    animate-magnet mx-auto md:mx-0"
                                >
                                    {home.hero.buttonText}
                                    <span className="ml-2">→</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10 mt-8 px-4 md:px-28">
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={home.about.img}
                        alt="Product"
                        className="w-full rounded-3xl shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-baseline gap-4 animate-fade-in">
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4 font-poppins">
                        {home.about.additionalContent.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed tracking-wide">
                        {home.about.additionalContent.description}
                    </p>
                </div>
            </div>

            <div className="mt-10 px-4 md:px-28 animate-drag">
                <div className="bg-blue-400 p-4 md:p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-white p-2 rounded-full shadow-lg">
                                <img
                                    src={footer.logo}
                                    alt="CBD Icon"
                                    className="w-20 md:w-28 rounded"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-2">
                                    {home.specialist.title}
                                </h2>
                                <p className="text-base md:text-lg text-white leading-relaxed tracking-wide">
                                    {home.specialist.description}
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="flex items-center justify-center md:justify-end space-x-1 text-yellow-300">
                                <span className="font-bold text-lg">{home.specialist.rating}</span>
                                <div className="text-sm flex items-center">
                                    <span>★★★★★</span>
                                </div>
                            </div>
                            <p className="text-sm text-white">Based on {home.specialist.reviews} reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-28 my-10">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-[300px] md:h-[600px] rounded-3xl"
                        src={home.specialist.videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="bg-blue-900 text-white py-10 px-4 md:px-28">
                <h3 className="text-xl md:text-2xl font-semibold font-poppins text-yellow-300 text-center md:text-left">
                    {home.trending.subtitle}
                </h3>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 font-poppins text-center md:text-left">
                    {home.trending.title}
                </h1>

                <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-800 mt-8 p-4 md:p-6 rounded-lg">
                    <div className="text-center md:text-left w-full lg:w-1/2 mb-6 lg:mb-0">
                        <p className="text-base md:text-lg font-semibold uppercase font-poppins text-yellow-300">
                            {home.trending.product.badge}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mt-2 font-poppins text-white">
                            {home.trending.product.name}
                        </h2>
                        <div className="mt-2">
                            <span className="text-xl md:text-2xl text-yellow-400">⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="mt-4 text-xl md:text-2xl">
                            <span className="line-through mr-2 text-gray-400">{home.trending.product.oldPrice}</span>
                            <span className="text-yellow-300 font-bold">{home.trending.product.price}</span>
                        </div>
                        <p className="text-base md:text-lg text-gray-300 mt-1">
                            {home.trending.product.taxInfo}
                        </p>

                        <div className="mt-6 border-yellow-300 border-4 border-solid rounded-lg p-4">
                            <p className="text-white">
                                {home.trending.product.offerText}
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-lg md:text-2xl font-semibold mt-2 text-white">
                                <div>{timeLeft.days} days</div>
                                <div>{timeLeft.hours} hours</div>
                                <div>{timeLeft.minutes} minutes</div>
                                <div>{timeLeft.seconds} seconds</div>
                            </div>
                        </div>
                        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 transition-colors duration-300 w-full md:w-auto">
                            <a href="/products">
                                {home.trending.product.buttonText}
                            </a>
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <img
                            src={home.hero.img}
                            alt="CBD Gummies"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-10 px-4 md:px-28 gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                        Frequently Asked Questions
                    </h2>
                    {home.faq.map((item, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left text-base md:text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 
                                    text-white py-3 px-4 md:px-5 rounded-lg flex justify-between items-center shadow-md 
                                    hover:bg-blue-500 transition-colors duration-300"
                            >
                                <span>{item.question}</span>
                                {faqOpen === index ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${faqOpen === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="mt-3 p-4 bg-blue-50 rounded-lg shadow-inner text-sm md:text-base text-gray-700 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img src={faq} alt="FAQ" className="w-full rounded-3xl shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Home;