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
import product2 from '../assets/img4.jpg';
// import faqImage from '../assets/faq_image.png'; // Add import for FAQ image

const data = {
    ENGLISH: {
        navbar: {
            links: [
                { title: "Home", path: "/" },
                { title: "Products", path: "/products" },
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
            ],
            specialist: {
                title: "No.1 CBD Specialist",
                description: "CBD oils, joint & muscle rubs, skin care & cosmetics, edibles, drinks, e-liquids, concentrates & isolates, vapes & more...",
                rating: "4.9 / 5",
                reviews: "848",
                videoUrl: "https://www.youtube.com/embed/AxYbPlLk79M"
            },
            trending: {
                subtitle: "TRENDING PRODUCTS",
                title: "Top Selling Products",
                product: {
                    badge: "100% cannabis products",
                    name: "CBD Gummies (300mg)",
                    rating: 5,
                    oldPrice: "30.00",
                    price: "66.00",
                    taxInfo: "Tax included.",
                    offerText: "Limited Time Offer:",
                    buttonText: "Buy Now"
                }
            }
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
        },
        products: [
            {
                id: 1,
                name: "Premium CBD Oil",
                description: "Our highest quality CBD oil, made from organic hemp plants. This full-spectrum CBD oil contains naturally occurring cannabinoids, terpenes, and other beneficial compounds. Available in various strengths to suit your needs.",
                price: 59.99,
                oldPrice: 79.99,
                image: product2,
                reviews: 848,
                rating: 5
            },
            // ... more products
        ],
        contact: {
            title: "Contact Us",
            subtitle: "Get in touch with us for any questions or concerns",
            phone: {
                title: "Phone",
                content: "+1 234 567 890"
            },
            email: {
                title: "Email",
                content: "info@example.com"
            },
            address: {
                title: "Address",
                content: "123 Business Street, Dubai, UAE"
            },
            hours: {
                title: "Business Hours",
                content: "Mon - Fri: 9:00 AM - 6:00 PM"
            },
            form: {
                title: "Send us a Message",
                name: "Your Name",
                email: "Your Email",
                phone: "Your Phone",
                subject: "Subject",
                message: "Your Message",
                submit: "Send Message",
                success: "Message sent successfully!",
                error: "Error sending message. Please try again."
            }
        },
        checkout: {
            title: "Order Summary",
            shippingTitle: "Shipping Information",
            formFields: {
                firstName: {
                    label: "First Name",
                    placeholder: "Enter first name",
                    error: "First name is required"
                },
                lastName: {
                    label: "Last Name",
                    placeholder: "Enter last name",
                    error: "Last name is required"
                },
                email: {
                    label: "Email",
                    placeholder: "Enter email address",
                    error: "Email is required",
                    invalidError: "Please enter a valid email address"
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "Enter 10 digit phone number",
                    error: "Phone number is required",
                    invalidError: "Phone number must be exactly 10 digits"
                },
                address: {
                    label: "Address",
                    placeholder: "Enter your address",
                    error: "Address is required"
                },
                city: {
                    label: "City",
                    placeholder: "Enter your city",
                    error: "City is required"
                },
                country: {
                    label: "Country",
                    placeholder: "Select your country",
                    error: "Country is required"
                }
            },
            orderSummary: {
                quantity: "Quantity",
                price: "Price",
                total: "Total",
                shipping: "Shipping Charge"
            },
            successMessage: {
                title: "Order Placed Successfully!",
                description: "Thank you for your purchase. We'll send you an email confirmation shortly.",
                buttonText: "Continue Shopping"
            },
            submitError: "Error submitting form. Please try again.",
            paymentError: "Payment failed. Please try again.",
            submitButton: "Place Order"
        }
    },
    HI: {
        navbar: {
            links: [
                { title: "होम", path: "/" },
                { title: "उत्पाद", path: "/products" },
                { title: "संपर्क करें", path: "/contact" }
            ]
        },
        home: {
            hero: {
                natural: natural,
                img: head,
                title: `अपने आदर्श शरीर को प्राप्त करें <span style="color: #ff1f24;">बियॉन्ड स्लिम</span> के साथ`, // रंग बदलने के लिए इनलाइन स्टाइल
                description: "बियॉन्ड स्लिम के प्रीमियम स्लिमिंग ऑयल के साथ अपने शरीर को बदलें। कुछ ही दिनों में परिणाम देखें।",
                features: [
                    "वसा को प्रभावी ढंग से कम करने और शरीर के स्वास्थ्य को बढ़ाने के लिए एक क्रांतिकारी स्लिमिंग ऑयल।"
                ],
                buttonText: "अभी खरीदें",
                img1: product1
            },
            about: {
                img: sci,
                additionalContent: {
                    title: "बियॉन्ड स्लिम क्यों चुनें?",
                    description: "बियॉन्ड स्लिम को प्राकृतिक सामग्री के साथ तैयार किया गया है ताकि जिद्दी वसा को लक्षित किया जा सके, त्वचा की लोच में सुधार किया जा सके, और समग्र सौंदर्य और स्वास्थ्य को बढ़ावा दिया जा सके।",
                    features: [
                        "जिद्दी वसा को प्रभावी रूप से कम करता है",
                        "त्वचा की मजबूती और बनावट में सुधार करता है",
                        "100% प्राकृतिक सामग्री से बना"
                    ],
                    featuresimg: [
                        ab1,
                        ab3,
                        ab3
                    ]
                },
                product: product
            },
            faq: [ // अपडेटेड FAQ डेटा
                {
                    question: "बियॉन्ड स्लिम क्या है?",
                    answer: "बियॉन्ड स्लिम एक क्रांतिकारी प्राकृतिक स्लिमिंग ऑयल है जिसे शरीर की वसा को कम करने, त्वचा को टोन करने और समग्र त्वचा के स्वास्थ्य और सुंदरता को बढ़ाने के लिए तैयार किया गया है। यह आपके स्वस्थ, आत्मविश्वासपूर्ण जीवन का सही साथी है।"
                },
                {
                    question: "मैं बियॉन्ड स्लिम स्लिमिंग ऑयल का उपयोग कैसे करूं?",
                    answer: "थोड़ी मात्रा में बियॉन्ड स्लिम ऑयल को लक्षित क्षेत्र पर लगाएं और पूरी तरह से अवशोषित होने तक गोलाकार गति में मालिश करें। सर्वोत्तम परिणामों के लिए, इसे दिन में दो बार, नहाने के बाद और सोने से पहले उपयोग करें।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम की सामग्री सुरक्षित है?",
                    answer: "हां, बियॉन्ड स्लिम 100% प्राकृतिक, सुरक्षित और त्वचा के अनुकूल सामग्री से बना है। यह हानिकारक रसायनों से मुक्त है, जिससे यह सभी प्रकार की त्वचा पर दैनिक उपयोग के लिए उपयुक्त है।"
                },
                {
                    question: "परिणाम देखने में कितना समय लगता है?",
                    answer: "परिणाम आपके शरीर के प्रकार और जीवनशैली पर निर्भर हो सकते हैं। हालांकि, अधिकांश उपयोगकर्ता 2-4 सप्ताह की नियमित उपयोग और स्वस्थ आहार और व्यायाम के संयोजन के बाद दृश्यमान सुधार की रिपोर्ट करते हैं।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम सभी प्रकार के शरीर पर उपयोग किया जा सकता है?",
                    answer: "हां, बियॉन्ड स्लिम को सभी प्रकार के शरीर और त्वचा के प्रकारों के लिए डिज़ाइन किया गया है। इसका हल्का फॉर्मूला सुनिश्चित करता है कि हर कोई इसके वसा-घटाने और त्वचा-सुधार गुणों से लाभ उठा सके।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम का कोई साइड इफेक्ट है?",
                    answer: "बियॉन्ड स्लिम प्राकृतिक सामग्री से बना है और डर्मेटोलॉजिकली टेस्ट किया गया है, जिससे साइड इफेक्ट्स का खतरा कम हो जाता है। यदि आपकी त्वचा संवेदनशील है या मौजूदा स्थितियां हैं, तो उपयोग से पहले त्वचा विशेषज्ञ से परामर्श करें।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम पुरुषों और महिलाओं दोनों के लिए उपयुक्त है?",
                    answer: "बिल्कुल! बियॉन्ड स्लिम पुरुषों और महिलाओं दोनों के लिए उनके स्लिमिंग और स्किनकेयर लक्ष्यों को प्राप्त करने के लिए उपयुक्त है।"
                },
                {
                    question: "मैं बियॉन्ड स्लिम स्लिमिंग ऑयल कहां से खरीद सकता हूं?",
                    answer: "आप बियॉन्ड स्लिम को सीधे हमारी वेबसाइट या अधिकृत रिटेलर्स से खरीद सकते हैं। हमारी वेबसाइट के 'उत्पाद' पृष्ठ पर जाएं और अपना ऑर्डर दें।"
                },
                {
                    question: "बियॉन्ड स्लिम को अन्य स्लिमिंग उत्पादों से अलग क्या बनाता है?",
                    answer: "कई स्लिमिंग उत्पादों के विपरीत, बियॉन्ड स्लिम प्राकृतिक वसा-घटाने वाले गुणों को त्वचा-सुधार लाभों के साथ जोड़ता है। यह गैर-चिकना, तेज़-अवशोषित और त्वचा देखभाल उपचार के रूप में भी कार्य करता है।"
                },
                {
                    question: "क्या मैं बियॉन्ड स्लिम का उपयोग एलर्जी होने पर कर सकता हूं?",
                    answer: "बियॉन्ड स्लिम प्राकृतिक सामग्री से बना है, लेकिन यदि आपको विशेष एलर्जी है, तो उपयोग से पहले सामग्री सूची की समीक्षा करें या अपने डॉक्टर से परामर्श करें।"
                }
            ],
            specialist: {
                title: "नंबर 1 सीबीडी विशेषज्ञ",
                description: "सीबीडी तेल, जोड़ों और मांसपेशियों की मालिश, त्वचा की देखभाल और कॉस्मेटिक्स, खाद्य पदार्थ, पेय पदार्थ, ई-लिक्विड, कॉन्सेंट्रेट्स और आइसोलेट्स, वेप्स और बहुत कुछ...",
                rating: "4.9 / 5",
                reviews: "848",
                videoUrl: "https://www.youtube.com/embed/AxYbPlLk79M"
            },
            trending: {
                subtitle: "ट्रेंडिंग उत्पाद",
                title: "टॉप सेलिंग प्रोडक्ट्स",
                product: {
                    badge: "100% कैनबिस उत्पाद",
                    name: "सीबीडी गमीज़ (300mg)",
                    rating: 5,
                    oldPrice: "30.00",
                    price: "66.00",
                    taxInfo: "कर शामिल।",
                    offerText: "सीमित समय की पेशकश:",
                    buttonText: "अभी खरीदें"
                }
            }
        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "बियॉन्ड स्लिम के इनोवेटिव स्लिमिंग ऑयल के साथ अपने शरीर के लक्ष्य प्राप्त करें। प्रत्येक बूँद में स्वास्थ्य और सुंदरता का सही संयोजन अनुभव करें।",
            contactInfo: {
                title: "हमसे संपर्क करें",
                address: "5वां एवेन्यू, न्यू टाउन, वेस्टर्न किंग स्ट्रीट, न्यूयॉर्क",
                phone: "990-852-6444",
                email: "support@beyondslim.com"
            },
            usefulLinks: {
                title: "त्वरित लिंक",
                links: [
                    "यह कैसे काम करता है",
                    "उत्पाद वापसी",
                    "भुगतान के तरीके",
                    "हमारी कहानी",
                    "पूछे जाने वाले प्रश्न",
                    "शिपिंग जानकारी"
                ]
            },
            copyright: "कॉपीराइट © बियॉन्ड स्लिम 2024। सभी अधिकार सुरक्षित।",
            bottomLinks: {
                terms: "नियम और शर्तें",
                privacy: "गोपनीयता नीति"
            }
        },
        products: [
            {
                id: 1,
                name: "प्रीमियम सीबीडी ऑयल",
                description: "हमारे उच्चतम गुणवत्ता वाले सीबीडी ऑयल, जिसे जैविक भांग के पौधों से बनाया गया है। इस फुल-स्पेक्ट्रम सीबीडी ऑयल में स्वाभाविक रूप से पाए जाने वाले कैनाबिनॉइड्स, टरपीन और अन्य लाभकारी यौगिक होते हैं। आपकी आवश्यकताओं के अनुसार विभिन्न ताकतों में उपलब्ध।",
                price: 59.99,
                oldPrice: 79.99,
                image: product2,
                reviews: 848,
                rating: 5
            },
            // ... अन्य उत्पाद
        ],
        contact: {
            title: "हमसे संपर्क करें",
            subtitle: "किसी भी प्रश्न या चिंता के लिए हमसे संपर्क करें",
            phone: {
                title: "फ़ोन",
                content: "+1 234 567 890"
            },
            email: {
                title: "ईमेल",
                content: "info@example.com"
            },
            address: {
                title: "पता",
                content: "123 व्यवसाय स्ट्रीट, दुबई, यूएई"
            },
            hours: {
                title: "व्यवसाय के घंटे",
                content: "सोम - शुक्र: सुबह 9:00 बजे - शाम 6:00 बजे"
            },
            form: {
                title: "हमें एक संदेश भेजें",
                name: "आपका नाम",
                email: "आपका ईमेल",
                phone: "आपका फोन",
                subject: "विषय",
                message: "आपका संदेश",
                submit: "संदेश भेजें",
                success: "संदेश सफलतापूर्वक भेजा गया!",
                error: "संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें।"
            }
        },
        checkout: {
            title: "ऑर्डर सारांश",
            shippingTitle: "शिपिंग जानकारी",
            formFields: {
                firstName: {
                    label: "पहला नाम",
                    placeholder: "पहला नाम दर्ज करें",
                    error: "पहला नाम आवश्यक है"
                },
                lastName: {
                    label: "अंतिम नाम",
                    placeholder: "अंतिम नाम दर्ज करें",
                    error: "अंतिम नाम आवश्यक है"
                },
                email: {
                    label: "ईमेल",
                    placeholder: "ईमेल पता दर्ज करें",
                    error: "ईमेल आवश्यक है",
                    invalidError: "कृपया एक वैध ईमेल पता दर्ज करें"
                },
                phone: {
                    label: "फ़ोन नंबर",
                    placeholder: "10 अंकों का फोन नंबर दर्ज करें",
                    error: "फ़ोन नंबर आवश्यक है",
                    invalidError: "फ़ोन नंबर बिल्कुल 10 अंक का होना चाहिए"
                },
                address: {
                    label: "पता",
                    placeholder: "अपना पता दर्ज करें",
                    error: "पता आवश्यक है"
                },
                city: {
                    label: "शहर",
                    placeholder: "अपना शहर दर्ज करें",
                    error: "शहर आवश्यक है"
                },
                country: {
                    label: "देश",
                    placeholder: "अपना देश चुनें",
                    error: "देश आवश्यक है"
                }
            },
            orderSummary: {
                quantity: "मात्रा",
                price: "कीमत",
                total: "कुल",
                shipping: "शिपिंग शुल्क"
            },
            successMessage: {
                title: "ऑर्डर सफलतापूर्वक प्लेस किया गया!",
                description: "खरीदारी के लिए धन्यवाद। हम आपको जल्द ही एक ईमेल पुष्टिकरण भेजेंगे।",
                buttonText: "शॉपिंग जारी रखें"
            },
            submitError: "फॉर्म जमा करने में त्रुटि। कृपया पुनः प्रयास करें।",
            paymentError: "भुगतान विफल। कृपया पुनः प्रयास करें।",
            submitButton: "ऑर्डर प्लेस करें"
        }
    }
};

export default data;