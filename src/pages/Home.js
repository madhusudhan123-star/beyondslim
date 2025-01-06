import React, { useState, useRef, useEffect, Suspense } from 'react';
import data from '../utils/data';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronDown, FaChevronUp, FaFacebookF, FaTwitter, FaInstagram, FaQuoteRight } from 'react-icons/fa';
import faq from '../assets/faq.jpg';
import heroVideo from '../assets/video2.mp4';
import heroVideo2 from '../assets/video1.mp4';
import one from '../assets/t_one.svg';
import two from '../assets/t_two.svg';
import three from '../assets/t_three.svg';
import four from '../assets/t_four.png';
import five from '../assets/hala.png';
import bottle from '../assets/header_first_img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const { language } = useLanguage();
    const { direction } = data[language];
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
        AOS.init({ duration: 1000 });
    }, []);

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
        <div className={`home font-lato bg-gray-100 text-gray-900 ${direction === 'rtl' ? 'rtl' : ''}`} dir={direction}>
            {/* Second Hero Section with Local Video */}
            {/* Header Section */}
            <section className='relative min-h-[120vh]'>
                <div className='absolute inset-0'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={heroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='absolute inset-0 bg-black bg-opacity-20'></div>
                <div className='relative z-10 px-4 md:px-28 py-20 min-h-screen flex items-center'>
                    <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in w-full">
                        <div className="w-full text-center md:text-start" data-aos="fade-up">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-poppins mb-6"
                                dangerouslySetInnerHTML={{ __html: home.hero.title }}>
                            </h1>
                            <p className="text-lg md:text-2xl lg:text-4xl text-white mb-8 leading-relaxed tracking-wide">
                                {home.hero.description}
                            </p>
                            <a href="/products">
                                <button
                                    ref={buttonRef}
                                    className="bg-blue-500 text-base md:text-xl lg:text-2xl text-white py-2 md:py-3 lg:py-4 
                                    px-4 md:px-6 lg:px-8 rounded-full font-bold flex items-center justify-center md:justify-start 
                                    hover:bg-blue-600 animate-pulse-glow mx-auto md:mx-0"
                                >
                                    {home.hero.buttonText}
                                    <span className="ml-2">→</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Brands Section */}
            <section className='w-full md:w-full h-auto md:h-[11rem] relative md:top-[-11rem] bg-white py-8 md:py-0'>
                <div className="w-full px-4 sm:px-8 py-8 md:py-12 bg-white">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center mx-auto">
                        <div data-aos="fade-right" data-aos-delay="0">
                            <img src={one} alt="Trusted Brand 1" className="max-w-full h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="200">
                            <img src={two} alt="Trusted Brand 2" className="max-w-full h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="400">
                            <img src={three} alt="Trusted Brand 3" className="max-w-full h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="600">
                            <img src={four} alt="Trusted Brand 4" className="w-[8.5rem] h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="800">
                            <img src={five} alt="Trusted Brand 5" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* First Hero Section (existing) */}
            {/* <div className='backgroundimg relative'>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10 px-4 md:px-28 py-20 min-h-screen flex items-center'>
                    <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in w-full">
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-white font-poppins mb-6"
                                dangerouslySetInnerHTML={{ __html: home.hero.title }}>
                            </h1>
                            <p className="text-2xl md:text-4xl text-white mb-8 leading-relaxed tracking-wide">
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
            </div> */}

            {/* About Section */}
            <section className="flex flex-col md:flex-row justify-between gap-10 mt-8 px-4 py-10 md:px-28">
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-baseline gap-4 animate-fade-in" data-aos="fade-up">
                    <h2 className="text-[5vw] leading-[3vw] font-bold text-gray-800 mb-4 font-poppins"
                        dangerouslySetInnerHTML={{ __html: home.about.additionalContent.title }}>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed tracking-wide"
                        dangerouslySetInnerHTML={{ __html: home.about.additionalContent.description }}>
                    </p>
                    <a href="/products">
                    <button
                                    ref={buttonRef}
                                    className="bg-blue-500 text-base md:text-xl lg:text-2xl text-white py-2 md:py-3 lg:py-4 
                                    px-4 md:px-6 lg:px-8 rounded-full font-bold flex items-center justify-center md:justify-start 
                                    hover:bg-blue-600 animate-pulse-glow mx-auto md:mx-0"
                                >
                                    {home.hero.buttonText}
                                    <span className="ml-2">→</span>
                                </button>
                    </a>
                </div>
                <div className="w-full md:w-1/2 relative mt-8 md:mt-0" data-aos="fade-left">
                    <img
                        src={home.about.img}
                        alt="Product"
                        className="w-full rounded-3xl shadow-lg"
                    />
                </div>
            </section>

            {/* Product Review Section */}
            <section className="mt-10 px-4 md:px-28 animate-drag">
                <div className="bg-blue-400 p-4 md:p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-white p-2 rounded-full shadow-lg">
                                <img
                                    src={footer.logo}
                                    alt="CBD Icon"
                                    className="w-16 md:w-20 lg:w-28 rounded"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-poppins text-white mb-2">
                                    {home.specialist.title}
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed tracking-wide">
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
            </section>

            {/* video Section */}
            <section className="px-4 md:px-28 my-10">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-[300px] md:h-screen rounded-3xl"
                        src={home.specialist.videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Natural Section */}
            <div>
            <section id="benefits" className="py-20 bg-white">
                    <div className=" px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                        <h2 className="text-6xl font-bold text-gray-900 mb-4">
                            Why Choose BeyondSlim?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our revolutionary formula combines science and nature to deliver exceptional results
                        </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {home.benefits.map((benefit, index) => (
                            <div key={index} className="p-6 bg-white my-5 rounded-xl shadow-md hover:shadow-md transition">
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>
            </div>


            {/* product style */}
            {/* <div className='relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden'>
                <div className="absolute w-[150%] md:w-[110%] h-16 md:h-24 bg-orange-500 rotate-[23deg] transform z-0">
                    <marquee behavior="scroll" direction={direction === 'rtl' ? 'right' : 'left'} className="text-2xl md:text-4xl text-white py-4 md:py-6">
                    {home.product.one}
                    </marquee>
                </div>
                <div className="absolute w-[150%] md:w-[110%] h-16 md:h-24 bg-orange-500 -rotate-[20deg] z-0">
                    <marquee behavior="scroll" direction={direction === 'rtl' ? 'right' : 'left'} className="text-2xl md:text-4xl text-white py-4 md:py-6">
                    {home.product.two}
                    </marquee>
                </div>
                <div className='relative z-10 w-3/4 md:w-auto'>
                    <img src={bottle} alt="Product" className='w-auto md:w-auto h-auto object-contain' />
                </div>
            </div> */}


            <section id="howitworks" className="py-20 bg-blue-50">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                    <h2 className="text-7xl font-bold text-red-400 mb-4">
                        {home.howItWorks.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {home.howItWorks.subtitle}
                    </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                    {home.howItWorks.steps.map((item, index) => (
                        <div key={index} className="relative">
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                            <img 
                            src={item.image} 
                            alt={item.title}
                            className="rounded-lg object-cover w-full h-64"
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <div className="flex bg-blue-50 flex-col md:flex-row justify-between relative z-10 mt-10 px-4 md:px-28 gap-8">
                <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0" data-aos="fade-right">
                    <img src={faq} alt="FAQ" className="w-full rounded-3xl shadow-lg" />
                </div>
                <div className="w-full md:w-1/2" data-aos="fade-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-poppins">
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
            </div>

            {/* Review Section */}
            {/* <div className="px-4 md:px-28 py-16 bg-white overflow-hidden">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
                        {home.testimonials.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        {home.testimonials.subtitle}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 overflow-x-auto md:overflow-hidden relative">
                    <div className="hidden md:block h-full w-1/5 z-10 absolute top-0 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="hidden md:block h-full w-1/5 z-10 absolute top-0 right-0 bg-gradient-to-r from-transparent to-white"></div>
                    <div className="flex space-x-8 animate-slide-track">
                        {[...home.testimonials.items, ...home.testimonials.items].map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full md:w-[400px] flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                                <FaQuoteRight className="text-yellow-400 text-4xl mb-6" />
                                <p className="text-gray-600 text-lg text-center mb-6">
                                    {testimonial.quote}
                                </p>
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-24 rounded-full shadow-md mb-4" 
                                />
                                <h3 className="font-bold text-xl mb-3">{testimonial.name}</h3>
                                <div className="flex items-center justify-center space-x-1 text-yellow-300">
                                    <span className="font-bold text-lg">5.0</span>
                                    <div className="text-sm flex items-center">
                                        <span>★★★★★</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* Review Section */}
<div className="px-4 md:px-28 py-16 bg-blue-50 overflow-hidden">
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
            {home.testimonials.title}
        </h2>
        <p className="text-gray-600 text-lg mb-6">
            {home.testimonials.subtitle}
        </p>
    </div>

    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 overflow-x-auto md:overflow-hidden relative">
        <div className="hidden md:block h-full w-1/5 z-10 absolute top-0 bg-gradient-to-r from-white to-transparent"></div>
        <div className="hidden md:block h-full w-1/5 z-10 absolute top-0 right-0 bg-gradient-to-r from-transparent to-white"></div>
        <div className="flex space-x-8 animate-slide-track">
            {[...home.testimonials.items, ...home.testimonials.items].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-[400px] flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg" 
                    data-aos="fade-up" data-aos-delay={index * 100}>
                    <FaQuoteRight className="text-yellow-400 text-4xl mb-6" />
                    <p className="text-gray-600 text-lg text-center mb-6">
                        {testimonial.quote}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <span className="font-bold text-lg">{testimonial.star}</span>
                        <div className="text-sm flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-2xl ${i < Math.floor(testimonial.star) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                    <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-24 h-24 object-cover rounded-full shadow-md mb-4" 
                    />
                    <h3 className="font-bold text-xl mb-3">{testimonial.name}</h3>
                </div>
            ))}
        </div>
    </div>
</div>
        </div>
    );
};

export default Home;

            // <section>
            //     <div className='w-full h-screen bg-gray-100 flex items-center justify-center px-4 md:px-0'>
            //         {/* Video Container with Background */}
            //         <div className='w-full md:w-1/2 h-[500px] md:h-2/3 relative' data-aos="fade-up">
            //             <video
            //                 autoPlay
            //                 loop
            //                 muted
            //                 playsInline
            //                 className="w-full h-full object-cover rounded-xl shadow-lg"
            //             >
            //                 <source src={heroVideo2} type="video/mp4" />
            //                 Your browser does not support the video tag.
            //             </video>

            //             {/* Overlapping Content */}
            //             <div className='absolute bottom-0 right-0 w-full md:w-2/3 bg-white shadow-lg 
            //                 rounded-t-3xl md:rounded-3xl transform translate-y-1/3 
            //                 md:translate-y-1/4 md:translate-x-1/4'>
            //                 <p className='p-4 md:p-6 lg:p-8 text-sm md:text-base lg:text-lg font-poppins text-gray-800  overflow-y-auto'>
            //                 {home.product.three}
            //                 </p>
            //             </div>
            //         </div>
            //     </div>
            // </section>