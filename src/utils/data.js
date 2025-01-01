import visa from '../assets/visa.png';
import logo from '../assets/logo.png';
import paypal from '../assets/paypal.png';
import head from '../assets/header_first_img.png';
import product1 from '../assets/design_one.png';
import sci from '../assets/healone.webp';
import ab1 from '../assets/about_icone.png';
// import ab2 from '../assets/about_ictwo.png';
import ab3 from '../assets/about_icthree.png';
import product from '../assets/about_product.png';
import natural from '../assets/natural.png';
// import faqImage from '../assets/faq_image.png'; // Add import for FAQ image

const data = {
    ENGLISH: {
        navbar: {
            links: [
                { title: "Home", path: "/" },
                { title: "Products", path: "/products" },
                { title: "About", path: "/about" },
                { title: "Contact", path: "/contact" }
            ]
        },
        home: {
            hero: {
                natural: natural,
                img: head,
                title: `Achieve Your Ideal Body with <span style="color: #ff1f24;">Beyond Slim</span>`, // Inline style for color change
                description: "Transform your body with Beyond Slim's premium slimming oil. See visible results in just a few days.",
                features: [
                    "A revolutionary slimming oil for effective fat reduction and enhanced body health."
                ],
                buttonText: "Shop Now",
                img1: product1
            },
            about: {
                img: sci,
                additionalContent: {
                    title: "Why Choose Beyond Slim?",
                    description: "Beyond Slim is formulated with natural ingredients to target stubborn fat areas, improve skin elasticity, and enhance overall beauty and health.",
                    features: [
                        "Reduces stubborn fat effectively",
                        "Improves skin firmness and texture",
                        "Made with 100% natural ingredients"
                    ],
                    featuresimg: [
                        ab1,
                        ab3,
                        ab3
                    ]
                },
                product: product
            },
            faq: [ // Updated FAQ data
                {
                    question: "What is Beyond Slim?",
                    answer: "Beyond Slim is a revolutionary natural slimming oil formulated to help reduce body fat, tone the skin, and enhance overall skin health and beauty. It’s your perfect companion for a healthier, more confident you."
                },
                {
                    question: "How do I use Beyond Slim slimming oil?",
                    answer: "Apply a small amount of Beyond Slim oil to the targeted area and massage in circular motions until fully absorbed. For best results, use twice daily, preferably after a shower and before bedtime."
                },
                {
                    question: "Are the ingredients in Beyond Slim safe?",
                    answer: "Yes, Beyond Slim is made with 100% natural, safe, and skin-friendly ingredients. It is free from harmful chemicals, making it suitable for daily use on all skin types."
                },
                {
                    question: "How long does it take to see results?",
                    answer: "Results may vary depending on your body type and lifestyle. However, most users report visible improvements within 2-4 weeks of consistent use, combined with a healthy diet and exercise."
                },
                {
                    question: "Can Beyond Slim be used on all body types?",
                    answer: "Yes, Beyond Slim is designed for all body types and skin types. Its gentle formula ensures that everyone can benefit from its fat-reducing and skin-enhancing properties."
                },
                {
                    question: "Does Beyond Slim have any side effects?",
                    answer: "Beyond Slim is made from natural ingredients and is dermatologically tested, minimizing the risk of side effects. If you have sensitive skin or existing conditions, consult with a dermatologist before use."
                },
                {
                    question: "Is Beyond Slim suitable for both men and women?",
                    answer: "Absolutely! Beyond Slim is suitable for both men and women looking to achieve their slimming and skincare goals."
                },
                {
                    question: "Where can I purchase Beyond Slim slimming oil?",
                    answer: "You can purchase Beyond Slim directly from our website or authorized retailers. Visit the 'Products' page on our website to place your order."
                },
                {
                    question: "What makes Beyond Slim different from other slimming products?",
                    answer: "Unlike many slimming products, Beyond Slim combines natural fat-reducing properties with skin-enhancing benefits. It is non-greasy, fast-absorbing, and doubles as a skincare treatment."
                },
                {
                    question: "Can I use Beyond Slim if I have allergies?",
                    answer: "Beyond Slim is made with natural ingredients, but if you have specific allergies, please review the ingredient list or consult your doctor before use."
                }
            ]

        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "Achieve your body goals with Beyond Slim's innovative slimming oil. Experience the perfect blend of health and beauty in every drop.",
            contactInfo: {
                title: "Contact Us",
                address: "5th Avenue, New Town, Western King Street, New York",
                phone: "990-852-6444",
                email: "support@beyondslim.com"
            },
            usefulLinks: {
                title: "Quick Links",
                links: [
                    "How It Works",
                    "Product Returns",
                    "Payment Methods",
                    "Our Story",
                    "FAQs",
                    "Shipping Info"
                ]
            },
            copyright: "Copyright © Beyond Slim 2024. All rights reserved.",
            bottomLinks: {
                terms: "Terms and Conditions",
                privacy: "Privacy Policy"
            }
        }
    },
    HI: {
        navbar: {
            links: [
                { title: "होम", path: "/" },
                { title: "उत्पाद", path: "/products" },
                { title: "हमारे बारे में", path: "/about" },
                { title: "संपर्क", path: "/contact" }
            ]
        },
        home: {
            hero: {
                img: head,
                title: "उच्च गुणवत्ता वाली सीबीडी ग्वेर्नसे",
                description: "कल्याण उत्साही और स्वास्थ्य विशेषज्ञों के वैश्विक नेटवर्क के साथ काम करना",
                features: [
                    "1000MG, संपूर्ण पौधा हेम्प एक्सट्रैक्ट।"
                ],
                buttonText: "खरीदारी शुरू करें",
                contentHeight: "h-auto" // Added content height property
            },
            faq: [ // Add FAQ data
                {
                    question: "सीबीडी क्या है?",
                    answer: "सीबीडी एक प्राकृतिक यौगिक है जो भांग के पौधे में पाया जाता है। यह अपने संभावित स्वास्थ्य लाभों के लिए जाना जाता है।"
                },
                {
                    question: "मैं सीबीडी तेल का उपयोग कैसे करूं?",
                    answer: "सीबीडी तेल को सबलिंगुअली लिया जा सकता है, भोजन या पेय में जोड़ा जा सकता है, या शीर्ष रूप से लागू किया जा सकता है।"
                },
                {
                    question: "क्या सीबीडी कानूनी है?",
                    answer: "सीबीडी कई देशों में कानूनी है, लेकिन आपके विशिष्ट स्थान में नियमों की जांच करना महत्वपूर्ण है।"
                }
            ],
            // faqImage: faqImage // Add FAQ image
        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "आपका स्वागत है।",
            contactInfo: {
                title: "संपर्क जानकारी",
                address: "न्यू टाउन वेस्टर्न किंग स्ट्रीट, 5वीं एवेन्यू, न्यूयॉर्क",
                phone: "1800-2355-2356",
                email: "username@domain.com"
            },
            usefulLinks: {
                title: "उपयोगी लिंक्स",
                links: [
                    "हमारी प्रक्रिया",
                    "उत्पाद वापसी",
                    "भुगतान",
                    "हमारे बारे में",
                    "सामान्य प्रश्न",
                    "शिपिंग"
                ]
            },
            copyright: "कॉपीराइट © बियॉन्डस्लिम 2024. सर्वाधिकार सुरक्षित।",
            bottomLinks: {
                terms: "नियम और शर्तें",
                privacy: "गोपनीयता नीति"
            }
        }
    }
};

export default data;